<button id="btn-shareable-widget" class="btn btn-primary">
  Get Shareable/Embeddable Widget
  <i class="mdi mdi-share" data-name="mdi-share"></i>
</button>
<div class="modal-full" id="modal-shareable-widget">
  <div class="form-group">
    <div class="close-btn" onclick="Rapyd.Modal.closeModal('#modal-shareable-widget')">
      Close X
    </div>
    <div class="content_area row pt-6 pb-6">
        <div class="col-sm-4">
          <div class="widget_version active" data-idx="0">
            @include('rapyd_admin::widgets.version-1')
          </div>
          <div class="widget_version" data-idx="1">
            @include('rapyd_admin::widgets.version-2')
          </div>
          <div class="widget_version" data-idx="2">
            @include('rapyd_admin::widgets.version-3')
          </div>
          <div class="widget_version" data-idx="3">
            @include('rapyd_admin::widgets.version-4')
          </div>
        </div>
        <style>
          .widget_version {
            display: none;
          }
          .widget_version.active {
            display: block;
          }
        </style>
        <div class="col-sm-8">
          <h2>INSTRUCTIONS</h2>
          <p>
            To get a shareable widget code select a version of a widget and copy the code below. For additional dev tools see <a target="_blank" href="@url('admin/devtools')">HERE</a>
          </p>
          <button class="widget_version_select btn btn-primary" data-idx="0">Version 1</button>
          <button class="widget_version_select btn btn-primary" data-idx="1">Version 2</button>
          <button class="widget_version_select btn btn-primary" data-idx="2">Version 3</button>
          <button class="widget_version_select btn btn-primary" data-idx="3">Version 4</button>
          <pre style="font-size: 12px; width: 100%; margin-top: 20px;" id="pre">
      {{strtolower("<iframe id=\"bx_profile_widget\"></iframe>
      <script>
        (function() {
          var ele_target = 'bx_profile_widget';
          fetch('https://bondexchange.jepdevs.com/api/rapyd/social/widgets/{$userId}/0')
          .then(response => response.text())
          .then(data => {
            var ele = document.getElementById(ele_target);
            ele.contentDocument.body.innerHTML = data;
            ele.style.height = '480px';
            ele.style.width  = '330px';
            ele.style.border = 'none';
          });
        })();
      </script>")}}
          </pre>
          <script>
            var userId      = @json($userId);
            var pre         = document.getElementById('pre');

            $('.widget_version_select').click(function(){
              var idx       = $(this).data('idx');
              var url       = `https://bondexchange.jepdevs.com/api/rapyd/social/widgets/${userId}/${idx}')`;
              var innerHTML = pre.innerHTML;
              innerHTML     = innerHTML.replace(/https?:.*(?=\s)/g, url);
              pre.innerHTML = innerHTML;
              $('.widget_version').removeClass('active');
              $('.widget_version[data-idx="'+idx+'"]').addClass('active');
            });
          </script>
      </div>
    </div>
  </div>
</div>
<script>
  Rapyd.Modal.openModal('#btn-shareable-widget', '#modal-shareable-widget')
</script>
