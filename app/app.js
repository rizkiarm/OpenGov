var OpenGov = angular.module('OpenGov', ['ngRoute']);

OpenGov.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : 'app/views/home.html',
		controller : 'HomeController'
	});
	$routeProvider.otherwise({ redirectTo : '/' });
});