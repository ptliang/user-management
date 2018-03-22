function UserActionsController($scope, $element, $attrs, usersService) {
  this.$onInit = function(){
    if (this.user.status == 'Invited') {
      this.revoke = 'Revoke Invite';
    }
    else {
      this.revoke = 'Revoke Access';
    }
  };

  this.revokeAccess = function() {};

  this.resendInvite = function() {};
}

App.component('userActions', {
  templateUrl: './src/templates/userActions.html',
  controller: ['$scope', '$element', '$attrs', 'usersService', UserActionsController],
  bindings: {
    user: '<'
  }
})
