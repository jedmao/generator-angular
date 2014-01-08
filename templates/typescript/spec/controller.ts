/// <reference path="../../../app/scripts/controllers/<%= cameledName.toLowerCase() %>.ts" />
/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />


describe('Controller: <%= classedName %>Ctrl', () => {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var <%= classedName %>Ctrl,
    scope: ng.IScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope: ng.IScope) => {
    scope = $rootScope.$new();
    <%= classedName %>Ctrl = $controller('<%= classedName %>Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
