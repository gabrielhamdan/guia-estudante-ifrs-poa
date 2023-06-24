import React from "react"
import { motion } from "framer-motion";
import "./Menu.css"
import { Link } from "react-router-dom";

export default function Menu(){
    return( 
        <motion.div className="menu_container">
            <div>
                <h3>INFORMAÇÕES PRINCIPAIS</h3>
                <ul>
                    <li><Link to="pagina/meu-cadastro">Meu Cadastro</Link></li>
                    <li><Link to="pagina/primeiro-acesso">Primeiro Acesso?</Link></li>
                    <li><Link to="pagina/computadores-pelo-campus">Computadores pelo Campus</Link></li>
                    <li><Link to="pagina/wifi">Acesso ao Wi-Fi</Link></li>
                    <li><Link to="pagina/fale-conosco">Fale Conosco</Link></li>
                </ul>
            </div>
            <div>
                <h3>CAMPUS DIGITAL</h3>
                <ul>
                    <li><Link to="pagina/rematricula">Rematrícula</Link></li>
                    <li><Link to="pagina/avaliacoes-e-frequencia">Avaliações e Frequência</Link></li>
                    <li><Link to="pagina/comprovante-de-matricula">Comprovante de matrícula</Link></li>
                    <li><Link to="pagina/horarios-de-aula">Horários de Aula</Link></li>
                    <li><Link to="pagina/historico-do-curso">Histórico do curso</Link></li>
                    <li><Link to="pagina/cracha-de-identificacao">Crachá de identificação</Link></li>
                    <li><Link to="pagina/estacionamento">Estacionamento</Link></li>
                </ul>
            </div>
            <div>
                <h3>MOODLE</h3>
                <ul>
                    <li><Link to="pagina/sobre-o-moodle">Sobre o Moodle</Link></li>
                    <li><Link to="pagina/primeiro-acesso">Primeiro acesso</Link></li>
                    <li><Link to="pagina/usando-o-moodle">Usando o Moodle</Link></li>
                    <li><Link to="pagina/disciplinas">Disciplinas</Link></li>
                    <li><Link to="pagina/mensagens">Mensagens</Link></li>
                    <li><Link to="pagina/envio-de-trabalhos">Envio de trabalhos</Link></li>
                    <li><Link to="pagina/arquivos-pessoais">Arquivos Pessoais</Link></li>
                </ul>
            </div>
        </motion.div>
    )
}