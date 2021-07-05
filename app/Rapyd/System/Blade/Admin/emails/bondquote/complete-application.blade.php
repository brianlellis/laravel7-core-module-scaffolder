<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>{{ SettingsSite::get('sitewide_title') }} - Create Password</title>
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
      <!-- HERO -->
      <tr>
        <td bgcolor="#238FE7" align="center" style="padding: 0px 10px 0px 10px;">
          <!--[if (gte mso 9)|(IE)]> <table align="center" border="0" cellspacing="0" cellpadding="0" width="600"> <tr> <td align="center" valign="top" width="600"> <![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top"
                style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                <h1 style="font-size: 48px; font-weight: 400; margin: 0;">Bond Quote</h1>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top"
                  style="padding: 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; letter-spacing: 4px; line-height: 30px;">
                @if ($bond_quotes)
                  <p>Dear {{$name}},</p>
                  <p>
                    Thank you for the quote request for a ${{$limit}} {{$bond_state}} {{$bond_form_description}} bond.<br>
                    You are approved for the following bond quotes:
                  </p>
                @else
                  <p>Dear {{$name}},</p>
                  <p>
                    Thank you for the opportunity to quote your bond. Please click the button below to complete the bond application.
                  </p>
                  <a href="{{$href}}" style="background-color:#238fe7;
                          border:1px solid #0d6fd9;
                          border-radius:4px;
                          color:#ffffff;
                          display:inline-block;
                          font-family:sans-serif;
                          font-size:16px;
                          font-weight:bold;
                          line-height:40px;
                          text-align:center;
                          text-decoration:none;
                          width:200px;
                          -webkit-text-size-adjust:none;
                          mso-hide:all;">Apply Now
                  </a>
                @endif
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
            @if ($bond_quotes)
            <tr>
              <td bgcolor="#ffffff" align="left" valign="top" colspan="{{ count($bond_quotes) }}"
                style="padding: 20px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 28px;">
                <table style="width: 100%; text-align: left;">
                  <thead>
                    <tr style="background: #111111; color: #ffff">
                      <th style="padding-left: 5px;">
                        Bond Term
                      </th>
                      <th style="padding-left: 5px;">
                        Pay-In-Full
                      </th>
                      @if($has_monthly !== false)
                      <th style="padding-left: 5px;">
                        Monthly Installments
                      </th>
                      @endif
                    </tr>
                  </thead>
                  <tbody>
                    @foreach ($bond_quotes as $quote)
                    <tr>
                      <td style="padding-left: 5px;">{{ $quote['term'] }} Year</td>

                      <td style="padding-left: 5px;">${{ $quote['pay_full_total'] }}</td>

                      @if($has_monthly !== false)
                      <td style="padding-left: 5px;">
                        @if(intval($quote['pay_install_monthly']) > 0)
                        ${{$quote['pay_install_down']}} Down,
                        {{$quote['pay_install_months']}} Payments of ${{ $quote['pay_install_monthly'] }}
                        @endif
                      </td>
                      @endif
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top" colspan="{{ count($bond_quotes) }}"
                style="padding: 20px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 4px; line-height: 28px;">
                <p style="margin:0; text-align: center;">
                  <a href="{{ $href }}" style="background-color:#238fe7;
                  border:1px solid #0d6fd9;
                  border-radius:4px;
                  color:#ffffff;
                  display:inline-block;
                  font-family:sans-serif;
                  font-size:16px;
                  font-weight:bold;
                  line-height:40px;
                  text-align:center;
                  text-decoration:none;
                  width:200px;
                  -webkit-text-size-adjust:none;
                  mso-hide:all;">Purchase Bond</a>
                </p>
              </td>
            </tr>
            @endif
            <tr>
              <td bgcolor="#ffffff" align="center"
                colspan="@if($bond_quotes){{ count($bond_quotes) }} @endif"
                style="width: 100%; padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin:20px 0 0 0; text-align: left;">Sincerely, <br>
                  @if(auth()->user())
                    {{auth()->user()->full_name()}}     <br>
                    {{auth()->user()->address()}}       <br>
                    {{auth()->user()->phone_number()}}  <br>
                    {{auth()->user()->email}}
                  @endif
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