import React from 'react'
import Aux from '../../hoc'

const geraLinkWhats = (props) =>{

    const numero = 55119999999
    const mensagem = encodeURIComponent(props.mensagem)
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`
    
    return (
        <Aux>{url}</Aux>
    )    

}

export default geraLinkWhats