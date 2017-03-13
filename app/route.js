(function() {
    'use strict'
    app.config(function($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/home', {
                caseInsensitiveMatch: true,
                templateUrl: '/app/modules/home/templates/index.tmpl.html'
            })
            .when('/services', {
                caseInsensitiveMatch: true,
                templateUrl: 'app/modules/services/templates/index.tmpl.html'
            }).when('/pricing', {
                caseInsensitiveMatch: true,
                templateUrl: 'app/modules/pricing/templates/index.tmpl.html'
            }).when('/about', {
                caseInsensitiveMatch: true,
                templateUrl: 'app/modules/about/templates/index.tmpl.html'
            }).when('/contact', {
                caseInsensitiveMatch: true,
                templateUrl: 'app/modules/contact/templates/index.tmpl.html'
            });
    });
})();