///<reference path="../../../typings/tsd.d.ts"/>

import iFcManager = require("../../interfaces/iFcManager");
export = VocabularyController;

class VocabularyController {
    static $inject = [
        '$window',
        '$document',
        'fcManager',
    ];

    constructor(
        public $window,
        public $document,
        public fcManager:iFcManager
    ) {
        var self = this;
        if(!fcManager.vocabularyList) {
            $window.location.href = "/#/upload";
        }
        $document.unbind('keypress');
        $document.keypress((e) => {
            if (e.which == 13 || e.which == 32) {
                if(self.answer) {
                    angular.element('#show-answer').click();
                } else {
                    angular.element('#show-next').click();
                }
            }
        });
    }

    public count = 0;
    public answer:boolean = true;
    public next:boolean = false;

    public showAnswer():void {
        this.answer = false;
        this.next = true;
    }

    public showNext():void {
        this.answer = true;
        this.next = false;
        this.count++;
    }

    public reset():void {
        this.fcManager.resetFlashCards();
        this.count = 0;
        this.answer = true;
        this.next = false;
    }

    public getNewList():void {
        this.fcManager.vocabularyList = null;
        this.$window.location.href = "/#/upload";
    }
}