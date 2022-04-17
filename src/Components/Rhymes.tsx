import React from "react";
import '../Styles/Rhymes.css'
import {IRhymesData} from '../interfaces';

interface Props{
    word: string;
    wordData: IRhymesData;
    setWord: React.Dispatch<React.SetStateAction<string>>
    setOperationType: React.Dispatch<React.SetStateAction<string>>
}

const Rhymes:React.FC<Props> = ({word,wordData,setWord,setOperationType}) =>{
    
    const mappedRhymes = () =>{
        return wordData.rhymes.all.map((rhyme,rhymeIdx)=>{
            return(
                <div key={rhymeIdx}className="rhymeName" onClick={()=>{setOperationType("/"); setWord(rhyme)}}>
                    {rhyme}
                </div>
            )
        })
    }

    const noResults:JSX.Element = (<div className="noResults">Sorry, it seems like there is no rhymes for this word.</div>)

    return(
        <div className="RhymesContainer">
            <h3>Words that rhyme with <span className="upperWord">{word.toUpperCase()}</span></h3>
            <div className="rhymesInnerContainer">
            {wordData.rhymes.hasOwnProperty('all')?mappedRhymes():noResults}
            </div>
        </div>
    )
}

export default Rhymes;