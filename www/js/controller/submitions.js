myApp.controller('SubmitionController', function($scope, $location, $http){
  $scope.theevent = 1;
  $scope.source = {selectedevent:[]};
  $http.get("http://localhost/musicBingoRadio/www/php/getEvents.php").success(
    function (response) {
      $scope.events = response.events;
    }
  );

  //setInterval(function(){check()},1000);
  setInterval(function(){update()},86400000);
  //setInterval(function(){update()},3000);
  update();

  function update(){
    $http.get("http://localhost/musicBingoRadio/www/php/update.php").success(
      function (response) {
        console.log(response);
      }
    );    
  }

  function check(){
    $scope.theevent = $scope.source.selectedevent.id;
    $http.post('http://localhost/musicBingoRadio/www/php/getSubmitions.php', {'event':$scope.theevent})
          .success(function(data, status, headers, config) {
        $scope.submitions = data.submitions;
        console.log(data);
    });       
  }
});