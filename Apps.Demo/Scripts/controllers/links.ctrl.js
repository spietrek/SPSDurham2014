/*global angular  */

(function () {
    'use strict';

    var controllerId = 'linksController';
    angular.module('linksApp').controller(controllerId, ['$scope', 'common', 'config', 'linksDataService', linksController]);

    function linksController($scope, common, config, linksDataService) {
        $scope.webPartTitle = config.appTitle;

        init();

        function init() {
            var promises = [];
            common.initController(promises, controllerId, true).then(function () {
                getLinks();
            });
        }

        function mapToModel(data) {
            return {
                title: data.Title,
                linkUrl: data.LinkUrl
            };
        }

        function getLinks() {
            var linkGroup = 'GL';
            linksDataService.getLinks(linkGroup).then(function (response) {
                // Load data object
                var items = response.data.d.results;
                var newData = [];
                $.each(items, function (index, item) {
                    newData.push(mapToModel(item));
                });

                // Set scope
                $scope.links = newData;
                $scope.linksCount = newData.length;
            });
        }

        $scope.openList = function () {
            var appWebUrl = decodeURIComponent($.getUrlVar("SPAppWebUrl"));
            var url = appWebUrl + "/Lists/" + config.appListName;
            window.open(url);
        };

        $scope.refreshData = function () {
            getLinks();
        };
    }
}());