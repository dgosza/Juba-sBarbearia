import React from 'react';
import './style.css';

//Icones
import { BowlingBall } from '@styled-icons/fa-solid';
import { Drink } from '@styled-icons/boxicons-solid';
import { Music } from '@styled-icons/crypto'

//Componente Titulo
import Titulo from '../../Utils/Titulo'

const Ambiente = () => {

    return (
        <div className="row container">
            <Titulo>Ambiente</Titulo>
            <div className="col s12 l12">

                <div className="col s12 l4 center">
                    <Drink size={80} />
                    <p className="titleAmbiente">Bebidas</p>
                    <p>Refrigerador com refrigerantes, cervejas e água. Tudo para sua comodidade.</p>
                </div>

                <div className="col s12 l4 center">
                    <BowlingBall size={80} />
                    <p className="titleAmbiente">Bilhar</p>
                    <p>Enquanto você espera, jogue bilhar na nossa mesa de bilhar totalmente personalizada.</p>
                </div>

                <div className="col s12 l4 center">
                    <Music size={80} />
                    <p className="titleAmbiente">Música</p>
                    <p>Enquanto espera ou no decorrer do corte de cabelo, escute suas músicas preferidas.</p>
                </div>

            </div>
        </div>
    )
}

export default Ambiente;
