import React,{ReactElement} from "react";
import '../Styles/Synonyms.css';
import {IWordData} from '../interfaces';

interface Props{
    word: string;
    wordData: IWordData;
}
const Synonyms: React.FC<Props> = ({word,wordData}) =>{

    const mappedSynonyms = wordData.results.map((data,dataIdx) =>{
        console.log(data.synonyms);
        try{
            if(data.synonyms.length>1){
                return(
                    <div key={`${word}-${dataIdx}`} className={`${word}-${dataIdx}`}>
                        <h4>{data.definition}</h4>
                        {data.synonyms.map((synonym,synonymIdx)=>{
                            return(
                                <div key={synonymIdx}>
                                    {synonym}
                                </div>
                            )
                        })}
                    </div>
                )
            }
            else{
                return(
                    <div key={`${word}-${dataIdx}`} className={`${word}-${dataIdx}`}>
                        <h4>Definition: {data.definition}</h4>
                        {data.synonyms}
                    </div>
                )
            }
        }catch(e){
            console.log(e);
        }
   
    })

    return (
        <div className="SynonymsContainer">
           
            <h3>Synonyms of word {word.toUpperCase()}</h3>
            {mappedSynonyms}
        </div>
    )
}

export default Synonyms;