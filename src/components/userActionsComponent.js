function UserActionsController($scope, $element, $attrs) {
  this.$onInit = function(){
    if (this.user.status == 'Invited') {
      this.revoke = 'Revoke Invite';
    }
    else {
      this.revoke = 'Revoke Access';
    }
  }

  // console.log(this.user);
  // if (this.user.status == 'Invited') {
  //   this.revoke = 'Revoke Invite';
  // }
  // else {
  //   this.revoke = 'Revoke Access';
  // }
}

App.component('userActions', {
  templateUrl: './src/templates/userActions.html',
  controller: ['$scope', '$element', '$attrs', UserActionsController],
  bindings: {
    user: '<'
  }
})
