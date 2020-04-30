import React from 'react';

//Componente FotoEquipe
import FotoEquipe from './FotoEquipe'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

import './style.css'

const Equipe = () => {

    return (
        <div className="row container" id="equipeHREF">
            <div className="col s12 l12">
                <Titulo>Equipe</Titulo>
                <div className="col s12 l6 center">
                    <div className="col s12 l12">
                        <FotoEquipe person="alex"></FotoEquipe>
                        <h5>Alex Souza</h5>
                        <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                        texto
                            texto teaxto texto texto teaaxto texto texto texto texto</p>
                    </div>
                </div>

                <div className="col s12 l6">
                    <div className="col s12 l12 center">
                        <FotoEquipe person="klisler"></FotoEquipe>
                        <h5>Klisler Barboza</h5>
                        <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                        texto
                            texto texto texto texto texto texto texto texto texto</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipe