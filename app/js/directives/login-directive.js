
/**
 * @namespace loginDirective
 * @desc      This is a test directive
 * @memberOf  loginPageDirectives
 * @returns   {JSON}
 */

angular
  .module('app')
  .directive("loginDirective", loginDirectives );

function loginDirectives(){
  return {
    restrict : "A",
    template : "../partials/login/login-page.html"
  }
};