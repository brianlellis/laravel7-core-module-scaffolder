<?php

namespace Rapyd\Middleware\Auth;

use Closure;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Redirect;

class EnsureEmailIsVerified
{
  public function handle($request, Closure $next, $redirectToRoute = null)
  {
    if (!$request->user() ||
      (
        $request->user() instanceof MustVerifyEmail &&
        !$request->user()->hasVerifiedEmail() &&
        $request->user()->is_approved == 0
      )
    ) {
      $blade_data                       = [];
      $blade_data['event_mail_subject'] = 'Please Confirm your email';

      \RapydMail::build_email_template(
        'system-default',
        'resend-email-verification',
        false,
        false,
        $request->user()
      );
      return redirect(request()->getSchemeAndHttpHost().'/registration-awaiting-approval');
    }

    return $next($request);
  }
}
