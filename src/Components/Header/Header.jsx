import React from "react";
import "./Header.css"
import { motion } from "framer-motion";
import Menu from "../MenuHamburguer/Menu";
import MenuToggle from "../MenuHamburguer/MenuToggle";
import { useState } from "react";
// import IMAGES from "src/Images/Images.jsx"


const menuVariants = {
    open: {
        transform: "translateY(3%)",
    },
    closed: {
        transform: "translateY(103%)",
    },
};
  
const menuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1,
};

export default function Header(){

    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen)
    };
     
    return(
        <div>
            <header>
                <div className="header_info">
                    <div>
                        <img src="src/Images/ifrs_logo_white.png" alt="logo ifrs" />

                        {/* <img src={IMAGES.image1} alt='logo ifrs'/> */}
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
                <Menu className="menu-componente"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={menuTransition}
                />
            }
        </div>
    )
}

