var movieApp = angular.module('movieSearchApp', [
	'ngRoute',
	'ui.bootstrap', 
	'movieAppControllers'
]);

movieApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/search.html',
        controller: 'MovieController'
      }).
      when('/:movieId', {
        templateUrl: 'partials/detail.html',
        controller: 'MovieDetailController'
      }).
      otherwise({
        redirectTo: ''
      });
      
      
}]);

