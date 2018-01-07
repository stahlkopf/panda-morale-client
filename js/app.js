angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.todoData = {};
  $scope.formData.anonymous = false;

  // Create a new todo
  $scope.createTodo = () => {
    var userInfo = require('user-info');
    var userName = userInfo().username;
    $scope.formData.userid = userName;
    $http.post('http://localhost:3000/api/v1/todos', $scope.formData)
    .success((data) => {
      $scope.formData = {};
      $scope.formData.anonymous = false;s
      console.log(data);
    })
    .error((error) => {
      console.log('Error: ' + error);
    });
  };

});
