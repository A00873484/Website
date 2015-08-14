myApp.controller('SubmitController', function($scope, $http){

  $scope.tithe = [];
  $scope.mem = [];


  $http.get("http://localhost/zion_tithes/www/php/getmembers.php").success(
    function (response) {
      $scope.members = response.events;
    }
  );

  $scope.addmember = function(){
    $http.post("http://localhost/zion_tithes/www/php/addmember.php"
      , {'fname':$scope.mem.fname, 'lname':$scope.mem.lname, 'phone':$scope.mem.phone, 'address':$scope.mem.address})
    .success(function(data) {
        console.log(data);
      }
    );
    $http.get("http://localhost/zion_tithes/www/php/getmembers.php").success(
      function (response) {
        $scope.members = response.events;
      }
    );    
  }

  $scope.addtithe = function(){
    $scope.theevent = $scope.source.selectedevent.id;
    $http.post('http://localhost/zion_tithes/www/php/addtithe.php'
      , {'uid':$scope.tithe.selectedmember, 'date':$scope.tithe.date, 'amount':$scope.tithe.amount})
          .success(function(data) {
        console.log(data);
    });       
  }
});