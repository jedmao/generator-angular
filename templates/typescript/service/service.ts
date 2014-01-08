/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .service('<%= classedName %>', <%= classedName %>);

// AngularJS will instantiate a singleton by calling "new" on this class
class <%= classedName %> {

}
