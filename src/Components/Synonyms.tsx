import React from "react";
import '../Styles/Synonyms.css';
interface Props{
    word: string;
    synonyms: [];
}
const Synonyms: React.FC<Props> = ({word,synonyms}) =>{
    const mappedSynonyms = synonyms.map((synonym,idx) =>{
        return (
            <div key={idx}>
                {synonym}
            </div>
        )
    })
    return (
        <div className="SynonymsContainer">
           
            <h3>Synonyms of word {word.toUpperCase()}</h3>
            {mappedSynonyms}
        </div>
    )
}

export default Synonyms;