import React,{ useState } from "react";
import "../Styles/Nav.css";

interface IProps{
    operationType: string
    setOperationType: React.Dispatch<React.SetStateAction<string>>
}
const Nav: React.FC<IProps> = ({setOperationType,operationType}) =>{

    const handleClick = (operation:string)=>{
        return () => setOperationType(operation)
    }
    return (
        <div className="Nav">
            <button onClick={handleClick("")} className={operationType==""?"active":undefined}>SYNONYMS</button>
            <button onClick={handleClick("/rhymes")} className={operationType=="/rhymes"?"active":undefined}>RHYMES</button>
            <button onClick={handleClick("/")} className={operationType=="/"?"active":undefined}>MEANING</button>

        </div>
    )
}

export default Nav;