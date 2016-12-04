var app = angular.module('myApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('myAppCtrl', function($scope) {
  $scope.users = [
    {
      name: 'Jose Posso',
      phoneNumber: +573194995422
    }, {
      name: 'Melba Campo',
      phoneNumber: +573194995422
    }, {
      name: 'Leydi Garcia',
      phoneNumber: +573194995422
    }
  ];
});
