import React from "react";
import '../Styles/Synonyms.css';
import {IWordData} from '../interfaces';

interface IProps{
    word: string;
    wordData: IWordData;
    setWord: React.Dispatch<React.SetStateAction<string>>
    setOperationType: React.Dispatch<React.SetStateAction<string>>
}
const Synonyms: React.FC<IProps> = ({word,wordData,setOperationType,setWord}) =>{

    const mappedSynonyms = wordData.results.map((data,dataIdx) =>{
        console.log(data.synonyms);
        try{
            if(data.synonyms.length>1){
                return(
                    <div key={`${word}-${dataIdx}`} className={`synonymContainer ${dataIdx}`}>
                        <h4 className="synonymDefinition">{data.definition}</h4>
                        {data.synonyms.map((synonym,synonymIdx)=>{
                            return(
                                <div key={synonymIdx} className="synonymName" onClick={()=>{setOperationType("/"); setWord(synonym)}}>
                                    {synonym}
                                </div>
                            )
                        })}
                    </div>
                )
            }
            else{
                return(
                    <div key={`${word}-${dataIdx}`} className={`synonymContainer ${dataIdx}`}>
                        <h4 className="synonymDefinition">{data.definition}</h4>
                        <div className="synonymName">{data.synonyms}</div>
                    </div>
                )
            }
        }catch(e){
            console.log(e);
        }
   
    })

    return (
        <div className="SynonymsContainer">
           
            <h3>Synonyms of word <span className="upperWord">{word.toUpperCase()}</span></h3>
            {mappedSynonyms}
        </div>
    )
}

export default Synonyms;