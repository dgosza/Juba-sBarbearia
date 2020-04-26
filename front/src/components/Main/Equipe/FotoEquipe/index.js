import React from 'react'
import ImageEquipe from '../../../../assets/images/icon.PNG'

//hoc
import Aux from '../../../hoc'

import './style.css'

const FotoEquipe = () => {

    const iconeBarber = <img src="https://img.icons8.com/plasticine/100/000000/barber-pole.png" alt="Icone BarberShop"/>

    return (
        <Aux>
            <span className="barberLeft">{iconeBarber}</span>
            <img src={ImageEquipe} width="200" className="photoEquipe" alt="Foto do Membro da Equippe" />
            <span className="barberRight">{iconeBarber}</span>
        </Aux>
    )
}

export default FotoEquipe;