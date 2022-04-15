import React,{ useState } from "react";
import "../Styles/Nav.css";

const Nav: React.FC = () =>{
    return (
        <div className="Nav">
            <button>SYNONYMS</button>
            <button>RYHMES</button>
            <button>MEANING</button>

        </div>
    )
}

export default Nav;