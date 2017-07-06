const angular = require('angular');

console.log(angular);

//create application
const app = angular.module('darkcaster-client', []); //setter syntax: creates a new module, gives it name, and adds [] so angular knows we created something new; in the long term use the brackets to add powerapps like animations ie ngAnimate from angular

app.controller('MainController', MainController);

MainController.$inject = ['$scope']; //find $scope and put it below as variable

function MainController($scope){
  $scope.message = 'hello from angular';  //html only knows this message that is under $scope; $scope links JS and html.
}
