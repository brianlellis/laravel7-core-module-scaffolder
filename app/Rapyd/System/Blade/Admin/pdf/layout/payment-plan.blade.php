<h1 class="invoice_header" style="margin-bottom: 5px; margin-top: 40px"><span>
  Policy Installment Payment Plan
</span></h1>
<div class="invoice-box">
  <table cellpadding="0" cellspacing="0">
    {{-- CUSTOMER --}}
    <tr class="heading">
      <td style="width: 18%">PAYMENT</td>
      <td style="width: 46%">COLLECTION</td>
      <td style="width: 12%">DATE DUE</td>
      <td style="width: 12%">DATE PAID</td>
      <td style="width: 12%">AMOUNT</td>
    </tr>

    <tr class="details">
      <td style="width: 18%"><strong>Down Payment</strong></td> {{-- PAYMENT --}}

      @if($accounting['is_bill_agent'])
        <td style="width: 46%">{{$agency['name']}}</td> {{-- COLLECTION --}}
      @else
        <td>{{ucfirst(request()->getHost())}}</td> {{-- COLLECTION --}}
      @endif
      
      <td style="width: 12%">{{$policy['date_issue']->format('m-d-Y')}}</td> {{-- DATE DUE --}}
      <td style="width: 12%">{{$policy['date_issue']->format('m-d-Y')}}</td> {{-- DATE PAID --}}
      <td style="width: 12%">${{number_format($accounting['install_down'], 2)}}</td> {{-- AMOUNT --}}
    </tr>

    @for ($i=1; $i <= $accounting['install_months']; $i++)
      <tr class="details">
        <td style="width: 18%">Monthly Payment {{$i}}</td> {{-- PAYMENT --}}
        <td style="width: 46%">{{ucfirst(request()->getHost())}}</td> {{-- COLLECTION --}}
        <td style="width: 12%"></td> {{-- DATE DUE --}}
        <td style="width: 12%"></td> {{-- DATE PAID --}}
        <td style="width: 12%">${{number_format($accounting['install_monthly'], 2)}}</td> {{-- AMOUNT --}}
      </tr>
    @endfor
    <tr class="details">
      <td style="width: 18%">Monthly Payment {{$i}}</td> {{-- PAYMENT --}}
      <td style="width: 46%">{{ucfirst(request()->getHost())}}</td> {{-- COLLECTION --}}
      <td style="width: 12%"></td> {{-- DATE DUE --}}
      <td style="width: 12%"></td> {{-- DATE PAID --}}
      <td style="width: 12%">${{number_format($accounting['install_final'], 2)}}</td> {{-- AMOUNT --}}
    </tr>
  </table>

  {{-- PAYMENT PLAN ACCOUNTING SUMMARY --}}
  <table style="margin-top: 10px;" cellpadding="0" cellspacing="0">
    {{-- Subtotal Installments --}}
    <tr class="details bottom">
      <td class="none"></td><td class="none"></td><td class="none"></td>
      <td>Subtotal Installments ({{$accounting['install_months'] + 1}})</td>
      <td>${{number_format($accounting['install_monthly_total'], 2)}}</td>
    </tr>
    <tr class="details bottom">
      <td class="none"></td><td class="none"></td><td class="none"></td>
      <td>Subtotal w/ Down Payment</td>
      <td>
        ${{number_format($accounting['install_monthly_total'] + $accounting['install_down'], 2)}}
      </td>
    </tr>
  </table>
</div>
