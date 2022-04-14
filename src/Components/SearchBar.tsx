import React from "react";
import { isPropertySignature } from "typescript";

interface Props{
    word: string;
    //handleChange: Function;
}
const SearchBar:React.FC<Props> = ({word}) =>{
    return (
        <div className="searchBarContainer">
            <input 
                className="searchBar"
                type="text"
                placeholder="Enter word you are searching for."
                value={word}
            >

            </input>
        </div>
    )
}

export default SearchBar;