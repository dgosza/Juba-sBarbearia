import React from 'react'

//Icones
import { Instagram } from '@styled-icons/boxicons-logos'
import { Facebook } from '@styled-icons/fa-brands'

//Tooltip
import Tooltip from "@material-ui/core/Tooltip"

import './style.css'

const MidiaSocial = () => {
    return (
        <div className="row container">
            <br />
            <div className="col s12 l6 center">
                <Tooltip title="Visitar Juba's no Instagram">
                    <a className="linkMidiaSocial" href="" target="_blank">
                        <Instagram size={80}></Instagram>
                    </a>
                </Tooltip>
            </div>
            <div className="col s12 l6 center">
                <Tooltip title="Visitar Juba's no Facebook">
                    <a className="linkMidiaSocial" href="https://www.facebook.com/barbeariajubas" target="_blank">
                        <Facebook size={80}></Facebook>
                    </a>
                </Tooltip>
            </div>
        </div>
    )
}

export default MidiaSocial;