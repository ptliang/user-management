// component to handle add new user interaction
App.component('addNewUser', {
  templateUrl: './src/templates/addNewUser.html',
  transclude: true,
  controller: ['$rootScope', '$scope', '$element', '$attrs', 'usersService',
    function addNewUserController ($rootScope, $scope, $element, $attrs, usersService) {
    this.accessLevels = ['Full', 'Limited'];

    // send invite
    // can accommodate either a single email or comma separate email addresses
    // also does quick validation
    this.sendInvite = function() {
      this.invalidEmail = false;
      let emailRegex = RegExp('^.+@.+\..+$'); // this test only verifies single '.' after @. Could be modified to include additional '.' in domain name
      let usersArr = this.email.split(',');

      usersArr.map(function(user) {
        this.invalidEmail = !emailRegex.test(user);
      }.bind(this));

      if (!this.invalidEmail) {
        usersService.sendInvite(usersArr, this.access.toLowerCase())
          .then(function(res) {
            this.email = '';
            this.access = undefined;
            $rootScope.$emit('NewUserInviteSent');
          }.bind(this))
      }
    };

    // enable/disable send button 
    this.isFormFilled = function() {
      return this.email != '' && this.access != undefined;
    }
  }]
});
