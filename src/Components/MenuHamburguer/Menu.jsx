import React from "react"
import { motion } from "framer-motion";
import "./Menu.css"


export default function Menu(){
    return(   
        <motion.div className="menu_container">
            <div>
                <h3>INFORMAÇÕES PRINCIPAIS</h3>
                <ul>
                    <li><a href="http://">Meu Cadastro</a></li>
                    <li><a href="http://">Primeiro Acesso?</a></li>
                    <li><a href="http://">Computadores pelo Campus</a></li>
                    <li><a href="http://">Fale Conosco</a></li>
                </ul>
            </div>
            <div>
                <h3>CAMPUS DIGITAL</h3>
                <ul>
                    <li><a href="http://">Rematrícula</a></li>
                    <li><a href="http://">Avaliações e Frequência</a></li>
                    <li><a href="http://">Comprovante de matrícula</a></li>
                    <li><a href="http://">Horários de Aula</a></li>
                    <li><a href="http://">Histórico do curso</a></li>
                    <li><a href="http://">Crachá de identificação</a></li>
                    <li><a href="http://">Estacionamento</a></li>
                </ul>
            </div>
            <div>
                <h3>MOODLE</h3>
                <ul>
                    <li><a href="http://">Sobre o Moodle</a></li>
                    <li><a href="http://">Primeiro acesso</a></li>
                    <li><a href="http://">Usando o Moodle</a></li>
                    <li><a href="http://">Disciplinas</a></li>
                    <li><a href="http://">Mensagens</a></li>
                    <li><a href="http://">Envio de trabalhos</a></li>
                    <li><a href="http://">Arquivos Pessoais</a></li>
                </ul>
            </div>
        </motion.div>
    )
}