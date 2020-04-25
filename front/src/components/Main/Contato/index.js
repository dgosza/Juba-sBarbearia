import React from 'react';
import {Whatsapp} from '@styled-icons/icomoon'
import Formulario from './Formulario'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

//Tooltip
import Tooltip from '@material-ui/core/Tooltip'

import './style.css'

const Contato = () => {
    return (
        <div className="row container">
            <div className="col s12 l12">
                <Titulo>Contato e Whatsapp</Titulo>
            </div>

            <div className="col s12 l7">
                <Formulario></Formulario>
            </div>

            <div className="col s12 l5 center">
                <p>Clique no icone abaixo e entre em contato diretamente no whatsapp!</p>
                <Tooltip title="Entrar em contato no whatsapp"><a href=""><Whatsapp size={80} className="iconWhats"></Whatsapp></a></Tooltip>
            </div>
            <div class="col s12 l12"><br/><br/></div>
        </div>
    )
}

export default Contato