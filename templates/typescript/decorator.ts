/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .config(($provide: ng.auto.IProvideService) => {
    $provide.decorator('<%= cameledName %>', $delegate => {
      // decorate the $delegate
      return $delegate;
    });
  });
