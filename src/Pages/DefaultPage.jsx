import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './DefaultPage.css'
import SetaVoltar from "../Components/SetaVoltar/SetaVoltar"
import Header from "../Components/Header/Header"
import { consomeAPI } from "../Services/consumer"
import Conteudo from "../Components/Conteudo/Conteudo";

export default function DefaultPage() {
    const { name } = useParams()

    const [conteudo, setConteudo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await consomeAPI(name)
    
            setConteudo(data)
        }
    
        fetchData()
    }, [])

    return (
        <>
        <Header />
        <main className="main-default">
            {
                Object.keys(conteudo).length > 0 ?
                    <Conteudo conteudo={conteudo}/>
                :
                    <>
                    <div className="pagina-titulo-subtitulo-container">
                        <h1 className="titulo-pagina">{name.replaceAll("-", " ")}</h1>
                    </div>

                    <p className="conteudo-principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias impedit aliquam, officiis sequi vero id excepturi nemo dolorem magni ducimus, cupiditate amet! Architecto vero non aut hic praesentium harum.</p>
                    </>
            }

            <SetaVoltar />
        </main>
        </>
    );
}