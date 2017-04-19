(() => {

    app.directive('navigation', () => {
        return {
            restrict: 'E',
            templateUrl: './app/templates/directive.navigation.tmpl.html',
            controller: function($scope, globalService) {

            	$scope.global = globalService;

            }
        }
    })
})();