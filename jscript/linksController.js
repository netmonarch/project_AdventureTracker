var linksapp = angular.module('linksapp', []);

linksapp.controller('NavigationController', function ($scope) {
	// Must use a wrapper object, otherwise "activeItem" won't work
	$scope.states = {};
	$scope.states.activeItem = 'item1';
	$scope.items = [{
		id: 'Overview',
		title: 'Overview'
	}, {
		id: 'Players',
		title: 'Players'
	}, {
		id: 'NPCs',
		title: 'NPCs'
	}, {
		id: 'Calendar',
		title: 'Calendar'
	}, {
		id: 'Initiative',
		title: 'Initiative'
	}, {
		id: 'Rewards',
		title: 'Rewards'
	}, {
		id: 'Locations',
		title: 'Locations'
	}, {
		id: 'Notes',
		title: 'Notes'
	}];
});