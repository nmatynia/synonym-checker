import React,{ useState } from "react";
import "../Styles/Nav.css";

interface IProps{
    setOperationType: React.Dispatch<React.SetStateAction<string>>
}
const Nav: React.FC<IProps> = ({setOperationType}) =>{

    const handleClick = (operation:string)=>{
        return () => setOperationType(operation)
    }
    return (
        <div className="Nav">
            <button onClick={handleClick("")}>SYNONYMS</button>
            <button onClick={handleClick("/rhymes")}>RHYMES</button>
            <button>MEANING</button>

        </div>
    )
}

export default Nav;