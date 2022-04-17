import { render } from "@testing-library/react";
import React from "react";
import {IWordData} from '../interfaces';
import '../Styles/Meaning.css'

interface IProps{
    word: string;
    wordData: IWordData;
}

const Meaning: React.FC<IProps> = ({word,wordData}) =>{
    const mappedData:JSX.Element[] = wordData.results.map((data,dataIdx)=>{
        return(
            <div key={dataIdx} className="definitionContainer">
                <div className="partOfSpeech">{data.partOfSpeech}</div>
               <div className="definition">{data.definition}</div>
               {data.examples ? (<div className="example">"{data.examples}"</div>):null}
            </div>
        )
    })

    return(
        <div className="MeaningContainer">
            <h3 className ="meaningHeader">{word} <span className ="pronunciation">/{wordData.pronunciation.all}/</span></h3>
            {mappedData}
        </div>
    )
}

export default Meaning;