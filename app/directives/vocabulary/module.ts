///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import vocabularyDirective = require('./directive');
import vocabularyController = require('./controller');

export = angular.module('fc.vocabulary', [])
    .controller('fcVocabularyController', vocabularyController)
    .directive('fcVocabulary', vocabularyDirective.create);