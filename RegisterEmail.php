<?php

  

$user = App\User::where('email', 'jbrei@allstate.com')->first();

// To Site Admins User Has Been Created
\RapydEvents::send_mail('user_created_system', 'sitewide_notification_emails', $user);


// To The User varify email
\RapydEvents::send_mail('user_created', false, $user);
