@include('rapyd_admin::pdf.layout.pdf-header',['styling'=>'pdf-invoice'])
<h1 class="invoice_header">
  <span>{{$pdf['title']}}</span><br>
  Bond #: {{$policy['bond_number']}}<br><br>
  Surety: {{$surety['name']}}<br>
  Issue Date: {{$policy['date_issue']->format('m-d-Y')}}<br><br>
  &nbsp;&nbsp;&nbsp; <span>Effective Date: {{$policy['date_effective']}}</span>
  &nbsp;&nbsp;&nbsp; <span>Expiration Date: {{$policy['date_expire']}}</span>
</h1>

<div id="section_business_summary">
  {{-- AGENCY INFO --}}
  <div>
    @if(isset($agency))
      <p><strong>{{$agency['name']}}</strong></p>
      {{$agent['name_full']}}<br />
      {{$agency['address_street']}} {{$agency['address_street_2']}}<br />
      {{$agency['address_city']}}, {{$agency['address_state']}} {{$agency['address_zip']}}
    @endif
  </div>

  {{-- OBLIGEE INFO --}}
  <div>
    <p><strong>
      ${{number_format($bond['limit'], 0)}} {{$bond['state_initial']}} {{$bond['description']}}
    </strong></p>
    {{$obligee['name']}}<br>
    {{$obligee['address_street']}} {{$obligee['address_street_2']}}<br />
    {{$obligee['address_city']}}, {{$obligee['address_state']}} {{$obligee['address_zip']}}
  </div>

  {{-- PRINCIPAL INFO --}}
  <div class="principals">
    @if (isset($principals) && count($principals) > 0)
      <strong>Principals:</strong>
      @foreach ($principals as $idx => $principal)
        {{$principal['name_first']}} {{$principal['name_last']}}
        @if($idx !== array_key_last($principals)), @endif
      @endforeach
    @endif
  </div>
</div>

{{-- PAYMENT PLAN INFORMATION --}}
@include('rapyd_admin::pdf.layout.payment-plan')

{{-- FOOTER --}}
@include('rapyd_admin::pdf.layout.pdf-footer', $agency)
