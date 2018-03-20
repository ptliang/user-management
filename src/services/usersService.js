App.factory('usersService', function() {
    var list = [
      {
        status: 'Invited',
        email: 'test@example.com',
        access: 'Limited'
      },
      {
        status: 'Active',
        email: 'Bill@example.com',
        access: 'Full'
      },
      {
        status: 'Active',
        email: 'John@example.com',
        access: 'Full'
      },
      {
        status: 'Active',
        email: 'Mike@example.com',
        access: 'Limited'
      }
    ];

    var sendInvite = function(user) {
      console.log(user.email);
      console.log(user.access);
      return new Promise(function(resolve, reject) {
        list.push({email, access} = Object.assign({status: 'Invited'}, user));
        resolve(true);
      })
    };

    var revokeAccess = function(user) {

    };

    var resendInvite = function(user) {

    };

    var getUsers = function() {
      console.log('get users');
      let userList = list;

      return new Promise(function(resolve, reject) {
        resolve(userList);
      })
    };

    return {
      sendInvite: sendInvite,
      revokeAccess: revokeAccess,
      resendInvite: resendInvite,
      getUsers: getUsers
    }
});
