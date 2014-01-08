/// <reference path="../app.ts" />


angular.module('<%= scriptAppName %>')
  .provider('<%= cameledName %>', Greeter);

class Greeter {

  private _salutation = 'Hello';

  private greet() {
    return this._salutation;
  }

  set salutation(s: string) {
    this._salutation = s;
  }
}
