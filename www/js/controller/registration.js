myApp.controller('RegistrationController', function($scope, $location, $http){
	
	$http.get("php/getUser.php").success(
		function (response) {
			$scope.users = response.records;
			console.log(response);

		}
	);

	$scope.errors = [];
	$scope.msgs = [];

	$scope.register = function() {
        $scope.errors.splice(0, $scope.errors.length); // remove all error messages
        $scope.msgs.splice(0, $scope.msgs.length);
        console.log($scope.user.email);
        console.log($scope.user.password);
        $http.post('php/addUser.php', {'email': $scope.user.email, 'password': $scope.user.password}
        ).success(function(data, status, headers, config) {
        	console.log(data);
            if (data.msg != '')
            {
                $scope.msgs.push(data.msg);
            }
            else
            {
                $scope.errors.push(data.error);
            }
        }).error(function(data, status) { // called asynchronously if an error occurs
// or server returns response with an error status.
            $scope.errors.push(status);
        });
    }
	
	/*
	$scope.register = function(){
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user);
			$location.path('/meetings');
		}).catch(function(error){
			$scope.message = error.message;
		});	
	} //register
*/
}); //RegistrationController