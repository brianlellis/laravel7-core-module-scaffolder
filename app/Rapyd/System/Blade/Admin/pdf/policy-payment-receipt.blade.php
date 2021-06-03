<!DOCTYPE html>
<html>
<head>
  <title>{{ $pdf['title'] ?? $title }}</title>
  @include('rapyd_admin::pdf.styling.pdf-payment-receipt')
</head>
<body>
<div class="invoice-box">
  <div id="section_top">
    <div class="one">
      <h2>
        Payment Receipt<br>
        <span class="website">
          {{request()->getHost()}}
        </span>
      </h2>
    </div>
    <div class="two">
      @if(isset($agency) && $agency['name'] != '')
        {{-- AGENCY NAME --}}
        {{$agency['name']}}<br />
        {{-- AGENT INFO --}}
        @if($agency['license'])
          DOI License #{{$agency['license']}}<br />
        @endif
        @if($agency['phone_main'])
          Phone: {{$agency['phone_main']}}<br />
        @endif
        @if($agency['email'])
          Email: {{$agency['email']}}
        @endif
      @endif
    </div>
  </div>

  <table cellpadding="0" cellspacing="0">
    {{-- CUSTOMER --}}
    <tr class="heading">
      <td>Customer</td>
      <td>Bond #{{$policy['bond_number']}}</td>
    </tr>

    {{-- PAYEE INFO --}}
    <tr class="details">
      <td>{{$accounting['payment']['payee_name']}}</td>
    </tr>

    {{-- DESCRIPTION --}}
    <tr class="heading">
      <td>Description</td>
      <td>Date</td>
    </tr>
    <tr class="details">
      <td>Bond Payment</td>
      <td>{{$accounting['payment']['date_paid']}}</td>
    </tr>

    {{-- PAYMENT METHOD --}}
    <tr class="heading">
      <td>Payment Method</td>
      <td>
        @if($accounting['payment']['authnet'])
         {{$accounting['payment']['authnet']['payment_type']}}
        @else
          {{$accounting['payment']['method']}}
        @endif
      </td>
    </tr>

    <tr class="details">
      <td>
        @if($accounting['payment']['authnet'])
          @if($accounting['payment']['authnet']['payment_type'] == 'ACH')
            Account Number Last 6: {{substr($accounting['payment']['authnet']['account'], -6)}}
          @else
            {{$accounting['payment']['authnet']['type']}} 
            Last 4: {{$accounting['payment']['authnet']['last4']}}
          @endif
        @else
          System Process Amount
        @endif
      </td>
      <td>
        ${{number_format($accounting['payment']['amount'],2)}}
      </td>
    </tr>

    {{-- BALANCE LEFT --}}
    <tr class="heading">
      <td>ORIGINAL BALANCE</td>
      <td>${{number_format($accounting['payment']['balance_original'],2)}}</td>
    </tr>
    <tr class="heading">
      <td>PREVIOUS BALANCE</td>
      <td>${{number_format($accounting['payment']['balance_prior'],2)}}</td>
    </tr>
    <tr class="heading">
      <td>BALANCE REMAINING</td>
      <td>${{number_format(($accounting['payment']['balance_current']),2)}}</td>
    </tr>
  </table>
</div>
@include('rapyd_admin::pdf.layout.pdf-footer')
