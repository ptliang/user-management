App.component('userList', {
  templateUrl: './src/templates/userList.html',
  controller: ['$rootScope', '$scope', '$element', '$attrs', 'usersService',
  function($rootScope, $scope, $element, $attrs, usersService) {
    usersService.getUsers()
      .then(function(res) {
        this.userList = res;
        $scope.$apply();
      }.bind(this));

    $rootScope.$on('NewUserInviteSent', function(event, ...args) {
      usersService.getUsers()
        .then(function(res) {
          this.userList = res;
          $scope.$apply();
        }.bind(this));
    })
  }]
})
