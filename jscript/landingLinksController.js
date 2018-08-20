var linksapp = angular.module('linksapp', []);

linksapp.controller('NavigationController', function ($scope) {
	// Must use a wrapper object, otherwise "activeItem" won't work
	$scope.states = {};
	$scope.states.activeItem = 'item1';
	$scope.items = [{
		id: 'Support',
		title: 'Support'
	}, {
		id: 'Forum',
		title: 'Forum'
	}, {
		id: 'About',
		title: 'About'
	}, {
		id: 'Home',
		title: 'Home'
	}];
});

angular.bootstrap(document.getElementById("navi"), ['linksapp']);