{!! $content !!}

@php
  $usable_files = [];
  if ($template->default_files ?? false) {
    $file_arr   = json_decode($template->default_files);
    foreach ($file_arr as $file) {
      $file_name  = explode('/', $file);
      $file_name  = array_pop($file_name);
      if(
        $file_name !== 'Policy_All_Reciepts' &&
        $file_name !== 'Policy_All_Reciepts_Agent' &&
        $file_name !== 'Policy_All_Reciepts_Principal' &&
        $file_name !== 'Policy_Issuance_Reciept' &&
        $file_name !== 'Policy_Signed_Apps' &&
        $file_name !== 'Policy_Agent_Invoice' &&
        $file_name !== 'Policy_Principal_Invoice' &&
        $file_name !== 'Policy_Principal_Cancellations' &&
        $file_name !== 'Policy_Principal_Adjustments' &&
        $file_name !== 'Policy_Principal_Reinstatements' &&
        $file_name !== 'Policy_Issuance_Form'
      ) {
        $s3_file = \Storage::disk('s3')->url($file);
        $usable_files[$file_name] = $s3_file;
      }
    }
  }
@endphp
@if(count($usable_files))
  <h3 style="font-size: 14px; font-family: Helvetica, Arial">Links to Files</h3>
  @foreach ($usable_files as $key => $file_path)
    <table border="0" cellspacing="0" cellpadding="0" style="margin: 5px;">
      <tr>
        <td align="center" style="border-radius: 5px; background-color: #1F7F4C;">
          <a href="{{$file_path}}" target="_blank" style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-weight: bold; text-decoration: none;border-radius: 5px; padding: 6px 9px; border: 1px solid #1F7F4C; display: inline-block;">{{$key}}</a>
        </td>
      </tr>
    </table>
  @endforeach
@endif
