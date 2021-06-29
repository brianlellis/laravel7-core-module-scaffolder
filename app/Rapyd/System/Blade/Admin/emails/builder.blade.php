{!! $content !!}

@if($template->default_files ?? false)
  <h3 style="font-size: 14px; font-family: Helvetica, Arial">Links to Files</h3>
  @php 
    $file_arr = json_decode($template->default_files);
  @endphp
  @foreach ($file_arr as $file)
    @php
      $file_name  = explode('/', $file);
      $file_name  = array_pop($file_name);
      $s3_file    = \Storage::disk('s3')->url($file);
    @endphp
    <table border="0" cellspacing="0" cellpadding="0" style="margin: 5px;">
      <tr>
        <td align="center" style="border-radius: 5px; background-color: #1F7F4C;">
          <a href="{{$s3_file}}" target="_blank" style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-weight: bold; text-decoration: none;border-radius: 5px; padding: 6px 9px; border: 1px solid #1F7F4C; display: inline-block;">{{$file_name}}</a>
        </td>
      </tr>
    </table>
  @endforeach
@endif
