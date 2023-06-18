import React from "react"
import { motion } from "framer-motion";
import "./Menu.css"

function Menu(){
    return(
        <nav>
            <div>
                <h3>INFORMAÇOES PRINCIPAIS</h3>
                <ul>
                    <li>Meu Cadastro</li>
                    <li>Primeiro Acesso?</li>
                    <li>Computadores pelo Campus</li>
                    <li>Internet Wi-Fi</li>
                    <li>Fale Conosco</li>
                </ul>
            </div>
            <div>
                <h3>CAMPUS DIGITAL</h3>
                <ul>
                    <li>Rematrícula</li>
                    <li>Avaliações e Frequência</li>
                    <li>Comprovante de matrícula</li>
                    <li>Horários de Aula</li>
                    <li>Histórico do curso</li>
                    <li>Crachá de identificação</li>
                    <li>Estacionamento</li>
                </ul>
            </div>
            <div>
                <h3>MOODLE</h3>
                <ul>
                    <li>Sobre o Moodle</li>
                    <li>Primeiro acesso</li>
                    <li>Usando o Moodle</li>
                    <li>Disciplinas</li>
                    <li>Mensagens</li>
                    <li>Envio de trabalhos</li>
                    <li>Arquivos Pessoais</li>
                </ul>
            </div>
        </nav>
    )
}