///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');
import manager = require('./manager');

export = angular.module('fc.services', [])
    .service("fcManager", manager);
