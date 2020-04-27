import React, { useState } from 'react';
import Aux from '../../../hoc'

import './style.css'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')


    const handleForm = () => {
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            console.log('vazio')
        } else {
            
        }


    }

    return (
        <Aux>
            <form method="POST" action="/enviaForm">
                <div className="input-field col s4">
                    <input placeholder="Nome" id="nome" type="text" name="nomeContato" className="validate" onChange={(e) => { setNome(e.target.value) }} />
                    <label htmlFor="nome" className="active">Nome</label>
                </div>
                <div className="input-field col s4">
                    <input placeholder="E-mail" id="first_name" type="text" name="emailContato" className="validate" onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s4">
                    <input placeholder="Assunto" id="email" type="text" name="assuntoContato" className="validate" onChange={(e) => { setAssunto(e.target.value) }} />
                    <label htmlFor="email">Assunto</label>
                </div>
                <div className="input-field col s12">
                    <textarea id="msg" className="materialize-textarea" name="msgContato" onChange={(e) => { setMensagem(e.target.value) }}></textarea>
                    <label htmlFor="msg">Mensagem</label>
                </div>

                <div className="col s12 l12">
                    <button className="btn  buttonEnvia right" type="submit" onClick={handleForm}>Enviar Mensagem</button>
                </div>
            </form>
        </Aux>
    )
}

export default Formulario