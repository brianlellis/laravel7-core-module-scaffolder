<?php

return [

    /*
     * All models in these directories will be scanned for ER diagram generation.
     * By default, the `app` directory will be scanned recursively for models.
     */
    'directories' => [
        base_path('app'),
    ],

    /*
     * If you want to ignore complete models or certain relations of a specific model,
     * you can specify them here.
     * To ignore a model completely, just add the fully qualified classname.
     * To ignore only a certain relation of a model, enter the classname as the key
     * and an array of relation names to ignore.
     */
    'ignore' => [
        // Bond Library
        // Rapyd\Model\BondEdit::class,
        // Rapyd\Model\BondLibraries::class,
        // Rapyd\Model\BondLibraryClass::class,
        // Rapyd\Model\BondLibraryForm::class,
        // Rapyd\Model\BondLibraryFormSublimit::class,
        // Rapyd\Model\BondLibraryIndustry::class,
        // Rapyd\Model\BondLibraryLimit::class,
        // Rapyd\Model\BondLibraryLimit::class,
        // Rapyd\Model\BondLibraryObligee::class,
        // Rapyd\Model\BondLibraryObligeeType::class,
        // Rapyd\Model\BondLibraryPricing::class,
        // Rapyd\Model\BondLibraryPricingSubgroup::class,
        // Rapyd\Model\BondLibraryPricingSubgroupYearly::class,
        // Rapyd\Model\BondLibraryRenewal::class,
        // Rapyd\Model\BondLibraryState::class,
        // Rapyd\Model\BondLibraryType::class,

        // Bond Policy
        // Rapyd\Model\BondNumbers::class,
        // Rapyd\Model\BondPolicies::class,
        // Rapyd\Model\CounterLicense::class,
        // Rapyd\Model\PolicyAccountingInvoices::class,
        // Rapyd\Model\PolicyAccountingPayments::class,
        // Rapyd\Model\PolicyAddresses::class,
        // Rapyd\Model\PolicyAdjustments::class,
        // Rapyd\Model\PolicyAttachedAuthMethods::class,
        // Rapyd\Model\PolicyCancellationRequests::class,
        // Rapyd\Model\PolicyCancellations::class,
        // Rapyd\Model\PolicyCommissionSched::class,
        // Rapyd\Model\PolicyCustomReport::class,
        // Rapyd\Model\PolicyDishonesty::class,
        // Rapyd\Model\PolicyErisa::class,
        // Rapyd\Model\PolicyFees::class,
        // Rapyd\Model\PolicyFiles::class,
        // Rapyd\Model\PolicyGenericObligees::class,
        // Rapyd\Model\PolicyHistory::class,
        // Rapyd\Model\PolicyJoblocations::class,
        // Rapyd\Model\PolicyQuotes::class,
        // Rapyd\Model\PolicySAA::class,
        // Rapyd\Model\PolicyStatus::class,
        // Rapyd\Model\PolicyVehicles::class,
        // Rapyd\Model\SuretyCompanies::class,

        // CMS
        // Rapyd\Model\CmsBlogPost::class,
        // Rapyd\Model\CmsCategory::class,
        // Rapyd\Model\CmsContentWrapper::class,
        // Rapyd\Model\CmsPage::class,

        // CREDIT REPORT
        // Rapyd\Model\CreditReport::class,
        // Rapyd\Model\CreditReportAddress::class,
        // Rapyd\Model\CreditReportInquiry::class,
        // Rapyd\Model\CreditReportName::class,
        // Rapyd\Model\CreditReportPublic::class,
        // Rapyd\Model\CreditReportRiskModel::class,
        // Rapyd\Model\CreditReportSettings::class,
        // Rapyd\Model\CreditReportSummary::class,
        // Rapyd\Model\CreditReportTradeline::class,

        // ECOMMERCE
        // Rapyd\Model\Category::class,
        // Rapyd\Model\CategoryProduct::class,
        // Rapyd\Model\Coupon::class,
        // Rapyd\Model\DeliveryOption::class,
        // Rapyd\Model\Fee::class,
        // Rapyd\Model\Log::class,
        // Rapyd\Model\Order::class,
        // Rapyd\Model\OrderExtra::class,
        // Rapyd\Model\OrderLog::class,
        // Rapyd\Model\OrderProduct::class,
        // Rapyd\Model\Payment::class,
        // Rapyd\Model\PaymentGateway::class,
        // Rapyd\Model\Product::class,
        // Rapyd\Model\ProductSubscriptions::class,
        // Rapyd\Model\SalesTax::class,

        // EVENTS
        // Rapyd\Model\Events::class,

        // FULLTEXT
        // Rapyd\Model\FullTextModel::class,
        // Rapyd\Fulltext\RapydIndexedRecord::class,

        // MESSENGER
        // Rapyd\Model\RapydConvos::class,
        // Rapyd\Model\RapydMessages::class,

        // POLL
        // Rapyd\Model\Poll::class,
        // Rapyd\Model\PollOption::class,
        // Rapyd\Model\PollVote::class,

        // URL REDIRECTOR
        // Rapyd\Model\Redirectors::class,

        // TASK SCHEDULER
        // Rapyd\Model\SchedulerResults::class,
        // Rapyd\Model\SchedulerTasks::class,

        // SYSTEM SETTINGS
        // Rapyd\Model\Settings::class,
        // Rapyd\Model\SitemapSettings::class,

        // USER RELATED
        // App\User::class,
        // Rapyd\Model\PermissionCategories::class,
        // Rapyd\Model\Usergroups::class,
        // Rapyd\Model\UsergroupType::class,
        // Rapyd\Model\UsergroupUsers::class
    ],

    /*
     * If you want to see only specific models, specify them here using fully qualified
     * classnames.
     *
     * Note: that if this array is filled, the 'ignore' array will not be used.
    */
    'whitelist' => [
    ],

    /*
     * If true, all directories specified will be scanned recursively for models.
     * Set this to false if you prefer to explicitly define each directory that should
     * be scanned for models.
     */
    'recursive' => true,

    /*
     * The generator will automatically try to look up the model specific columns
     * and add them to the generated output. If you do not wish to use this
     * feature, you can disable it here.
     */
    'use_db_schema' => false,

    /*
     * This setting toggles weather the column types (VARCHAR, INT, TEXT, etc.)
     * should be visible on the generated diagram. This option requires
     * 'use_db_schema' to be set to true.
     */
    'use_column_types' => true,

    /*
     * These colors will be used in the table representation for each entity in
     * your graph.
     */
    'table' => [
        'header_background_color' => '#d3d3d3',
        'header_font_color' => '#333333',
        'row_background_color' => '#ffffff',
        'row_font_color' => '#333333',
    ],

    /*
     * Here you can define all the available Graphviz attributes that should be applied to your graph,
     * to its nodes and to the edge (the connection between the nodes). Depending on the size of
     * your diagram, different settings might produce better looking results for you.
     *
     * See http://www.graphviz.org/doc/info/attrs.html#d:label for a full list of attributes.
     */
    'graph' => [
        // 'style' => 'dotted',
        // 'bgcolor' => '#FFFFFF',
        // 'fontsize' => 10,
        // 'labelloc' => 'b',
        // 'concentrate' => false,
        // 'pad' => 0.2,
        // 'esep' => true,
        // 'fontname' => 'Helvetica Neue',
        //'outputorder' => 'edgesfirst',
        // 'pagedir' => 'LR',

        // TABLE INFO DESIGN
        // 'splines' => "ortho",
        // 'overlap' => false,
        // 'nodesep' => 1.5,
        // 'rankdir' => 'TB',
        // 'ranksep' => 1,

        // SLIM DESIGN
        "engine" => "neato",
        'splines' => "polyline",
        // 'overlap' => false,
        // 'labelloc' => 'a',
        // 'concentrate' => false,
    ],

    'node' => [
        'margin' => 0,
        'shape' => 'rectangle',
        'fontname' => 'Helvetica Neue',
        'height' => 0.1
    ],

    'edge' => [
        'penwidth' => 1.5,
        'fontsize' => 10,
        'lp' => 10
    ],

    'relations' => [
        'HasOne' => [
            'dir' => 'both',
            'color' => '#D62828',
            'arrowhead' => 'tee',
            'arrowtail' => 'none',
        ],
        'BelongsTo' => [
            'dir' => 'both',
            'color' => '#000000',
            'arrowhead' => 'tee',
            'arrowtail' => 'crow',
        ],
        'HasMany' => [
            'dir' => 'both',
            'color' => '#FCBF49',
            'arrowhead' => 'crow',
            'arrowtail' => 'none',
        ],
    ]

];
