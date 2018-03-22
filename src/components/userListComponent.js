App.component('userList', {
  templateUrl: './src/templates/userList.html',
  controller: ['$rootScope', '$scope', '$element', '$attrs', 'usersService',
  function($rootScope, $scope, $element, $attrs, usersService) {
    // one way alphabetical sorting
    this.sortByEmail = function() {);
      this.userList.sort(function(a, b) {
        return (a.email < b.email) ? -1 : (a.email > b.email) ? 1 : 0;
      });
    };

    // get user list
    usersService.getUsers()
      .then(function(res) {
        if (res.status == 'success') {
          this.userList = res.users;
        }
      }.bind(this));

    // when a new user is create this listener refreshes the user list table
    $rootScope.$on('NewUserInviteSent', function (event, ...args) {
      usersService.getUsers()
        .then(function (res) {
          if (res.status == 'success') {
            this.userList = res.users;
          }
        }.bind(this));
    }.bind(this));
  }]
})
