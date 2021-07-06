<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{$blade_data['event_mail_subject']}}</title>
  </head>

  <body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <!-- LOGO -->
      <tr>
        <td bgcolor="#238FE7" align="center">
          <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellspacing="0" cellpadding="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td style="padding: 15px 10px 15px 10px;" align="center" valign="top">
                <img
                  style="display: block; min-width: 140px; font-family: 'Lato', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;"
                  src="{{request()->secure() ? 'https' : 'http'}}://{{request()->getHttpHost()}}/{{ SettingsSite::get('sitewide_logo_large') }}" alt="Logo" border="0" />
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
        </td>
      </tr>
      <!-- COPY BLOCK -->
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
          <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellspacing="0" cellpadding="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <!-- COPY -->
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="text-align: center;">
                  This is just a friendly reminder that your policy quote(s) for:<br>
                  Policy #{{$blade_data['policy']['id'] ?? $blade_data['policy']->id}}<br>
                  {{$blade_data['policy']['state_initial'] ?? $blade_data['policy']->bond->state_initial}} 
                  {{$blade_data['policy']['bond_description'] ?? $blade_data['policy']->bond->description}}
                  <br><br>
                  will expire in {{$blade_data['policy']['days_left'] ?? $blade_data['days_left']}} days.
                </p>
              </td>
            </tr>
          </table>
          <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]-->
        </td>
      </tr>
    </table>
  </body>
</html>
