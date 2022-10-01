import { Link } from 'react-router-dom'

import blanco from '../../pages/img/Hotelia horizontal blanco.svg'
import React, { Component } from 'react'
import './Navr.css'

export default class Navr extends Component {
    render() {
        return (
            <section class="sectionr">
            <div>
                 <img class="imgr" src={blanco}/>
                <p class="bienvenido1">Un lugar en tu corazón</p>
                <p class="bienvenido2">Eres más que bienvenido</p>
            </div>
        </section>
        )
    }
}
