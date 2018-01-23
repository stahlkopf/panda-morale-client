angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.formData.anonymous = false;

  // Create a new todo
  $scope.createTodo = () => {
    var userInfo = require('user-info');
    var userName = userInfo().username;
    $scope.formData.userid = userName;
    if (angular.isDefined($scope.formData.happiness)) {
      $http.post('http://localhost:3000/api/v1/todos', $scope.formData)
      .success((data) => {
        $scope.formData = {};
        $scope.formData.anonymous = false;
        console.log(data);
        const win = remote.BrowserWindow.getFocusedWindow();
        win.hide();
      })
      .error((error) => {
        console.log('Error: ' + error);
      });
    }
    else {
        alert('Please select a face that best represents your mood');
    }

  };

});
