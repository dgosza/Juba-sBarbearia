import React from 'react'
import Klisler from '../../../../assets/images/icon.PNG'
import Alex from '../../../../assets/images/alex_person.jpg'

//hoc
import Aux from '../../../hoc'

import './style.css'

const FotoEquipe = (props) => {

    const iconeBarber = <img src="https://img.icons8.com/plasticine/100/000000/barber-pole.png" alt="Icone BarberShop" />
    const verificaPerson =  props.person === 'alex' ? Alex : Klisler

    return (
        <Aux>
            <span className="barberLeft hide-on-med-and-down">{iconeBarber}</span>
            <img src={verificaPerson} width="200" className="photoEquipe" alt="Foto do Membro da Equipe" />
            <span className="barberRight hide-on-med-and-down">{iconeBarber}</span>
        </Aux>
    )
}

export default FotoEquipe;