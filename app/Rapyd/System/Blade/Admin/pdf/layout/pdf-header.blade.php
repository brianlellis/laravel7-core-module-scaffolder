<!DOCTYPE html>
<html>
<head>
  <title>{{$pdf['title']}}</title>
  @include("rapyd_admin::pdf.styling.{$styling}")
</head>
<body>
<div id="section_header">
  <div>
    @if($is_agent)
      <img src="{{ $system['sitewide_logo_large'] }}" width="150"/>
    @else
      {{ $agency['name'] }}<br>
      @if($agency['license'] ?? false)
        DOI License # {{$agency['license']}}<br>
      @endif
      Phone: {{ $agency['phone_main'] }}
    @endif
  </div>

  <div>
    @if($is_agent)
      {{ $system['sitewide_company_street'] }} {{ $system['sitewide_company_street_2'] }} <br>
      {{ $system['sitewide_company_city'] }}, {{ $system['sitewide_company_state'] }} {{ $system['sitewide_company_zip'] }} <br>
      @if($system['sitewide_company_phone'])
      Phone: {{ $system['sitewide_company_phone'] }} <br>
      @endif
      @if($system['sitewide_company_email'])
        Email: {{ $system['sitewide_company_email'] }}
      @endif
    @else
      {{-- AGENT INFO --}}
      {{ $agency['address_street'] }} {{ $agency['address_street_2'] }}<br>
      {{ $agency['address_city'] }}, {{ $agency['address_state'] }} {{ $agency['address_zip'] }}<br>
      {{ $agent['email'] }}
    @endif
  </div>
</div>
