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

    const handleClick = ():void =>{
        if(!input){
            return
        }
        setWord(input);
        setInput("");
    }

    //figuring which type is this function took more than I thought but it works :D
    const handleKeyDown:React.KeyboardEventHandler = (e): void =>{
        if(e.key === 'Enter'){
            handleClick();
        }
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
                    onKeyDown={handleKeyDown}
                />
                 <FaSearch size='30px' className="icon" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default SearchBar;