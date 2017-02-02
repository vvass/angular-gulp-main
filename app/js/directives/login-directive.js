/**
 * Created by vvass on 2/1/17.
 */
(function() {
  'use strict';

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

})();