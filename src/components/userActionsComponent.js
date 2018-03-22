// user action buttons to handle resend and revoke access
function UserActionsController($scope, $element, $attrs, usersService) {
  this.$onInit = function(){
    if (this.user.state == 'invited') {
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
