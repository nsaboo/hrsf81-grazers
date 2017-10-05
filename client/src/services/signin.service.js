function signIn($location) {
  this.signedInUser = '';
  this.signedInRole = '';

  this.getUser = () => {
    return {
      name: this.signedInUser,
      role: this.signedInRole
    };
  };

  this.submit = () => {
    return (name, role) => {
      this.signedInUser = name;
      this.signedInRole = role;
      $location.path('/organizer');
    };
  };
}

module.exports = signIn;
