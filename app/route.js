(function() {
    'use strict'
    app.config(function($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/home', {
                // caseInsensitiveMatch: true,
                templateUrl: 'index2.html'
            })
            .when('/services', {
                // caseInsensitiveMatch: true,
                templateUrl: 'app/modules/services/templates/index.tmpl.html'
            });
    });
})();