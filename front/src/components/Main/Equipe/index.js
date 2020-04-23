import React from 'react';
import ImageEquipe from '../../../assets/images/icon.PNG'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

import './style.css'

const Equipe = () => {
    return (
        <div className="row container">
            <div className="col s12 l12">
                <Titulo>Equipe</Titulo>
                <div className="col s12 l6 center">
                    <div className="col s12 l12">
                        <img src={ImageEquipe}  width="200" className="photoEquipe" />
                        <h5>Alex</h5>
                        <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                        texto
                            texto teaxto texto texto teaaxto texto texto texto texto</p>
                    </div>
                </div>

                <div className="col s12 l6">
                    <div className="col s12 l12 center">
                        <img src={ImageEquipe} width="200" className="photoEquipe" />
                        <h5>Klisler</h5>
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