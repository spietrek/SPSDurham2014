/*global angular */

(function () {
    'use strict';

    var commonModule = angular.module('common', []);

    commonModule.provider('commonConfig', function () {
        this.config = {

        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common', ['$q', '$http', '$rootScope', '$timeout', '$window',
        '$location', 'commonConfig', 'logger', common]);

    function common($q, $http, $rootScope, $timeout, $window, $location, commonConfig, logger) {
        return {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $http: $http,
            $timeout: $timeout,
            $window: $window,
            $location: $location,
            // generic
            initController: initController,
            logger: logger
        };

        function initController(promises, controllerId, hide) {
            return $q.all(promises).then(function () {
                var data = { controllerId: controllerId, hide: hide };
                $broadcast(commonConfig.config.controllerInitSuccessEvent, data);
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }
    }
}());