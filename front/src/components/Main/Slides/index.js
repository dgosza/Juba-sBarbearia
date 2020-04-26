import React from 'react';

const Slides = () => {
    return (
        <div className="slider">
            <ul className="slides">
                <li>
                    <img src="#!" alt=" Bebidas do Juba's "/>
                    <div className="caption center-align">
                        <h3>Bebidas</h3>
                        <h5 className="light grey-text text-lighten-3">Espaco com alguns drinks.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" alt=" Bilhar do Juba's "/>
                    <div className="caption left-align">
                        <h3>Bilhar</h3>
                        <h5 className="light grey-text text-lighten-3">Espaco para bilhar.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" alt=" Música do Juba's "/> 
                    <div className="caption right-align">
                        <h3>Música</h3>
                        <h5 className="light grey-text text-lighten-3">Ambiente com musica.</h5>
                    </div>
                </li>
                <li>
                    <img src="#!" alt=" Jogos do Juba's " /> 
                    <div className="caption center-align">
                        <h3>Jogos</h3>
                        <h5 className="light grey-text text-lighten-3">Ambiente com jogos</h5>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Slides