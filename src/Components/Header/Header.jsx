import React from "react";
import "./Header.css"

export default function Header(){
    return(
        <header>
            <div>
                <h3>INSTITUTO FEDERAL</h3>
                <p>Rio Grande do sul</p>
                <p>Campus Porto Alegre</p>                
            </div>
            <MenuButton/>
        </header>
    )
}

