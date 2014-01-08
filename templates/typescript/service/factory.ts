/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .factory('<%= cameledName %>', () => {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: () => {
        return meaningOfLife;
      }
    };
  });
