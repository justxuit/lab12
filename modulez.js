
var app = angular.module("todoModule", []);

app.controller("todoController", function($scope){
  $scope.chores = ["feed doggo", "wash doggo", "brush doggo"];

  $scope.onclick = function(choreToAdd){
    $scope.chores.push(choreToAdd);
    $scope.choreToAdd = "";
  };

  $scope.removeChore = function(chore){
    var index = $scope.chores.indexOf(chore);
    $scope.chores.splice(index, 1);
  };
});
