var regForm = angular.module ("regFormApp", []);
regForm.controller ("regCtrl", function($scope, $http) {
	$scope.username="";
	$scope.password="";
	$scope.cpassword="";
	$scope.email="";
	$scope.cemail="";
	$scope.submitReg = function () 
		{
		$http.get("php/create-player.php?u="+$scope.username+"&p="+$scope.password+"&e="+$scope.email)
		.then(function (response) 
			{
			$scope.gameResponse = response.data;
			});
		};
	$scope.dbCheck = function ()
		{
		$http.get("php/db-checks.php?u="+$scope.username+"&p="+$scope.password+"&e="+$scope.email)
		.then(function (response)
			{
			$scope.checkResponse = response.data;
			});
		};
	});