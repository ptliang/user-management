// users service to call Scalyr API
App.factory('usersService', function($q) {

    // send invite, convert 3rd party Promise to Angular style Promise using $q
    var sendInvite = function(users, accessLevel) {
      return $q.when(window.scalyrBackend.inviteUsers(users, accessLevel));
    };

    var revokeAccess = function(user) {

    };

    var resendInvite = function(user) {

    };

    var getUsers = function() {
      return $q.when(window.scalyrBackend.getUsers());
    };

    return {
      sendInvite: sendInvite,
      revokeAccess: revokeAccess,
      resendInvite: resendInvite,
      getUsers: getUsers
    }
});
