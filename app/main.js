﻿requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': [
            '//cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min',
            '../lib/knockout/knockout-3.1.0'
        ],
        'jquery': [
            '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
            '../lib/jquery/jquery-1.9.1.min'
        ],
        'bootstrap': [
            '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap',
            '../lib/bootstrap/js/bootstrap'
        ]
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'jquery', 'bootstrap'], function( system, app, viewLocator, $) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    $(document).on ('click', '.click-test', function(){ alert('click event'); })

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});