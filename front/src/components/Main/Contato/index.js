import React from 'react';
import {Whatsapp} from '@styled-icons/icomoon'
import Formulario from './Formulario'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

const Contato = () => {
    return (
        <div className="row container">
            <div className="col s12 l12">
                <Titulo>Contato e Whatsapp</Titulo>
                <p>Clique no ícone do whatsapp para automaticamente entrar em contato conosco ou se preferir envie um
                formulário de contato que
                logo logo responderemos você!</p>
            </div>

            <div className="col s12 l7">
                <Formulario></Formulario>
            </div>

            <div className="col s12 l5">
                <Whatsapp size={80}></Whatsapp>
            </div>

        </div>
    )
}

export default Contato