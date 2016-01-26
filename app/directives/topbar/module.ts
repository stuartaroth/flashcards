///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import topbarDirective = require('./directive');
import topbarController = require('./controller');

export = angular.module('fc.topbar', [])
    .controller('fcTopbarController', topbarController)
    .directive('fcTopbar', topbarDirective.create);