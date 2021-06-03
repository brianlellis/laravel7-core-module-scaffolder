<form class="card usergroup_form" data-page="step-3">
    <div class="card-header">
        <h1>Welcome, {{ auth()->user()->full_name() }}</h1>
        <h2>Agency W-9</h2>
        <p>
          Now that your account is set up, we just need a few details so we can fill out your agency's W-9 properly.
        </p>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label>Entity Type</label>
                    <select name="entity_type" class="form-control" required>
                        <option value="" class="placeholder">Entity Type</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Sole Proprietor">Sole Proprietor</option>
                        <option value="Partnership">Partnership</option>
                        <option value="LLC - Single Member">LLC - Single Member</option>
                        <option value="LLC - C Corporation">LLC - C Corporation</option>
                        <option value="LLC - S Corporation">LLC - S Corporation</option>
                        <option value="LLC - Partnership">LLC - Partnership</option>
                    </select>
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group">
                    <label>License Number</label>
                    <input name="license" class="form-control" placeholder="License Number" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Tax ID Format</label>
                    <select name="tax_id_type" id="tax_id_type" class="form-control" required>
                        <option value="">Format Type ( ENI / SSN )</option>
                        <option value="EIN">EIN: (xx-xxxxxxx)</option>
                        <option value="SSN">SSN: (xxx-xx-xxxx)</option>
                    </select>
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group">
                    <label>Tax ID</label>
                    <input name="tax_id" id="tax_id" class="form-control" placeholder="Tax ID" required disabled>
                </div>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label>Renewal Billing</label>
                    <select name="allow_renewal" class="form-control" required>
                        <option value="">Renewal Billing Type ( Direct / Agent )</option>
                        <option value="Direct">Direct</option>
                        <option value="Agent">Agent</option>
                    </select>
                </div>
            </div>
            <div class="col-md-12">
                <p class="w-9agreement">
                  I state under penalties of perjury that: 1. the payee's TIN is correct, 2. the payee is
                  not subject to backup withholding due to failure to report interest and dividend income, 3.
                  the payee is a U.S. person, and 4. the FATCA code entered on this form (if any) indicating
                  that the payee is exempt from FATCA reporting is correct.
                </p>
            </div>
            <div class="col-md-12">
                <button type="submit" class="btn btn-block btn-primary">Certify W-9</button>
            </div>
        </div>
    </div>
</form>
