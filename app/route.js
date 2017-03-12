(function() {
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../index.html"
            })
            // .when('/services', {
            //     caseInsensitiveMatch: true,
            //     templateUrl: 'app/modules/services/templates/index.tmpl.html'
            // })
    })
})();