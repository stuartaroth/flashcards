///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import uploadDirective = require('./directive');
import uploadController = require('./controller');

export = angular.module('fc.upload', [])
    .controller('fcUploadController', uploadController)
    .directive('fcUpload', uploadDirective.create);