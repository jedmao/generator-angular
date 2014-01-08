/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .filter('<%= cameledName %>', () => {
    return input => {
      return '<%= cameledName %> filter: ' + input;
    };
  });
