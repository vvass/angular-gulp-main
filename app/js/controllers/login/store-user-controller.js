/**
 * @namespace StorePasswordController
 * @desc      This is how we store users to the couchbase server under 'Users'
 * @memberOf  loginPageControllers
 */


angular
  .module('app')
  .controller('StorePasswordController', StorePasswordController);

function StorePasswordController() {
  var vm = this;

  /*
   *  @namespace setUser
   *  @desc      Main function to store users.
   *  @memberOf  StorePasswordController
   */
  function setUser() {
    console.log("Storing user!!")
  }



}