import React from "react";
import '../Styles/Rhymes.css'
import {IRhymesData} from '../interfaces';

interface Props{
    word: string;
    wordData: IRhymesData;
}

const Rhymes:React.FC<Props> = ({word,wordData}) =>{
    return(
        <div className="RhymesContainer">
            <h3>Words that rhyme with <span className="upperWord">{word.toUpperCase()}</span></h3>
            <div className="rhymesInnerContainer">
            {wordData.rhymes.all.map((rhyme,rhymeIdx)=>{
                return(
                    <div key={rhymeIdx}className="rhymeName">
                        {rhyme}
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Rhymes;