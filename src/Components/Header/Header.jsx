import React from "react";
import "./Header.css"
import Menu from "../MenuHamburguer/Menu";
import MenuToggle from "../MenuHamburguer/MenuToggle";
import { useState } from "react";
import logoIF from "../../Images/ifrs_logo_white.png"
import { Link } from "react-router-dom";

export default function Header(){
    const logo = logoIF;

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen)
    };

    const fechaMenu = () => {
        if(isOpen)
            setOpen(false)
    }
     
    return(
        <div>
            <header>
                <div className="header_info">
                    <div>
                        <Link to="/">
                            <img src={logo} />
                        </Link>
                    </div>
                    <div className="ifrs_info">
                        <h3>INSTITUTO FEDERAL</h3>
                        <p>Rio Grande do sul</p>
                        <p>Campus Porto Alegre</p>
                    </div>
                </div>
                <div className="menu_button">
                    <MenuToggle toggle={toggleMenu} isOpen={isOpen}/>
                </div>
            </header>
            {isOpen &&
                <Menu className="menu-componente" click={fechaMenu}/>
            }
        </div>
    )
}

