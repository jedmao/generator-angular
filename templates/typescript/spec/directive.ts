/// <reference path="../../../app/scripts/directives/<%= cameledName.toLowerCase() %>.ts" />
/// <reference path="../../../app/bower_components/dt-angular/angular-mocks.d.ts" />
/// <reference path="../../../app/bower_components/dt-jasmine/jasmine.d.ts" />


describe('Directive: <%= cameledName %>', () => {

  // load the directive's module
  beforeEach(module('<%= scriptAppName %>'));

  var element: ng.IAugmentedJQuery,
    scope: ng.IScope;

  beforeEach(inject(($rootScope: ng.IScope) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject($compile => {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));
});
