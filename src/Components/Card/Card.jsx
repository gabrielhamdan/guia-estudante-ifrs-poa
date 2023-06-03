import React from "react";
import { motion } from "framer-motion";
import SetaVoltar from "../SetaVoltar/SetaVoltar";
import "./Card.css"

export default function Card(props) {
    return (
        <>
        {props.mostrarSeta &&

            <SetaVoltar />
        }

        <div className="card">
            <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                />
        </div>
        </>
    );
}