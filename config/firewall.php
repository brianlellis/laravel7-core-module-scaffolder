<?php

return [

    'enabled' => env('FIREWALL_ENABLED', true),

    'whitelist' => [
      '54.36.148.0/24',
      '54.36.149.0/24',
      '195.154.122.0/24',
      '195.154.123.0/24',
      '195.154.126.0/24',
      '195.154.127.0/24',
      '168.119.64.245',
      '168.119.64.246',
      '168.119.64.247',
      '168.119.64.248',
      '168.119.64.249',
      '168.119.64.250',
      '168.119.64.251',
      '168.119.64.252',
      '168.119.64.253',
      '168.119.64.254',
      '168.119.65.107',
      '168.119.65.108',
      '168.119.65.109',
      '168.119.65.110',
      '168.119.65.111',
      '168.119.65.112',
      '168.119.65.113',
      '168.119.65.114',
      '168.119.65.115',
      '168.119.65.116',
      '168.119.65.117',
      '168.119.65.118',
      '168.119.65.119',
      '168.119.65.120',
      '168.119.65.121',
      '168.119.65.122',
      '168.119.65.123',
      '168.119.65.124',
      '168.119.65.125',
      '168.119.65.126',
      '168.119.65.43',
      '168.119.65.44',
      '168.119.65.45',
      '168.119.65.46',
      '168.119.65.47',
      '168.119.65.48',
      '168.119.65.49',
      '168.119.65.50',
      '168.119.65.51',
      '168.119.65.52',
      '168.119.65.53',
      '168.119.65.54',
      '168.119.65.55',
      '168.119.65.56',
      '168.119.65.57',
      '168.119.65.58',
      '168.119.65.59',
      '168.119.65.60',
      '168.119.65.61',
      '168.119.65.62',
      '168.119.68.117',
      '168.119.68.118',
      '168.119.68.119',
      '168.119.68.120',
      '168.119.68.121',
      '168.119.68.122',
      '168.119.68.123',
      '168.119.68.124',
      '168.119.68.125',
      '168.119.68.126',
      '168.119.68.171',
      '168.119.68.172',
      '168.119.68.173',
      '168.119.68.174',
      '168.119.68.175',
      '168.119.68.176',
      '168.119.68.177',
      '168.119.68.178',
      '168.119.68.179',
      '168.119.68.180',
      '168.119.68.181',
      '168.119.68.182',
      '168.119.68.183',
      '168.119.68.184',
      '168.119.68.185',
      '168.119.68.186',
      '168.119.68.187',
      '168.119.68.188',
      '168.119.68.189',
      '168.119.68.190',
      '168.119.68.235',
      '168.119.68.236',
      '168.119.68.237',
      '168.119.68.238',
      '168.119.68.239',
      '168.119.68.240',
      '168.119.68.241',
      '168.119.68.242',
      '168.119.68.243',
      '168.119.68.244',
      '168.119.68.245',
      '168.119.68.246',
      '168.119.68.247',
      '168.119.68.248',
      '168.119.68.249',
      '168.119.68.250',
      '168.119.68.251',
      '168.119.68.252',
      '168.119.68.253',
      '168.119.68.254'
    ],

    'models' => [
        'user' => '\App\Models\User',
        // 'log' => '\App\Models\YourLogModel',
        // 'ip' => '\App\Models\YourIpModel',
    ],

    'responses' => [

        'block' => [
            'view' => env('FIREWALL_BLOCK_VIEW', null),
            'redirect' => env('FIREWALL_BLOCK_REDIRECT', null),
            'abort' => env('FIREWALL_BLOCK_ABORT', false),
            'code' => env('FIREWALL_BLOCK_CODE', 403),
        ],

    ],

    'notifications' => [

        'mail' => [
            'enabled' => env('FIREWALL_EMAIL_ENABLED', false),
            'name' => env('FIREWALL_EMAIL_NAME', 'Laravel Firewall'),
            'from' => env('FIREWALL_EMAIL_FROM', 'firewall@mydomain.com'),
            'to' => env('FIREWALL_EMAIL_TO', 'admin@mydomain.com'),
        ],

        'slack' => [
            'enabled' => env('FIREWALL_SLACK_ENABLED', false),
            'emoji' => env('FIREWALL_SLACK_EMOJI', ':fire:'),
            'from' => env('FIREWALL_SLACK_FROM', 'Laravel Firewall'),
            'to' => env('FIREWALL_SLACK_TO'), // webhook url
            'channel' => env('FIREWALL_SLACK_CHANNEL', null), // set null to use the default channel of webhook
        ],

    ],

    'all_middleware' => [
        'firewall.ip',
        'firewall.agent',
        'firewall.bot',
        'firewall.geo',
        'firewall.lfi',
        'firewall.php',
        'firewall.referrer',
        'firewall.rfi',
        'firewall.session',
        'firewall.sqli',
        'firewall.swear',
        'firewall.xss',
        //'App\Http\Middleware\YourCustomRule',
    ],

    'middleware' => [

        'ip' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],
        ],

        'agent' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            // https://github.com/jenssegers/agent
            'browsers' => [
                'allow' => [], // i.e. 'Chrome', 'Firefox'
                'block' => [], // i.e. 'IE'
            ],

            'platforms' => [
                'allow' => [], // i.e. 'Ubuntu', 'Windows'
                'block' => [], // i.e. 'OS X'
            ],

            'devices' => [
                'allow' => [], // i.e. 'Desktop', 'Mobile'
                'block' => [], // i.e. 'Tablet'
            ],

            'properties' => [
                'allow' => [], // i.e. 'Gecko', 'Version/5.1.7'
                'block' => [], // i.e. 'AppleWebKit'
            ],

            'auto_block' => [
                'attempts' => 5,
                'frequency' => 1 * 60, // 1 minute
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'bot' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            // https://github.com/JayBizzle/Crawler-Detect/blob/master/raw/Crawlers.txt
            'crawlers' => [
                'allow' => [], // i.e. 'GoogleSites', 'GuzzleHttp'
                'block' => [], // i.e. 'Holmes'
            ],

            'auto_block' => [
                'attempts' => 5,
                'frequency' => 1 * 60, // 1 minute
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'geo' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'continents' => [
                'allow' => ['North America'], // i.e. 'Africa'
                'block' => [], // i.e. 'Europe'
            ],

            'regions' => [
                'allow' => [], // i.e. 'California'
                'block' => [], // i.e. 'Nevada'
            ],

            'countries' => [
                'allow' => [], // i.e. 'Albania'
                'block' => [], // i.e. 'Madagascar'
            ],

            'cities' => [
                'allow' => [], // i.e. 'Istanbul'
                'block' => [], // i.e. 'London'
            ],

            // ipapi, extremeiplookup, ipstack, ipdata, ipinfo
            'service' => 'ipapi',

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'lfi' => [
            'methods' => ['get', 'delete'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                '#\.\/#is',
            ],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'login' => [
            'enabled' => true,

            'auto_block' => [
                'attempts' => 5,
                'frequency' => 1 * 60, // 1 minute
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'php' => [
            'methods' => ['get', 'post', 'delete'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                'bzip2://',
                'expect://',
                'glob://',
                'phar://',
                'php://',
                'ogg://',
                'rar://',
                'ssh2://',
                'zip://',
                'zlib://',
            ],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'referrer' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'blocked' => [],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'rfi' => [
            'methods' => ['get', 'post', 'delete'],

            'routes' => [
                'only' => [
                  'api/rapydmail/templates/*',
                  'api/email/manual-send',
                  'api/cms/blog/*',
                  'api/cms/page/*',
                  'api/settings/site/update'
                ], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                '#(http|ftp){1,1}(s){0,1}://.*#i',
            ],

            'exceptions' => [],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'session' => [
            'methods' => ['get', 'post', 'delete'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                '@[\|:]O:\d{1,}:"[\w_][\w\d_]{0,}":\d{1,}:{@i',
                '@[\|:]a:\d{1,}:{@i',
            ],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'sqli' => [
            'methods' => ['get', 'delete'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                '#[\d\W](union select|union join|union distinct)[\d\W]#is',
                '#[\d\W](union|union select|insert|from|where|concat|into|cast|truncate|select|delete|having)[\d\W]#is',
            ],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'swear' => [
            'methods' => ['post', 'put', 'patch'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'words' => [],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'url' => [
            'methods' => ['all'],

            'inspections' => [], // i.e. 'admin'

            'auto_block' => [
                'attempts' => 5,
                'frequency' => 1 * 60, // 1 minute
                'period' => 30 * 60, // 30 minutes
            ],
        ],

        'whitelist' => [
            'methods' => ['all'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [], // i.e. 'admin/*'
            ],
        ],

        'xss' => [
            'methods' => ['post', 'put', 'patch'],

            'routes' => [
                'only' => [], // i.e. 'contact'
                'except' => [
                  'api/rapydmail/templates/*',
                  'api/email/manual-send',
                  'api/cms/blog/*',
                  'api/cms/page/*',
                  'api/settings/site/update'
                ], // i.e. 'admin/*'
            ],

            'inputs' => [
                'only' => [], // i.e. 'first_name'
                'except' => [], // i.e. 'password'
            ],

            'patterns' => [
                // Evil starting attributes
                '#(<[^>]+[\x00-\x20\"\'\/])(form|formaction|on\w*|style|xmlns|xlink:href)[^>]*>?#iUu',

                // javascript:, livescript:, vbscript:, mocha: protocols
                '!((java|live|vb)script|mocha|feed|data):(\w)*!iUu',
                '#-moz-binding[\x00-\x20]*:#u',

                // Unneeded tags
                '#</*(applet|meta|xml|blink|link|style|script|embed|object|iframe|frame|frameset|ilayer|layer|bgsound|title|base|img)[^>]*>?#i'
            ],

            'auto_block' => [
                'attempts' => 3,
                'frequency' => 5 * 60, // 5 minutes
                'period' => 30 * 60, // 30 minutes
            ],
        ],

    ],

];
