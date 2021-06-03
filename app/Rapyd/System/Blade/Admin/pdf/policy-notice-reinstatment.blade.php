@php
 $date_reinstate = \Carbon\Carbon::parse($reinstate->date_cancel);
@endphp
<!DOCTYPE html>
<html>
<head>
  <title>{{ $pdf['title'] ?? $title }}</title>
  @include('rapyd_admin::pdf.styling.pdf-rider-form')
</head>
<body>
  <h1 class="obligee_top_header">{{$surety['name']}}</h1>
  <h2 class="obligee_top_header">
    {{$surety['address_street']}} {{$surety['address_street_2']}}
    {{$surety['address_city']}}, {{$surety['address_state']}} {{$surety['address_zip']}}
  </h2>

  <h2 class="obligee_top_header">Reinstatement Notice</h2>
  <h2 class="obligee_header">
    {{$obligee['name']}}<br>
    {{$obligee['address_street']}} {{$obligee['address_street_2']}}<br>
    {{$obligee['address_city']}}, {{$obligee['address_state']}} {{$obligee['address_zip']}}
  </h2>

  <p>Recently we mailed you a Cancellation Notice for the following bond: </p>
  <p class="rider_list">
    Bond Number: <span>{{$policy['bond_number']}}</span>
  </p>
  <p class="rider_list">
    Issued To: <span>{{$business['name']}}</span>
  </p>
  <p class="rider_list">
    In favor of (Obligee): <span>{{$obligee['name']}}</span>
  </p>
  <p class="rider_list">
    Bond Description: <span>{{$policy['bond_description']}}</span>
  </p>

  <p>
    The bond has been reinstated effective immediately, no lapse in coverage, and we herby rescind the Cancellation Notice sent previously. 
  </p>

  <p>
    In witness whereof, <span>{{$surety['name']}}</span> has caused its corporate seal to be herunto affixed this <span>{{$date_reinstate->format('jS')}}</span> day of <span>{{$date_reinstate->format('F')}}</span>, <span>{{$date_reinstate->format('Y')}}</span>.
  </p>

  <p class="signature_area">
    By: <img class="signature_img" src="{{\SettingsSite::get('pdf_site_signature')}}">
  </p>
  <p class="signature_text">
    {{\SettingsSite::get('pdf_site_signature_text')}} (Attorney in Fact)
  </p>

  <p>
    Distribution Copy:<br>
    {{$business['name']}}<br>
    {{$business['address_street']}} {{$business['address_street_2']}}<br>
    {{$business['address_city']}}, {{$business['address_state']}} {{$business['address_zip']}}
  </p>
  <img id="corporate_seal" src="{{$surety['corp_seal']}}">

  {{--***************************PAGE BREAK***************************--}}
  <div class="page_break"></div>

  <h1 class="obligee_top_header">{{$surety['name']}}</h1>
  <h2 class="obligee_top_header">
    {{$surety['address_street']}} {{$surety['address_street_2']}}
    {{$surety['address_city']}}, {{$surety['address_state']}} {{$surety['address_zip']}}
  </h2>

  <h2 class="obligee_top_header">Reinstatement Notice</h2>
  <h2 class="obligee_header">
    {{$business['name']}}<br>
    {{$business['address_street']}} {{$business['address_street_2']}}<br>
    {{$business['address_city']}}, {{$business['address_state']}} {{$business['address_zip']}}
  </h2>

  <p>Recently we mailed you a Cancellation Notice for the following bond: </p>
  <p class="rider_list">
    Bond Number: <span>{{$policy['bond_number']}}</span>
  </p>
  <p class="rider_list">
    Issued To: <span>{{$business['name']}}</span>
  </p>
  <p class="rider_list">
    In favor of (Obligee): <span>{{$obligee['name']}}</span>
  </p>
  <p class="rider_list">
    Bond Description: <span>{{$policy['bond_description']}}</span>
  </p>

  <p>
    The bond has been reinstated effective immediately, no lapse in coverage, and we herby rescind the Cancellation Notice sent previously. 
  </p>

  <p>
    In witness whereof, <span>{{$surety['name']}}</span> has caused its corporate seal to be herunto affixed this <span>{{$date_reinstate->format('jS')}}</span> day of <span>{{$date_reinstate->format('F')}}</span>, <span>{{$date_reinstate->format('Y')}}</span>.
  </p>

  <p class="signature_area">
    By: <img class="signature_img" src="{{\SettingsSite::get('pdf_site_signature')}}">
  </p>
  <p class="signature_text">
    {{\SettingsSite::get('pdf_site_signature_text')}} (Attorney in Fact)
  </p>

  <p>
    Distribution Copy:<br>
    {{$obligee['name']}}<br>
    {{$obligee['address_street']}} {{$obligee['address_street_2']}}<br>
    {{$obligee['address_city']}}, {{$obligee['address_state']}} {{$obligee['address_zip']}}
  </p>
  <img id="corporate_seal" src="{{$surety['corp_seal']}}">
</body>
</html>

