App.component('addNewUser', {
  templateUrl: './src/templates/addNewUser.html',
  transclude: true,
  controller: ['$rootScope', '$scope', '$element', '$attrs', 'usersService',
    function addNewUserController ($rootScope, $scope, $element, $attrs, usersService) {
    this.accessLevels = ['Full', 'Limited'];

    this.sendInvite = function() {
      usersService.sendInvite({email: this.email, access: this.access})
        .then(function(res) {
          this.email = '';
          this.access = undefined;
          $rootScope.$emit('NewUserInviteSent');
        }.bind(this))
    };
  }]
});
