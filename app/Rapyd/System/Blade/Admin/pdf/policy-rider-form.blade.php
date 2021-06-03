<!DOCTYPE html>
<html>
<head>
  <title>{{ $pdf['title'] ?? $title }}</title>
  @include('rapyd_admin::pdf.styling.pdf-rider-form')
</head>
<body>
  <h1 class="rider_header">{{$surety['name']}}</h1>
  <h2 class="rider_header">
    {{$surety['address_street']}} {{$surety['address_street_2']}}
    {{$surety['address_city']}}, {{$surety['address_state']}} {{$surety['address_zip']}}
  </h2>

  <h2>Rider</h2>

  <h3>TO BE ATTACHED AND FORM A PART OF:</h3>
  <p class="rider_list">
    Bond Number: <span>{{$policy['bond_number']}}</span>
  </p>
  <p class="rider_list">
    Issued by: <span>{{$surety['name']}}</span>
  </p>
  <p class="rider_list">
    In favor of (Obligee): <span>{{$obligee['name']}}</span>
  </p>
  <p class="rider_list">
    On behalf of (Principal): <span>{{$business['name']}}</span>
  </p>

  <p>
    In consideration of the premium charged, it is understood and agreed that:
  </p>
  <p>
    Effective Date: <span>{{$adjustment->created_at->format('m-d-Y')}}</span>
  </p>

  <p class="rider_description">
    {{ $adjustment->rider_description }}
  </p>

  <p>
    <strong>
      PROVIDED, HOWEVER
    </strong>
    that the liability of <span>{{$surety['name']}}</span> under the attached as changed by this Rider shall not be cumulative.
  </p>
  <p>
    Nothing herein contained shall be held to vary, waive, alter or extend any of the terms, conditions, agreements or warranties of the above mentioned bond, other than as stated above.
  </p>

  <p class="signature_surety">
    Signed this {{$adjustment->created_at->format('jS')}} day of {{$adjustment->created_at->format('F')}},
    {{$adjustment->created_at->format('Y')}}<br>
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

