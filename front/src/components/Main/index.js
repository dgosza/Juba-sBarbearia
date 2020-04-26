import React from 'react';

//Componentes
import Banner from './Banner'
import Ambiente from './Ambiente'
import Slides from './Slides'
import Equipe from './Equipe'
import Contato from './Contato'
import Localizacao from './Localizacao'
import Rodape from './Rodape'
import Servicos from './Servicos'

import Aux from '../hoc'

const Main = () => {
    return (
        <Aux>
            <Banner></Banner>

            <Ambiente></Ambiente>
            <Slides></Slides>
            <Servicos></Servicos>
            <Equipe></Equipe>
            <Contato></Contato>
            <Localizacao></Localizacao>
            <Rodape></Rodape>

        </Aux>
    )
}

export default Main;
