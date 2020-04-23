import React from 'react';
import ImageLogo from '../../assets/images/jubas.png'
import './style.css'

const Header = () => {

    return (
        <header>
            <nav>
                <div className="row container">
                    <a href="index.html" className="brand-logo center"> <img src={ImageLogo} alt="Logo Juba's Barbearia" width="120" /> </a>
                    <div className="nav-wrapper">
                        <ul className="left hide-on-med-and-down menu">
                            <li className="active"><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">Equipe</a></li>
                            <li><a href="collapsible.html">Serviços</a></li>
                        </ul>

                        <ul className="right hide-on-med-and-down menu">
                            <li><a href="sass.html">Produtos</a></li>
                            <li><a href="badges.html">Sobre</a></li>
                            <li><a href="collapsible.html">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
