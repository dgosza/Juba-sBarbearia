import React from 'react';

//Icones
import { Instagram } from '@styled-icons/boxicons-logos'
import { SocialFacebookCircular } from '@styled-icons/typicons'
import { Whatsapp } from '@styled-icons/icomoon'

import Tooltip from '@material-ui/core/Tooltip'

import LogoJubas from '../../Utils/LogoJubas'

import './style.css'

const Rodape = () => {


    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Juba's Barbearia</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        <div className="col s12 l6">
                            <p><b>Horário de Funcionamento</b><br />
                            Dias Úteis: 08h às 18h<br />
                            Finais de Semana: 09h às 15h<br /></p>
                        </div>
                        <div className="col s12 l6">
                            <p><b>Telefones de Contato</b><br />
                            Fixo: 11-2621-2621<br />
                            Celular: 11-2621-2621<br /></p>
                        </div>
                        <p>Endereço: Av. Dr. Assis Ribeiro, 4168 - Cangaíba - São Paulo/SP<br />
                        CEP: 03717-001
                        </p>
                    </div>
                    <div className="col l3 offset-l1 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#homeHREF">Home</a></li>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#ambienteHREF">Equipe</a></li>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#servicosHREF">Serviços</a></li>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#equipeHREF">Produtos</a></li>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#contatoHREF">Sobre</a></li>
                            <li className="linkRodape"><a className="grey-text text-lighten-3 " href="#localizacaoHREF">Contato</a></li>
                        </ul>
                        <Tooltip title="Juba's no Instagram">
                            <a href="https://www.instagram.com/barbearia_jubas/" rel="noopener noreferrer" target="_blank" className="icon"><Instagram size={30} /></a>
                        </Tooltip>

                        <Tooltip title="Juba's no Facebook">
                            <a href="https://www.facebook.com/barbeariajubas" rel="noopener noreferrer" target="_blank" className="icon"><SocialFacebookCircular size={35} /></a>
                        </Tooltip>

                        <Tooltip title="Juba's no Whatsapp">
                            <a href="!#" target="_blank" rel="noopener noreferrer"  className="icon"><Whatsapp size={25} /></a>
                        </Tooltip>
                    </div>
                    <div className="col s12 l2">
                        <LogoJubas dimensao="200" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Desenvolvido por: Diego Magalhães</a>
                </div>
            </div>
        </footer>
    )
}

export default Rodape