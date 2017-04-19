'use strict';

(function () {

  app.service('globalService', globalService);

  function globalService($location) {

    this.isActiveRoute = function (route) {
      var currentRoute = $location.path().toLowerCase();
      return currentRoute.indexOf(route.toLowerCase()) > -1;
    };
  }
})();