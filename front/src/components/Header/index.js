import React from 'react';

//Icones
import { Instagram } from '@styled-icons/boxicons-logos'
import { SocialFacebookCircular } from '@styled-icons/typicons'
import { Whatsapp } from '@styled-icons/icomoon'

import LogoJubas from '../Utils/LogoJubas'
import './style.css'

//Tooltip
import Tooltip from '@material-ui/core/Tooltip'

import LinkWhats from '../Utils/Whatsapp'
import { renderToString } from 'react-dom/server'

const Header = () => {

    const linkWhats = renderToString(<LinkWhats mensagem="Ola Juba's! Gostaria de saber mais detalhes sobre a Barbearia." ></LinkWhats>)

    return (
        <header id="homeHREF">
            <nav>
                <div className="row container">
                    <a href="index.html" className="brand-logo center"> <LogoJubas dimensao="150" /></a>
                    <a href="!#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <div className="nav-wrapper">
                        <ul className="left hide-on-med-and-down menu">
                            <li><a href="#homeHREF">Home</a></li>
                            <li><a href="#ambienteHREF">Ambiente</a></li>
                            <li><a href="#servicosHREF">Serviços</a></li>
                        </ul>

                        <ul className="right hide-on-med-and-down menu">
                            <li><a href="#equipeHREF">Equipe</a></li>
                            <li><a href="#contatoHREF">Contato</a></li>
                            <li><a href="#localizacaoHREF">Localização</a></li>

                            <Tooltip title="Juba's no Instagram">
                                <li className="icon"><a href="https://www.instagram.com/barbearia_jubas/" target="_blank" rel="noopener noreferrer" ><Instagram size={30} /></a></li>
                            </Tooltip>

                            <Tooltip title="Juba's no Facebook">
                                <li className="icon"><a href="https://www.facebook.com/barbeariajubas" target="_blank" rel="noopener noreferrer" ><SocialFacebookCircular size={35} /></a></li>
                            </Tooltip>

                            <Tooltip title="Juba's no Whatsapp">
                                <li className="icon"><a href={linkWhats} target="_blank" rel="noopener noreferrer" ><Whatsapp size={25} /></a></li>
                            </Tooltip>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* MOBILE HAMBURGER */}

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#homeHREF">Home</a></li>
                <li><a href="#ambienteHREF">Ambiente</a></li>
                <li><a href="#servicosHREF">Serviços</a></li>
                <li><a href="#equipeHREF">Equipe</a></li>
                <li><a href="#contatoHREF">Contato</a></li>
                <li><a href="#localizacaoHREF">Localização</a></li>
                <li className="icon"><a href="https://www.instagram.com/barbearia_jubas/" target="_blank" rel="noopener noreferrer" ><Instagram size={32} /> Juba`s no Instagram</a></li>
                <li className="icon"><a href="https://www.facebook.com/barbeariajubas" target="_blank" rel="noopener noreferrer" ><SocialFacebookCircular size={35} /> Juba`s no Facebook </a></li>
                <li className="icon"><a href={linkWhats} target="_blank" rel="noopener noreferrer" ><Whatsapp size={27} /> Juba`s no Whatsapp </a></li>
            </ul>

        </header>
    )
}

export default Header;
