/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', () => {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs) => {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  });
