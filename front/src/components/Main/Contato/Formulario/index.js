import React, { useState } from 'react';
import Aux from '../../../hoc'
import apiBackend from '../../../../services/api'

import './style.css'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    const redirectLink = 'http://localhost:3000'

    const handleForm = async (e) => {
        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            e.preventDefault()
            alert('Preencha todos os campos!')
        } else {
            const data = { nome, email, assunto, mensagem }
            const response = await apiBackend.post('sendForm', data)
            if(response.status === 200){
                window.alert('Mensagem Enviada!')
                window.location.href = redirectLink
            }else if(response.status === 500){
                window.alert('Erro no Servidor! Contate o administrador do Site!')
                window.location.href = redirectLink
            }
        }
    }

    return (
        <Aux>
            <form>
                <div className="input-field col s4">
                    <input placeholder="Nome" id="nome" type="text" name="nomeContato" className="validate" onChange={(e) => { setNome(e.target.value) }} maxLength="20" />
                    <label htmlFor="nome" className="active">Nome</label>
                </div>
                <div className="input-field col s4">
                    <input placeholder="E-mail" id="first_name" type="text" name="emailContato" className="validate" onChange={(e) => { setEmail(e.target.value) }} maxLength="25" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s4">
                    <input placeholder="Assunto" id="email" type="text" name="assuntoContato" className="validate" onChange={(e) => { setAssunto(e.target.value) }} maxLength="30" />
                    <label htmlFor="email">Assunto</label>
                </div>
                <div className="input-field col s12">
                    <textarea id="msg" className="materialize-textarea" name="msgContato" onChange={(e) => { setMensagem(e.target.value) }} maxLength="200" placeholder="Máximo 200 caracteres" ></textarea>
                    <label htmlFor="msg">Mensagem</label>
                </div>

                <div className="col s12 l12">
                    <button className="btn  buttonEnvia right" type="submit" onClick={(e) => {handleForm(e)}}>Enviar Mensagem</button>
                </div>
            </form>
        </Aux>
    )
}

export default Formulario