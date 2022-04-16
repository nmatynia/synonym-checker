import React from "react";
import '../Styles/Rhymes.css'
import {IWordData} from '../interfaces';

interface Props{
    word: string;
    wordData: IWordData;
}

const Rhymes:React.FC<Props> = ({word,wordData}) =>{
    return(
        <div>

        </div>
    )
}

export default Rhymes;