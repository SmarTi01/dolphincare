(() => {

    app.directive('header', () => {
        return {
            restrict: 'E',
            templateUrl: './app/templates/directive.header.tmpl.html',
            controller: function ($scope) {
            }
        }
    })

})();