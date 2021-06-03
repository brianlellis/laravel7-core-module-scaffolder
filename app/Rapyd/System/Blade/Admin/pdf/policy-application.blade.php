@include('rapyd_admin::pdf.layout.pdf-header', ['styling' => 'pdf-application'])
<div id="section_top">
  <h1>
    ${{number_format($bond['limit'], 0)}} {{$bond['state_initial']}} {{$bond['description']}}<br>
    Application Date: {{$pdf['app_date']}}
  </h1>
</div>

<div id="section_business_summary">
  {{-- BUSINESS INFO --}}
  <div>
    <strong>Business Name:</strong> {{$business['name']}}<br />
    <span><strong>Entity Type:</strong> {{$business['entity']}}</span>
  </div>
  <div style="text-align: right;">
    <strong>Address:</strong> 
    {{$business['address_street']}} {{$business['address_street_2']}}<br />
    <strong>City, State, Zip:</strong> 
    {{$business['address_city']}}, {{$business['address_state']}} {{$business['address_zip']}}
  </div>

  {{-- PRINCIPAL INFO --}}
  <div class="principals">
    @if (count($principals))
      <strong>Principals:</strong>
      @foreach ($principals as $idx => $principal)
        {{$principal['name_first']}} 
        {{$principal['name_last']}}
        @if($idx !== array_key_last($principals)), @endif
      @endforeach
    @endif
  </div>
</div>

{{-- QUOTE INFORMATION --}}
@if(!$is_esign)
  {{-- POLICY QUOTES --}}
  <p class="quote_title">Select A Quote</p>

  <div id="section_policy_quotes">
    @foreach($policy['quotes'] as $quote)
      @if($quote->pay_install_available !== 0)
        @php
          $installment_present = true;
        @endphp
      @endif
    @endforeach

    <div class="quote_headers">
      <div class="quote_term">Term</div>
      <div class="quote_pay_in_full">Pay In Full</div>
      @if(isset($installment_present))
        <div class="quote_installment">Installment</div>
      @endif
    </div>

    @foreach($policy['quotes'] as $idx => $quote)
      <div class="quote_row quote_row_1">
        {{-- TERM --}}
        <div class="quote_term">
          @php
            $year_text = $quote->term_years > 1 ? 'years' : 'year';
          @endphp

          @if($quote->term_months)
            @if($quote->term_years)
              {{$quote->term_years}} {{$year_text}} {{$quote->term_months}} months
            @else
              {{$quote->term_months}} months
            @endif
          @else
            {{$quote->term_years}} {{$year_text}}
          @endif
        </div>

        {{-- PAY IN FULL --}}
        <div class="quote_pay_in_full">
          @php
            $quote_pay_full = floatval($quote->pay_full_uncalculated) + 
                              floatval($accounting['fee_stepper_broker']) +
                              floatval($quote->pay_full_tax);
          @endphp
          ${{number_format($quote_pay_full, 2)}}
        </div>

        {{-- INSTALLMENT --}}
        @if(isset($installment_present))
          @if($quote->pay_install_available !== 0)
            <div class="quote_installment">
              @php
                $quote_pay_install  = floatval($quote->pay_install_down) + 
                                      floatval($accounting['fee_stepper_broker']) +
                                      floatval($quote->pay_full_tax);
              @endphp
              ${{number_format($quote_pay_install, 2)}} Down and
              ${{number_format($quote->pay_install_monthly,2)}} for
              {{$quote->pay_install_months + 1}} months.
            </div>
          @else
            <div class="quote_installment not_available">
              Not Available
            </div>
          @endif
        @endif
      </div>
    @endforeach
  </div>

  {{-- PAYMENT METHODS --}}
  <p class="quote_title">
    Payment Method
    @if(isset($installment_present))
      <br>(CREDIT/DEBIT CARD REQUIRED FOR INSTALLMENTS)
    @endif
  </p>

  <div id="section_policy_payment">
    {{-- CHECK --}}
    <div>
      <p><strong>By Credit/Debit Card</strong></p>
      <p>
        Card #: ____________________________<br><br>
        Exp:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________________
      </p>
    </div>

    {{-- CREDIT/DEBIT CARD --}}
    <div>
      <p><strong>Or Make Check Payable To</strong></p>

      {{-- AGENT INFORMATION --}}
      <p>
        {{-- AGENCY NAME --}}
        {{ $agency['name'] }}<br>
        {{-- AGENCY ADDRESS --}}
        {{ $agency['address_street'] }} {{ $agency['address_street_2'] }}<br>
        {{ $agency['address_city'] }}, {{ $agency['address_state'] }} {{ $agency['address_zip'] }}
      </p>
    </div>
  </div>
@endif

{{-- INDEMNITY AGREEMENT --}}
<div id="section_indemnity">
  {!! \SettingsSite::get('pdf_application_indemnity') !!}
</div>

<div id="section_signature">
  <ul class="signature_fields">
    @if($is_esign)
      <li class="input_line">
        @if(isset($principal['name_first']) || $principal->name_first)
          Signature X: 
          <i>/s/{{$principal['name_first']}} {{$principal['name_last']}}</i>
        @else
          Signature X: <i>/s/{{$business['name']}}</i>
        @endif
      </li>

      <li class="input_line_2">Date: {{$pdf['app_date']}}</li>

      <li class="input_under_defs">
        @if(isset($principal['name_first']) || $principal->name_first)
          <span class="input_under_name">
            {{$principal['name_first']}} {{$principal['name_last']}}
          </span>
        @else
          <span class="input_under_name">{{$business['name']}}</span>
        @endif
        <span class="input_under_esig">E-SIG IP:{{$ip_address}} {ts '{{$timestamp}}'}</span>
      </li>
    @else
      <li class="input_line">Signature X:</li>
      <li class="input_line_2">Date:</li>
      <li class="input_under_defs">
        <span class="input_under_name">{{$business['name']}}</span>
      </li>
    @endif
  </ul>
</div>
{{-- FOOTER --}}
@include('rapyd_admin::pdf.layout.pdf-footer', $agency)
