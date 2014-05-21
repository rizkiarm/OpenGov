var OpenGov = angular.module('OpenGov', ['ngRoute']);

OpenGov.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : 'app/views/home.html',
		controller : 'HomeController'
	});
	$routeProvider.when('/data/:id/details', {
		templateUrl : 'app/views/details.html',
		controller : 'DetailsController'
	});
	$routeProvider.otherwise({ redirectTo : '/' });
});