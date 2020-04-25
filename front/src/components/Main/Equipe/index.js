import React from 'react';
import ImageEquipe from '../../../assets/images/icon.PNG'

//Componente FOtoEquipe
import FotoEquipe from './FotoEquipe'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

import './style.css'

const Equipe = () => {

    const iconeBarber = <img src="https://img.icons8.com/plasticine/100/000000/barber-pole.png" />

    return (
        <div className="row container">
            <div className="col s12 l12">
                <Titulo>Equipe</Titulo>
                <div className="col s12 l6 center">
                    <div className="col s12 l12">
                        <FotoEquipe></FotoEquipe>
                        <h5>Alex Souza</h5>
                        <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                        texto
                            texto teaxto texto texto teaaxto texto texto texto texto</p>
                    </div>
                </div>

                <div className="col s12 l6">
                    <div className="col s12 l12 center">
                        <FotoEquipe></FotoEquipe>
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