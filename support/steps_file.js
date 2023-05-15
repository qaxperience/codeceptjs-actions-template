// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login: function(user, pass) {
      this.amOnPage('/')

      this.fillField('[name=user]', user)
      this.fillField('[name=pass]', pass)

      this.click('Entrar')
    },

    toast: function(message) {
      this.see(message, 'div[role=status]')
    },

    modal: function(message) {
      this.see(message, '.swal2-html-container')
    }

  });
}
