'use strict';

(function () {

    app.directive('navigation', function () {
        return {
            restrict: 'E',
            templateUrl: './app/templates/directive.navigation.tmpl.html',
            controller: function controller($scope, globalService) {

                $scope.global = globalService;
            }
        };
    });
})();