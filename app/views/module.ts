///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

export = angular.module('fc.views', [
    'ngRoute'
]).config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/upload', {
        template: '<fc-upload></fc-upload>'
    });
    $routeProvider.when('/vocabulary', {
        template: '<fc-vocabulary></fc-vocabulary>'
    });
    $routeProvider.otherwise({redirectTo: '/upload'});
}]);