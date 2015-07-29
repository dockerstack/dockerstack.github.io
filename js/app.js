

var ds = angular.module('ds',[]);

ds.controller('getBeta', ['$scope', '$http', function($scope, $http) {
  

	$scope.userInfo = {};
	$scope.message = '';

	$scope.submitForm = function () {

		$http.post('http://formspree.io/admin@dockerstack.org', $scope.userInfo).
		  success(function(data, status, headers, config) {

		  	console.log(data);
		  	$scope.message = 'We have sucessfully received your details';
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {

		  	console.log(data);
		  	$scope.message = 'We are experiencing some problems now. Please try again later.'
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

	}

}]);


ds.controller('login', ['$scope', '$http', function($scope, $http) {
  

	$scope.user = {};
	$scope.login = function () {

		console.log($scope.user);
		
		sessionStorage.name = $scope.user.name;
		sessionStorage.email = $scope.user.email;
		location.href = 'home.html';
		/*
		$http.post('http://formspree.io/admin@dockerstack.org', $scope.userInfo).
		  success(function(data, status, headers, config) {

		  	console.log(data);
		  	$scope.message = 'We have sucessfully received your details';
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {

		  	console.log(data);
		  	$scope.message = 'We are experiencing some problems now. Please try again later.'
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

		*/

	}




}]);

ds.controller('home', ['$scope', '$http', function($scope, $http) {
  

	$scope.user = {
		name: sessionStorage.name
	};


}]);