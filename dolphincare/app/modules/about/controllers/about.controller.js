(() => {
    app.controller('AboutController', appController);

    function appController($scope) {
        $scope.title = 'Welcome to About';
    }

})();