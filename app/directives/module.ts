///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

import vocabulary = require('./vocabulary/module');
import topbar = require('./topbar/module');
import upload = require('./upload/module');

export = angular.module('fc.directives', [
    vocabulary.name,
    topbar.name,
    upload.name
]);