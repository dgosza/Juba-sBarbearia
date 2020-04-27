import React from 'react';
import './style.css'

//HOC
import Aux from '../../hoc'

const Titulo = (props) => {
    return (
        <Aux>
            <h4 className="Titulo"> {props.children} </h4>
            <div className="col s12 l12" ><br /></div>
        </Aux>
    )
}

export default Titulo