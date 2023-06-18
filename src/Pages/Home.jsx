import React from "react";
import './Home.css'
import Card from "../Components/Card/Card";
import Header from "../Components/Header/Header"

export default function Home() {
    return (
        <>
        {/* <Header /> */}
        <div>
            <h1>GUIA DO ALUNO</h1>
        </div>
        <div className="menu-grid">
            <Card />
        </div>
        <p className="rodape">IFRS • Web Design • Gabriel Hamdan • Renata Pigatto</p>
        </>
    );
}