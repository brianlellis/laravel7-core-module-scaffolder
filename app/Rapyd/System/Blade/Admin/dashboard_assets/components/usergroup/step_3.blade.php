@php
  $producer_file = SettingsSite::get('sitewide_producer_agreement');
@endphp
<form class="card usergroup_form" data-page="complete">
  <div class="card-header">
      <h1>Producer Agreement</h1>
      <h2>Review the producer agreement and you're done!</h2>
      <embed class="agreement" src="/{{$producer_file.'#toolbar=0'}}"/>
  </div>
  <div class="col-md-12">
    <p class="my-4">
      <a href="@url('/'){{$producer_file}}" class="text-success" target="_blank">Download Producer Agreement</a>
    </p>
    <button type="submit" class="btn btn-block btn-primary my-4">I Agree</button>
  </div>
</form>
