@include('rapyd_admin::pdf.layout.pdf-header',['styling'=>'pdf-invoice'])

<h1 class="invoice_header">
  <span>{{ $pdf['title']}}</span><br>
  Bond #: {{ $policy['bond_number']}}<br><br>
  Surety: {{$surety['name']}}<br>
  Issue Date: {{ !empty($policy['date_issue']) ? $policy['date_issue']->format('m-d-Y') : '' }}<br><br>
  &nbsp;&nbsp;&nbsp; <span>Effective Date: {{$policy['date_effective']}}</span>
  &nbsp;&nbsp;&nbsp; <span>Expiration Date: {{$policy['date_expire']}}</span>
</h1>

<div id="section_business_summary">
  {{-- BUSINESS INFO --}}
  <div>
    @if(isset($agency))
      <p><strong>{{$agency['name']}}</strong></p>
      {{$agent['name_full']}}<br />
      {{ $agency['address_street'] }} {{ $agency['address_street_2'] }}<br />
      {{ $agency['address_city'] }}, {{ $agency['address_state'] }} {{ $agency['address_zip'] }}
    @endif
  </div>

  {{-- OBLIGEE INFO --}}
  <div>
    <p><strong>
      ${{ number_format($bond['limit'], 0) }} {{ $bond['state_initial'] }} {{ $bond['description'] }}<br>
    </strong></p>

    {{$obligee['name']}}<br>
    {{trim($obligee['address_street'] . ' ' . $obligee['address_street_2'])}}<br />
    {{$obligee['address_city']}}, {{$obligee['address_state']}} {{$obligee['address_zip']}}
  </div>

  {{-- PRINCIPAL INFO --}}
  @if(count($principals))
    <div class="principals">
      <strong>Principals:</strong>
      @foreach ($principals as $idx => $principal)
        {{$principal['name_first']}} {{$principal['name_last']}}
        @if($idx !== array_key_last($principals)), @endif
      @endforeach
    </div>
  @endif
</div>

