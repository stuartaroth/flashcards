///<reference path="../../typings/tsd.d.ts"/>

import iVocabulary = require('../interfaces/iVocabulary');

export = Manager;

class Manager {
    private vocabularyList:any = null;
    public hasCompletedFlashCards:boolean = false;

    public getVocabularyList():iVocabulary[] {
        return this.vocabularyList;
    }

    public setVocabularyList(fileContent:string):void {
        this.vocabularyList = this.parseSCSVFile(fileContent);
    }

    private parseSCSVFile(fileContent:string):iVocabulary[] {
        var vocabularyList:iVocabulary[] = [];
        var lines = fileContent.split("\n");
        _.each(lines, (line:string) => {
            var entry = line.split(";");
            if(entry.length == 2) {
                vocabularyList.push(<iVocabulary>{
                    term: entry[0],
                    definition: entry[1]
                });
            }
        });
        vocabularyList = <iVocabulary[]>_.shuffle(vocabularyList);
        return vocabularyList;
    }

    public resetFlashCards():void {
        this.vocabularyList = <iVocabulary[]>_.shuffle(this.vocabularyList);
        this.hasCompletedFlashCards = false;
    }
}