'use strict';

(function () {

    app.directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: './app/templates/directive.header.tmpl.html',
            controller: function controller($scope) {}
        };
    });
})();