var landingpagechange = angular.module('modPage', ['ngRoute']);
landingpagechange.config(function ($routeProvider) {
	$routeProvider
	.when("/Home", {
		templateUrl : "partials/Landing.html"
	})
	.when("/About", {
		templateUrl : "partials/About.html"
	})
	.when("/Forum", {
		templateUrl : "partials/Forum.html"
	})
	.when("/Support", {
		templateUrl : "partials/Support.html"
	})
	.otherwise({
		templateUrl : "partials/Landing.html"
	});
});

angular.bootstrap(document.getElementById("middle"), ['modPage']);