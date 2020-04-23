import React from 'react';
import './style.css'

//HOC
import Aux from '../../hoc'

const Titulo = (props) => {
    return (
        <Aux>
            <h4 className="Titulo"> {props.children} </h4>
            <div className="divider" /><br />
        </Aux>
    )
}

export default Titulo