export interface IWordData{
    word:string
    results:wordDataResults[]
    syllables:wordDataSyllables
    pronunciation:{
        all:string
    }
}

export interface  wordDataResults{
    definition:string,
    partOfSpeech:string,
    synonyms:string[]
    typeOf:string[]
    hasTypes:string[]
    derivation:string[]
    examples:string[]
}

export interface wordDataSyllables{
    count:number;
    list:string[]
}