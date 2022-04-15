import React,{ useState } from "react";
import { isPropertySignature } from "typescript";
import '../Styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
interface Props{
    word: string;
    setWord: React.Dispatch<React.SetStateAction<string>>
}
const SearchBar:React.FC<Props> = ({word, setWord}) =>{
    const [input,setInput]= useState<string>("");

    const handleChange= (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setInput(e.target.value);
    }

    const handleSubmit = ():void =>{
        if(!input){
            return
        }
        setWord(input);
        setInput("");
    }
    return (
        <div className="searchBarContainer">
            <div className="searchBar">
               
                <input 
                    className="searchBarInput"
                    type="text"
                    placeholder="Enter word you are searching for."
                    value={input}
                    onChange = {handleChange}
                    onSubmit = {handleSubmit}
                />
                 <FaSearch size='30px' className="icon" />
            </div>
        </div>
    )
}

export default SearchBar;