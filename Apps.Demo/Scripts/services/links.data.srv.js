/*global angular  */

(function () {
    'use strict';

    var serviceId = 'linksDataService';
    angular.module('linksApp').service(serviceId, ['common', 'config', linksDataService]);

    function linksDataService(common, config) {
        var $http = common.$http,
            logSuccess = common.logger.getLogFn(serviceId, 'success'),
            logError = common.logger.getLogFn(serviceId, 'error'),

            getSelectString = function () {
                return "$select=Title,LinkUrl,LinkGroup,SortOrder,IsPublished";
            },

            getFilterString = function (lg) {
                return "&$filter=IsPublished eq 1 and LinkGroup eq '" + lg + "'";
            },

            getLinks = function (linkGroup) {
                var appWebUrl = decodeURIComponent($.getUrlVar("SPAppWebUrl"));
                var query = "?" + getSelectString() + getFilterString(linkGroup) + "&$orderby=SortOrder";
                var url = appWebUrl + "/_api/web/lists/getbytitle('" + config.appListName + "')/items" + query;
                var promise = $http(
                    {
                        method: "GET",
                        url: url,
                        headers: { "Accept": "application/json;odata=verbose" }
                    }).success(function (response) {
                        logSuccess("Links Retrieved Successfully", true, true);
                        return response;
                    }).error(function (data, errorCode, errorMessage) {
                        logError("Error: (" + errorCode + ") " + errorMessage, errorCode, true);
                    });

                return promise;
            };

        return {
            getLinks: getLinks
        };
    }
}());