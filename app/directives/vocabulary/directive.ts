///<reference path="../../../typings/tsd.d.ts"/>

import vocabularyController = require('./controller');

export = VocabularyDirective;

class VocabularyDirective {
    restrict:string = 'E';
    controller:any = 'fcVocabularyController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/vocabulary/template.html';
    scope:any = {};

    static create() {
        return new VocabularyDirective();
    }
}