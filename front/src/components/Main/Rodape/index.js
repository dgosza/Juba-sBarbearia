import React from 'react';

import { Instagram } from '@styled-icons/boxicons-logos'
import { SocialFacebookCircular } from '@styled-icons/typicons'
import { Whatsapp } from '@styled-icons/icomoon'

import Tooltip from '@material-ui/core/Tooltip'

import './style.css'

const Rodape = () => {


    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Juba's Barbearia</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        <div class="col s12 l6">
                            <p><b>Horário de Funcionamento</b><br />
                            Dias Úteis: 08h às 18h<br />
                            Finais de Semana: 09h às 15h<br /></p>
                        </div>
                        <div class="col s12 l6">
                            <p><b>Telefones de Contato</b><br />
                            Fixo: 11-2621-2621<br />
                            Celular: 11-2621-2621<br /></p>
                        </div>
                        <Tooltip title="Juba's no Instagram">
                            <a href="https://www.instagram.com/barbearia_jubas/" className="icon"><Instagram size={30} /></a>
                        </Tooltip>

                        <Tooltip title="Juba's no Facebook">
                            <a href="https://www.facebook.com/barbeariajubas" className="icon"><SocialFacebookCircular size={35} /></a>
                        </Tooltip>

                        <Tooltip title="Juba's no Whatsapp">
                            <a href="" className="icon"><Whatsapp size={25} /></a>
                        </Tooltip>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Equipe</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Serviços</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Produtos</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Sobre</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">Desenvolvido por: Diego Magalhães</a>
                </div>
            </div>
        </footer>
    )
}

export default Rodape