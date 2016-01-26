import iVocabulary = require('./iVocabulary');

export = iFcManager;

interface iFcManager {
    vocabularyList:iVocabulary;
    setVocabularyList(fileContent:string):void;
    hasCompletedFlashCards:boolean;
    resetFlashCards():void;
}