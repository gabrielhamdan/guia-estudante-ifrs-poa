import React from "react";
import './Home.css'
import Card from "../Components/Card/Card";

export default function Home() {
    return (
        <>
        <div>
            <h1>GUIA DO ESTUDANTE</h1>
        </div>
        <div className="menu-grid">
            <Card />
        </div>
        <p className="rodape">IFRS • Web Design • Gabriel Hamdan • Renata Pigatto</p>
        </>
    );
}