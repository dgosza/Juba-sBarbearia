import React from 'react';
import Formulario from './Formulario'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

import './style.css'

const Contato = () => {
    return (
        <div className="row container" id="contatoHREF">
            <div className="col s12 l12">
                <Titulo>Contato</Titulo>
            </div>


            <div className="col s12 l5 center">
                <p>Fique a vontade para entrar em contato conosco, seja com sua <b>dúvida</b>, <b>sugestão</b> ou <b>feedback</b>!</p>
                <p>Ficaremos contentes em respondê-lo o mais breve possível!</p>
            </div>

            <div className="col s12 l7">
                <Formulario></Formulario>
            </div>

            <div class="col s12 l12"><br/><br/></div>
        </div>
    )
}

export default Contato