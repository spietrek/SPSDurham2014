/*jslint browser:true, vars:true*/
/*global angular, toastr*/

(function () {
    'use strict';

    var app = angular.module('linksApp', ['common']),
        events, config;

    function extendExceptionHandler($delegate, config, logger) {
        var appErrorPrefix = config.appErrorPrefix,
            logError = logger.getLogFn('app', 'error'), errorData, msg;
        return function (exception, cause) {
            $delegate(exception, cause);
            if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) {
                return;
            }

            errorData = {
                exception: exception,
                cause: cause
            };
            msg = appErrorPrefix + exception.message;
            logError(msg, errorData, true);
        };
    }

    app.config(['$provide',
        function ($provide) {
            $provide.decorator('$exceptionHandler', ['$delegate', 'config', 'logger', extendExceptionHandler]);
        }]);

    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    events = {
        controllerInitSuccess: 'controller.initSuccess'
    };

    config = {
        events: events,
        appErrorPrefix: '[Apps Demo] ',
        version: '2.0.0',
        appListName: 'Links',
        appTitle: 'My Links Demo App',
        logActive: true
    };

    app.value('config', config);

    app.config(['$logProvider',
        function ($logProvider) {
            if ($logProvider.debugEnabled) {
                $logProvider.debugEnabled(true);
            }
        }]);

    app.config(['commonConfigProvider',
        function (cfg) {
            cfg.config.controllerInitSuccessEvent = config.events.controllerInitSuccess;
        }]);
}());