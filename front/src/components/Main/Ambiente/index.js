import React from 'react';
import './style.css';

//Icones
import { Drink } from '@styled-icons/boxicons-solid';
import { FolderMusic } from '@styled-icons/entypo'
import { GameController } from '@styled-icons/entypo'
import { GiEightBall } from 'react-icons/gi'


//Componente Titulo
import Titulo from '../../Utils/Titulo'

const Ambiente = () => {

    return (
        <div className="row container" id="ambienteHREF">
            <Titulo>Ambiente</Titulo>
            <div className="col s12 l12">

                <div className="col s12 l3 center">
                    <Drink size={80} />
                    <p className="titleAmbiente">Bebidas</p>
                    <p>Refrigerador com refrigerantes, cervejas e água. Tudo para sua comodidade.</p>
                </div>

                <div className="col s12 l3 center">
                    <GiEightBall size={80} />
                    <p className="titleAmbiente">Bilhar</p>
                    <p>Enquanto você espera, jogue bilhar na nossa mesa de bilhar totalmente personalizada.</p>
                </div>

                <div className="col s12 l3 center">
                    <FolderMusic size={80} />
                    <p className="titleAmbiente">Música</p>
                    <p>Enquanto espera ou no decorrer do corte de cabelo, escute suas músicas preferidas.</p>
                </div>

                <div className="col s12 l3 center">
                    <GameController size={80} />
                    <p className="titleAmbiente">Jogos</p>
                    <p>Em nossa Barbearia contamos com video-game para nossos clientes jogarem enquanto esperam.</p>
                </div>

            </div>
        </div>
    )
}

export default Ambiente;
