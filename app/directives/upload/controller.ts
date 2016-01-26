///<reference path="../../../typings/tsd.d.ts"/>

import iFcManager = require('../../interfaces/iFcManager');

export = UploadController;

class UploadController {
    public file = null;
    public reader = new FileReader();
    public readHar() {
        this.reader.readAsText(this.file)
    }

    static $inject = [
        '$window',
        '$element',
        'fcManager'
    ];

    constructor(
        private $window,
        private $element,
        public fcManager:iFcManager
    ) {
        var self = this;
        $element.bind("change", function(e){
            self.file = (e.srcElement || e.target).files[0];
            self.readHar();
        });

        self.reader.onload = (onLoadEvent:any) => {
            self.fcManager.setVocabularyList(onLoadEvent.srcElement.result);
            if(self.fcManager.vocabularyList) {
                $window.location.href = "/#/vocabulary";
            }
        };
    }
}