@if($is_agent)
  {{-- INVOICE BREAKDOWN --}}
  <div style="margin-top: 20px" class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      {{-- CUSTOMER --}}
      <tr class="heading">
        <td style="width: 20%">DESCRIPTION</td>
        <td style="width: 15%">GROSS AMOUNT</td>
        <td style="width: 15%">AGENT %</td>
        <td style="width: 25%">AGENT COMPENSATION</td>
        <td style="width: 25%">NET TO SURETY</td>
      </tr>

      <tr class="details">
        <td style="width: 20%">Premium / Commission</td>
        <td style="width: 15%">${{number_format($accounting['premium_revenue'],2)}}</td>
        <td style="width: 15%">{{$accounting['comm_rate_agent']}}%</td>
        <td style="width: 25%">${{number_format($accounting['commission_agent'],2)}}</td>
        <td style="width: 25%">
          ${{number_format($accounting['premium_revenue'] - $accounting['commission_agent'],2)}}
        </td>
      </tr>
      <tr class="details">
        <td style="width: 20%">Administrative Fee</td>
        <td style="width: 15%">${{number_format($accounting['fee_system'],2)}}</td>
        <td style="width: 15%">0%</td>
        <td style="width: 25%">$0.00</td>
        <td style="width: 25%">${{number_format($accounting['fee_system'],2)}}</td>
      </tr>
      <tr class="details">
        <td style="width: 20%">Broker Fee</td>
        <td style="width: 15%">${{number_format(abs($accounting['fee_broker']),2)}}</td>
        <td style="width: 15%">100%</td>
        <td style="width: 25%">${{number_format(abs($accounting['fee_broker']),2)}}</td>
        <td style="width: 25%">$0.00</td>
      </tr>
      <tr class="details">
        <td style="width: 20%">Surety Fee</td>
        <td style="width: 15%">${{number_format($accounting['fee_surety'],2)}}</td>
        <td style="width: 15%">0%</td>
        <td style="width: 25%">$0.00</td>
        <td style="width: 25%">${{number_format($accounting['fee_surety'],2)}}</td>
      </tr>
      <tr class="details">
        <td style="width: 20%">Tax</td>
        <td style="width: 15%">${{number_format($accounting['tax'],2)}}</td>
        <td style="width: 15%">0%</td>
        <td style="width: 25%">$0.00</td>
        <td style="width: 25%">${{number_format($accounting['tax'],2)}}</td>
      </tr>
      <tr class="details">
        <td style="width: 20%">Total</td>
        <td style="width: 15%">${{number_format($accounting['total_with_fees'],2)}}</td>
        <td style="width: 15%"></td>
        <td style="width: 25%"></td>
        <td style="width: 25%">
          ${{
            number_format(
              ($accounting['premium_revenue'] + $accounting['fee_surety'] + $accounting['tax']) -
              $accounting['commission_agent']
            ,2)
          }}
        </td>
      </tr>
    </table>
  </div>

  @if ($accounting['owed_by_agent'] > 0)
    <div style="position: absolute; left: 70px; width: 220px; text-align: center">
      <h1 style="font-size: 15pt">PLEASE REMIT PAYMENT BY<br><br> {{date('Y-m-d')}}</h1>
    </div>
  @endif

  {{-- POLICY ACCOUNTING SUMMARY --}}
  <div class="invoice-box">
    {{-- PAYMENT PLAN ACCOUNTING SUMMARY --}}
    <table style="margin-top: 10px;" cellpadding="0" cellspacing="0">
      <tr class="details bottom">

        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Premium, Fees &amp; Taxes</td>
        <td>${{number_format($accounting['total_with_fees'], 2)}}</td>
      </tr>

      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Delivery</td>
        <td>
          ${{number_format(abs($accounting['fee_delivery']), 2)}}
        </td>
      </tr>

      {{-- SYSTEM COLLECTION REMAINING --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Collected By Us</td>
        <td>${{number_format($accounting['collect_by_system'], 2)}}</td>
      </tr>

      {{-- AGENT COMMISSION --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Agent Commission &amp; Fees</td>
        @if ($accounting['compensation_agent'] < 0)
          <td>(${{number_format(abs($accounting['compensation_agent']),2)}})</td>
        @else
          <td>${{number_format($accounting['compensation_agent'],2)}}</td>
        @endif
      </tr>

      {{-- AMOUNT DUE TO OR BY AGENT --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>

        @if ($accounting['owed_by_agent'] < 0)
          <td><strong>Due To Agent</strong></td>
          <td><strong>${{number_format(abs($accounting['owed_by_agent']), 2)}}</strong></td>
        @else
          <td><strong>Due From Agent</strong></td>
          <td><strong>${{number_format($accounting['owed_by_agent'], 2)}}</strong></td>
        @endif
      </tr>
    </table>
  </div>
@else
  {{-- POLICY ACCOUNTING SUMMARY --}}
  <div class="invoice-box">
    <table style="margin-top: 20px;" cellpadding="0" cellspacing="0">
      <tr class="heading bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Policy Cost Summary</td>
      </tr>

      {{-- Subtotal Installments --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Gross Premium</td>
        <td>${{number_format($accounting['pay_in_full'],2)}}</td>
      </tr>

      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Fees &amp; Taxes</td>
        <td>
          ${{number_format(abs($accounting['fee_total']),2)}}
        </td>
      </tr>

      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Delivery</td>
        <td>
          ${{number_format(abs($accounting['fee_delivery']),2)}}
        </td>
      </tr>

      {{-- Collect At Issue --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Payments</td>
        <td><strong>
          (${{number_format(($accounting['collect_at_issue'] + $accounting['collect_by_agent']),2)}})
        </strong></td>
      </tr>

      {{-- Total Amount --}}
      <tr class="details bottom">
        <td class="none"></td><td class="none"></td><td class="none"></td>
        <td>Outsanding Balance</td>
        <td><strong>
          ${{
            number_format(
              ($accounting['collect_by_system'] + $accounting['collect_by_agent']) -
              ($accounting['collect_at_issue'] + $accounting['collect_by_agent'])
            ,2)
          }}
        </strong></td>
      </tr>
    </table>
  </div>
@endif

@if($accounting['is_installment'])
  @include('rapyd_admin::pdf.layout.payment-plan')
@else
  {{-- ACCOUNTING INFO --}}
  <h1 class="invoice_header"><span>Pay In Full Payments</span></h1>
  <div class="invoice-box">
    <table cellpadding="0" cellspacing="0">
      {{-- CUSTOMER --}}
      <tr class="heading">
        <td>PAYMENT</td>
        <td>COLLECTION</td>
        <td>DATE DUE</td>
        <td>DATE PAID</td>
        <td>AMOUNT</td>
      </tr>

      <tr class="details">
        <td><strong>Pay In Full</strong></td> {{-- PAYMENT --}}

        @if($accounting['collect_by_agent'] > 0)
          <td>{{$agency['name']}}</td>
        @else
          <td>{{ucfirst(request()->getHost())}}</td>
        @endif

        <td>{{!empty($policy['date_issue']) ? $policy['date_issue']->format('m-d-Y') : ''}}</td>
        <td>{{!empty($policy['date_issue']) ? $policy['date_issue']->format('m-d-Y') : ''}}</td>
        <td>
          ${{number_format($accounting['collect_by_system'] + $accounting['collect_by_agent'], 2)}}
          @if($is_agent && $accounting['fee_delivery'] > 0)
           (incl. delivery)
          @endif
        </td>
      </tr>
    </table>
  </div>
@endif

{{-- FOOTER --}}
@include('rapyd_admin::pdf.layout.pdf-footer', $agency)
