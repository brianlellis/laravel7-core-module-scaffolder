<!DOCTYPE html>
<html>
<head>
  <title>{{ $pdf['title'] ?? $title }}</title>
  @include('rapyd_admin::pdf.styling.pdf-rider-form')
</head>
<body>
  <h2 style="margin-bottom: 150px;">CONTINUATION CERTIFICATE</h2>
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

  <p>
    Gentlemen:<br>
    You are hereby notified that the above Bond shall be continued in force for a period effective from
  </p>
  <p>
    <span>{{$policy['date_effective']->format('m-d-Y')}} until {{$policy['date_expire']->format('m-d-Y')}}</span>
  </p>

  <p>
    unless it is cancelled by the surety or otherwise terminated. All other terms and conditions remain unchanged.
  </p>

  <p>
    The aggregate liability of the surety shall not exceed the amount of this Continuation Certificate. The liability of the surety shall not cumulate by reason of this certificate, any continuation certificate, change rider, endorsement, modification, new bond, reinstatement, reissue, renewal, replacement, or substitution issued in the future.
  </p>

  <p class="signature_surety">
    Signed this {{$policy['date_effective']->format('jS')}} day of {{$policy['date_effective']->format('F')}},
    {{$policy['date_effective']->format('Y')}}<br>
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

