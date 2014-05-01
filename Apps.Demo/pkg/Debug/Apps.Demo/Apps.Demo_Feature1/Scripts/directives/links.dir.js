/*global angular */

(function () {
    'use strict';

    var app = angular.module('linksApp');

    app.directive('csgLinks', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                openList: '=openList',
                refreshData: '=refreshData',
                webPartTitle: '=webPartTitle',
                links: '=links',
                linksCount: '=linksCount',
                errorMessage: '=errorMessage'
            },
            /*link: function (scope, element, attrs) {

            },*/
            templateUrl: function(element, attrs) {
                return attrs.templateUrl;
            }
        };
    });
}());