/// <reference path="../../bower_components/dt-angular/angular.d.ts" /><% if (env.options.cookiesModule) { %>
/// <reference path="../../bower_components/dt-angular/angular-cookies.d.ts" /><% } %><% if (env.options.resourceModule) { %>
/// <reference path="../../bower_components/dt-angular/angular-resource.d.ts" /><% } %><% if (env.options.sanitizeModule) { %>
/// <reference path="../../bower_components/dt-angular/angular-sanitize.d.ts" /><% } %><% if (env.options.routeModule) { %>
/// <reference path="../../bower_components/dt-angular/angular-route.d.ts" /><% } %>


angular.module('<%= scriptAppName %>')
  .value('<%= cameledName %>', 42);
