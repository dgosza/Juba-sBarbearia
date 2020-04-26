import React from 'react';

//Icones
import { Instagram } from '@styled-icons/boxicons-logos'
import { SocialFacebookCircular } from '@styled-icons/typicons'
import { Whatsapp } from '@styled-icons/icomoon'

import LogoJubas from '../Utils/LogoJubas'
import './style.css'

//Tooltip
import Tooltip from '@material-ui/core/Tooltip'

const Header = () => {

    return (
        <header>
            <nav>
                <div className="row container">
                    <a href="index.html" className="brand-logo center"> <LogoJubas dimensao="150" /></a>
                    <div className="nav-wrapper">
                        <ul className="left hide-on-med-and-down menu">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">Equipe</a></li>
                            <li><a href="collapsible.html">Serviços</a></li>
                        </ul>

                        <ul className="right hide-on-med-and-down menu">
                            <li><a href="sass.html">Produtos</a></li>
                            <li><a href="badges.html">Sobre</a></li>
                            <li><a href="collapsible.html">Contato</a></li>

                            <Tooltip title="Juba's no Instagram">
                                <li className="icon"><a href="https://www.instagram.com/barbearia_jubas/" target="_blank" rel="noopener noreferrer" ><Instagram size={30}/></a></li>
                            </Tooltip>

                            <Tooltip title="Juba's no Facebook">
                                    <li className="icon"><a href="https://www.facebook.com/barbeariajubas" target="_blank" rel="noopener noreferrer" ><SocialFacebookCircular size={35}/></a></li>
                            </Tooltip>

                            <Tooltip title="Juba's no Whatsapp">
                                    <li className="icon"><a href="!#" target="_blank" rel="noopener noreferrer" ><Whatsapp size={25}/></a></li>
                            </Tooltip>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
