import React from 'react';

//Titulo
import Titulo from '../../Utils/Titulo'
//Box
import BoxServico from './BoxServico'

//Icones
import { IoIosCut } from 'react-icons/io'
import { GiBeard } from 'react-icons/gi'
import { GiLargePaintBrush } from 'react-icons/gi'
import { GiComb } from 'react-icons/gi'
import { GiRazorBlade } from 'react-icons/gi'
import { IoMdFlashlight } from 'react-icons/io'

import './style.css'

const Servicos = () => {

    return (
        <div className="row container" id="servicosHREF">
            <Titulo>Serviços</Titulo>

            <div className="col s12 l4">
                <BoxServico
                iconeServico={<IoIosCut></IoIosCut>}
                nomeServico="Corte Masculino"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o corte de cabelo masculino."
                />
            </div>
            <div className="col s12 l4">
                <BoxServico
                iconeServico={<GiBeard></GiBeard>}
                nomeServico="Barba"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o serviço de Barba."
                />
            </div>
            <div className="col s12 l4">
                <BoxServico
                iconeServico={<GiLargePaintBrush></GiLargePaintBrush>}
                nomeServico="Relaxamento"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o serviço de Relaxamento."
                />
            </div>
            <div className="col s12 l12"><br /></div>
            <div className="col s12 l4">
                <BoxServico
                iconeServico={<GiRazorBlade></GiRazorBlade>}
                nomeServico="Selagem"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o serviço de Selagem."
                />
            </div>
            <div className="col s12 l4">
                <BoxServico
                iconeServico={<IoMdFlashlight></IoMdFlashlight>}
                nomeServico="Luzes"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o serviço de Luzes"
                />
            </div>
            <div className="col s12 l4">
                <BoxServico
                iconeServico={<GiComb></GiComb>}
                nomeServico="Hidratação"
                descricaoServico="Corte de Cabelo com tesoura, navalha e ao final um retoque com crede de cabelo..."
                precoServico="25,00"
                mensagemWhats="Olá Juba's! Gostaria de saber mais detalhes e horários sobre o serviço de Hidratação."
                />
            </div>


        </div>
    )
}

export default Servicos