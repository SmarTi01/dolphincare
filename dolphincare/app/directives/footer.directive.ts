(() => {
    app.directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: './app/templates/directive.footer.tmpl.html',
            controller: function controller($scope) {}
        };
    });
})();