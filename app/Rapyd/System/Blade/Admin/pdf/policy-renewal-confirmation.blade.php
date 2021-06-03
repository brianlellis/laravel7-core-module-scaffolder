<!DOCTYPE html>
<html>
<head>
  <title>{{ $pdf['title'] ?? $title }}</title>
  @include('rapyd_admin::pdf.styling.pdf-rider-form')
</head>
<body>
  <h2 style="margin-bottom: 150px;">RENEWAL CONFIRMATION</h2>
  <p class="rider_list">
    Bond Number: <span>{{$policy['bond_number']}}</span>
  </p>
  <p class="rider_list">
    Bond Description: <span>{{$bond['description']}}</span>
  </p>
  <p class="rider_list">
    Bond Amount: <span>${{number_format($bond['limit'],2)}}</span>
  </p>
  <p class="rider_list">
    Obligee: <span>{{$obligee['name']}}</span>
  </p>
  <p class="rider_list">
    Principal: <span>{{$business['name']}}</span>
  </p>
  <p class="rider_list">
    Term: <span>{{\Carbon\Carbon::parse($policy['date_issue'])->format('m/d/Y')}} until {{\Carbon\Carbon::parse($policy['date_expire'])->format('m/d/Y')}}</span>
  </p>

  <p>
    This letter serves as confirmation that the above bond has been renewed. The bond is continuous in nature meaning the bond will remain in effect for the bond term shown above. This notice is for your records only and should not be forwarded to the Obligee (the city, county, state or entity requiring your bond).
  </p>

  <p class="signature_surety">
    Signed this {{$policy['date_issue']->format('jS')}} day of {{$policy['date_issue']->format('F')}},
    {{$policy['date_issue']->format('Y')}}<br>
    {{$surety['name']}}<strong>, Surety</strong>
  </p>

  <p class="signature_area">
    By: <img class="signature_img" src="{{\SettingsSite::get('pdf_site_signature')}}">
  </p>
  <p class="signature_text">
    {{\SettingsSite::get('pdf_site_signature_text')}} (Attorney in Fact)
  </p>

  <img id="corporate_seal" src="{{$surety['corp_seal']}}">
</body>
</html>

