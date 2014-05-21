var OpenGov = angular.module('OpenGov', ['ngRoute','ngMap','ngAnimate']);

OpenGov.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : 'app/views/home.html',
		controller : 'HomeController'
	});
	$routeProvider.when('/maps', {
		templateUrl : 'app/views/maps.html',
		controller : 'MapController'
	});
	$routeProvider.when('/democracy', {
		templateUrl : 'app/views/democracy.html',
		controller : 'DemocracyController'
	});
	$routeProvider.when('/data/:dataID/details', {
		templateUrl : 'app/views/details.html',
		controller : 'DetailsController'
	});
	$routeProvider.otherwise({ redirectTo : '/' });
});