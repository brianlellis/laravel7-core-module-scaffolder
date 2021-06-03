@php
    $usergroup = Session::get('incomplete_usergroup');
@endphp

<form class="card usergroup_form" data-page="step-2">
  <input type="hidden" name="id" value="{{$usergroup->id}}">
  <div class="card-header">
    <h1>Welcome, {{ auth()->user()->full_name() }}</h1>
    <h3>Please confirm your agency details below</h3>
  </div>
  <div class="card-body">
    <div class="row">
      {{-- Name / Phone --}}
      <div class="col-md-12">
        <div class="form-group">
          <label for="name">Agency Legal Name</label>
          <input type="text" class="form-control" name="name" value="{{$usergroup->name}}" required>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="dba">DBA</label>
          <input type="text" class="form-control" name="dba" value="{{$usergroup->dba}}"
            placeholder="Leave blank if same as agency legal name">
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="phone_main">Phone</label>
          <input type="text" class="form-control phone" name="phone_main" value="{{$usergroup->phone_main}}" required>
        </div>
      </div>
      {{-- Address --}}
      <div class="col-md-6">
        <div class="form-group">
          <label for="address_street">Street</label>
          <input type="text" class="form-control" id="address_street" name="address_street" value="{{$usergroup->address_street}}" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="address_street_2">Street 2</label>
          <input type="text" class="form-control" id="address_street_2" name="address_street_2" value="{{$usergroup->address_street_2}}">
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="address_city">City</label>
          <input type="text" class="form-control" id="address_city" name="address_city" value="{{$usergroup->address_city}}" required>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="address_state">State</label>
          <input type="text" class="form-control" id="address_state" name="address_state" value="{{$usergroup->address_state}}" required>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="address_zip">Zip</label>
          <input type="text" class="form-control" id="address_zip" name="address_zip" value="{{$usergroup->address_zip}}" required>
        </div>
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-block btn-primary">Continue</button>
      </div>
    </div>
  </div>
</form>
