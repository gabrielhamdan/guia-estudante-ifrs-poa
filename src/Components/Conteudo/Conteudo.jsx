import React from "react";
import './Conteudo.css'

export default function Conteudo(props) {
    return (
        <>
        <div className="pagina-titulo-subtitulo-container">
            <h1 className="titulo-pagina">{props.conteudo.titulo}</h1>
        </div>

        <p className="conteudo-principal">{props.conteudo.texto_principal}</p>

        {
            props.conteudo.subsecoes.length > 0 &&

            props.conteudo.subsecoes.map((subsecao, index) => {
                return <>
                    <div key={subsecao.titulo + index} className="container-subsecao">
                        <h2 className="titulo-subsecao">{subsecao.titulo}</h2>
                        <p className="conteudo-subsecao">{subsecao.texto_sub}</p>
                    </div>
                </>
            })
        }

        {
            props.conteudo.caixa_texto.length > 0 &&

            <p className="caixa-texto">{props.conteudo.caixa_texto}</p>
        }
        </>
    )
}