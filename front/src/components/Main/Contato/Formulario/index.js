import React from 'react';
import Aux from '../../../hoc'

import './style.css'

const Formulario = () => {
    return (
        <Aux>
            <div className="input-field col s4">
                <input placeholder="Nome" id="nome" type="text" name="nomeContato" className="validate" />
                <label htmlFor="nome" className="active">Nome</label>
            </div>
            <div className="input-field col s4">
                <input placeholder="E-mail" id="first_name" type="text" name="emailContato" className="validate" />
                <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s4">
                <input placeholder="Assunto" id="email" type="text" name="assuntoContato" className="validate" />
                <label htmlFor="email">Assunto</label>
            </div>
            <div className="input-field col s12">
                <textarea id="msg" className="materialize-textarea" name="msgContato"></textarea>
                <label htmlFor="msg">Mensagem</label>
            </div>

            <div className="col s12 l12">
                <button className="btn right buttonEnvia" type="submit" >Enviar Mensagem</button>
            </div>

        </Aux>
    )
}

export default Formulario