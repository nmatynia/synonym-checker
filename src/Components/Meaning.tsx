import { render } from "@testing-library/react";
import React from "react";
import {IWordData} from '../interfaces';

interface IProps{
    word: string;
    wordData: IWordData;
}

const Meaning: React.FC<IProps> = () =>{
    return(
        <div>
            
        </div>
    )
}

export default Meaning;