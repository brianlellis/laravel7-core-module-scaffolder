const mix       = require('laravel-mix');
const MixGlob   = require('laravel-mix-glob');
const mixG      = new MixGlob({mix}); // mix is required
const fs        = require('fs');
const imagemin  = require('laravel-mix-imagemin');
require('laravel-mix-copy-watched');

const watch_url = process.env.APP_URL;

 // TODO: CLEAN RESOURCE IF REMOVED AS IT'S STAYING AND CAUSING ERRORS
 // IN PUBLIC DIR AT THE MOMENT

// IF SYSTEM RAN IN WATCH MODE THEN DO NOT COPY THE IMAGES OVER
if (process.argv.includes('--watch')) {
  mixG.js([
          'resources/Public/js/**/*.js'
        ], 'public/resources/public/js', null, {
          base: 'resources/Public/js'
        })
        .js([
         'resources/Admin/js/**/*.js'
        ], 'public/resources/admin/js', null, {
          base: 'resources/Admin/js'
        })
        .js([
         'app/Rapyd/System/Blade/Resources/Admin/js/**/*.js'
        ], 'public/admin_resources/admin/js', null, {
          base: 'app/Rapyd/System/Blade/Resources/Admin/js'
        })
        .js([
         'app/Rapyd/System/Blade/Resources/Public/js/**/*.js'
        ], 'public/admin_resources/public/js', null, {
          base: 'app/Rapyd/System/Blade/Resources/Public/js'
        })
        .js([
         'app/Rapyd/Modules/**/Resources/Admin/js/**/*.js'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .js([
         'app/Rapyd/Modules/**/Resources/Public/js/**/*.js'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .react([
         'app/Rapyd/Modules/**/Resources/Admin/react/**/*.jsx'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .react([
         'app/Rapyd/Modules/**/Resources/Public/js/**/*.jsx'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .sass([
          'resources/Public/sass/**/*.scss',
          '!resources/Public/sass/**/_*.scss'
        ], 'public/resources/public/css', null, {
          base: 'resources/Public/sass/'
        })
        .sass([
          'resources/Admin/sass/**/*.scss',
          '!resources/Admin/sass/**/_*.scss'
        ], 'public/resources/admin/css', null, {
          base: 'resources/Admin/sass/'
        })
        .sass([
          'app/Rapyd/System/Blade/Resources/Admin/sass/**/*.scss',
          '!app/Rapyd/System/Blade/Resources/Admin/sass/**/_*.scss'
        ], 'public/admin_resources/admin/css', null, {
          base: 'app/Rapyd/System/Blade/Resources/Admin/sass'
        })
        .sass([
          'app/Rapyd/System/Blade/Resources/Public/sass/**/*.scss',
          '!app/Rapyd/System/Blade/Resources/Public/sass/**/_*.scss'
        ], 'public/admin_resources/public/css', null, {
          base: 'app/Rapyd/System/Blade/Resources/Public'
        })
        .sass([
          'app/Rapyd/Modules/**/Resources/Admin/sass/**/*.scss',
          '!app/Rapyd/Modules/**/Resources/Admin/sass/**/_*.scss'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .sass([
          'app/Rapyd/Modules/**/Resources/Public/sass/**/*.scss',
          '!app/Rapyd/Modules/**/Resources/Public/sass/**/_*.scss'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .mix('version')()
        .mix('browserSync')({
          proxy: {
            target: watch_url
          }
        });
} else {
  mixG.js([
          'resources/Public/js/**/*.js'
        ], 'public/resources/public/js', null, {
          base: 'resources/Public/js'
        })
        .js([
         'resources/Admin/js/**/*.js'
        ], 'public/resources/admin/js', null, {
          base: 'resources/Admin/js'
        })
        .js([
         'app/Rapyd/System/Blade/Resources/Admin/js/**/*.js'
        ], 'public/admin_resources/admin/js', null, {
          base: 'app/Rapyd/System/Blade/Resources/Admin/js'
        })
        .js([
         'app/Rapyd/System/Blade/Resources/Public/js/**/*.js'
        ], 'public/admin_resources/public/js', null, {
          base: 'app/Rapyd/System/Blade/Resources/Public/js'
        })
        .js([
         'app/Rapyd/Modules/**/Resources/Admin/js/**/*.js'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .js([
         'app/Rapyd/Modules/**/Resources/Public/js/**/*.js'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .sass([
          'resources/Public/sass/**/*.scss',
          '!resources/Public/sass/**/_*.scss'
        ], 'public/resources/public/css', null, {
          base: 'resources/Public/sass/'
        })
        .sass([
          'resources/Admin/sass/**/*.scss',
          '!resources/Admin/sass/**/_*.scss'
        ], 'public/resources/admin/css', null, {
          base: 'resources/Admin/sass/'
        })
        .sass([
          'app/Rapyd/System/Blade/Resources/Admin/sass/**/*.scss',
          '!app/Rapyd/System/Blade/Resources/Admin/sass/**/_*.scss'
        ], 'public/admin_resources/admin/css', null, {
          base: 'app/Rapyd/System/Blade/Resources/Admin/sass'
        })
        .sass([
          'app/Rapyd/System/Blade/Resources/Public/sass/**/*.scss',
          '!app/Rapyd/System/Blade/Resources/Public/sass/**/_*.scss'
        ], 'public/admin_resources/public/css', null, {
          base: 'app/Rapyd/System/Blade/Resources/Public'
        })
        .sass([
          'app/Rapyd/Modules/**/Resources/Admin/sass/**/*.scss',
          '!app/Rapyd/Modules/**/Resources/Admin/sass/**/_*.scss'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .sass([
          'app/Rapyd/Modules/**/Resources/Public/sass/**/*.scss',
          '!app/Rapyd/Modules/**/Resources/Public/sass/**/_*.scss'
        ], 'public/modules', null, {
          base: 'app/Rapyd/Modules'
        })
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/dashboard_assets',
          'public/admin_pub/dashboard',
          { base: 'app/Rapyd/System/Blade/Admin/dashboard_assets' }
        )
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/assets/fonts',
          'public/fonts'
        )
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/assets/images',
          'public/admin_pub/images',
          { base: 'app/Rapyd/System/Blade/Admin/assets/images' }
        )
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/assets/js',
         'public/admin_pub/js',
          { base: 'app/Rapyd/System/Blade/Admin/assets/js' }
        )
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/assets/css',
          'public/admin_pub/css',
          { base: 'app/Rapyd/System/Blade/Admin/assets/css' }
        )
        .mix('copyDirectoryWatched')(
          'app/Rapyd/System/Blade/Admin/assets/vendor',
          'public/admin_pub/vendor',
          { base: 'app/Rapyd/System/Blade/Admin/assets/vendor' }
        )
        .mix('imagemin')([
          'media/**/*',
        ], {
        	context: 'resources/Public'
        })
        .mix('version')()
        .mix('browserSync')({
          proxy: {
            target: watch_url
          }
        });
}
