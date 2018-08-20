var pagechange = angular.module('modPage', ['ngRoute']);
pagechange.config(function ($routeProvider) {
	$routeProvider
	.when("/Overview", {
		templateUrl : "tabs/Overview.php"
	})
	.when("/Players", {
		templateUrl : "tabs/Players.php"
	})
	.when("/NPCs", {
		templateUrl : "tabs/NPCs.php"
	})
	.when("/Initiative", {
		templateUrl : "tabs/Initiative.php"
	})
	.when("/Calendar", {
		templateUrl : "tabs/Calendar.php"
	})
	.when("/Rewards", {
		templateUrl : "tabs/Rewards.php"
	})
	.when("/Locations", {
		templateUrl : "tabs/Locations.php"
	})
	.when("/Notes", {
		templateUrl : "tabs/Notes.php"
	})
	.otherwise({
		templateUrl : "tabs/Overview.php"
	});
});

angular.bootstrap(document.getElementById("curTab"), ['modPage']);