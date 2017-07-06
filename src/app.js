const angular = require('angular');

console.log(angular);

//create application
angular.module('darkcaster-client', []); //setter syntax: creates a new module, gives it name, and adds [] so angular knows we created something new; in the long term use the brackets to add powerapps like animations ie ngAnimate from angular

angular.module('darkcaster-client') //getter synatx, grabbing the module and calling .controller to register the conntroller; angular.module is angular version of require
       .controller('MainController', MainController); //this is how angular figures out what we are talking about

MainController.$inject = []; //find $scope and put it below as variable; dependenci injection; dependent on $scope, and finds it below; link between HTLM and JS; but we will use this. instead

function MainController(){
  this.message = 'hello from angular';  //html only knows this message that is under $scope; $scope links JS and html.
}
