'use strict';

define([
    'underscore',
    'angular',
    'angularRoute',
    'services/module',
    'directives/module',
    'views/module'
], function(
    _,
    angular,
    chart,
    angularRoute,
    services,
    directives,
    views
) {
    return angular.module('fc', [
        'ngRoute',
        'fc.services',
        'fc.directives',
        'fc.views'
    ])
});