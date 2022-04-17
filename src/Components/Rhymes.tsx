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
            {wordData.rhymes.all.map((rhyme,rhymeIdx)=>{
                return(
                    <div key={rhymeIdx}>
                        {rhyme}
                    </div>
                )
            })}
        </div>
    )
}

export default Rhymes;