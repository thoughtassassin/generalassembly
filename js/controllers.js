var movieAppControllers = angular.module('movieAppControllers', []);

movieAppControllers.controller('MovieController', ['$scope', '$http', function( $scope, $http ){
	
	var url = "http://www.omdbapi.com/";
	
	$scope.findMovies = function() {
		
		if ($scope.searchTerm) {
	
			$http.jsonp( 'http://www.omdbapi.com/?callback=JSON_CALLBACK', { params: { s: $scope.searchTerm }
	            }).success( function(data) {
					
						$scope.movies = data.Search;
					
				}).error( function(){
					console.log("error");
			});
		
		}
	
	};
	
}]);

movieAppControllers.controller('MovieDetailController', ['$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ) {
	
	var url = "http://www.omdbapi.com/";
	var searchTerm = 'no where';
	
	
	$http.jsonp( 'http://www.omdbapi.com/?callback=JSON_CALLBACK', { params: { i: $routeParams.movieId  }
        }).success( function(data) {
			
				$scope.movie = data;
			
		}).error( function(){
			console.log("error");
	});
		
	
	
}]);