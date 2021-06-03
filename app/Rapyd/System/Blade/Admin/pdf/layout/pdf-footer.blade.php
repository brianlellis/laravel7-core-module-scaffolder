<div id="section_footer">
  @if($agency['name'] ?? false)
    {{-- AGENCY NAME --}}
    {{ $agency['name'] }} -
    {{ $agency['address_street'] }} {{ $agency['address_street_2'] }}
    {{ $agency['address_city'] }}, {{ $agency['address_state'] }} {{ $agency['address_zip'] }}
  @else
    {{-- Company Info --}}
    {{ $system['sitewide_company_name'] }} -
    {{ $system['sitewide_company_street'] }} {{ $system['sitewide_company_street_2'] }}
    {{ $system['sitewide_company_city'] }}, {{ $system['sitewide_company_state'] }} {{ $system['sitewide_company_zip'] }}
  @endif
</div>
</body>
</html>
