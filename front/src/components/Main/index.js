import React from 'react';

//Componentes
import Banner from './Banner'
import Ambiente from './Ambiente'
import Slides from './Slides'
import Equipe from './Equipe'
import Contato from './Contato'
import Localizacao from './Localizacao'
import MidiaSocial from './MidiaSocial'
import Rodape from './Rodape'

import Aux from '../hoc'

const Main = () => {
    return (
        <Aux>
            <Banner>
                <h3>Juba's Barbearia</h3>
                <p>texto texto texto texto texto texto texto texto texto texto texto texto texto </p>
            </Banner>

            <Ambiente></Ambiente>
            <Slides></Slides>
            <Equipe></Equipe>
            <Contato></Contato>
            <Localizacao></Localizacao>
            <MidiaSocial></MidiaSocial>
            <Rodape></Rodape>

        </Aux>
    )
}

export default Main;
