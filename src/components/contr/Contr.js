import React, { Component } from 'react'
import './Contr.css'

export default class Contr extends Component {
  render() {
    return (
        <section class="formPadre">
        <h1 class="h1r">Registrate</h1>
        <div class="formularioMv">
            <div class="inputs">
                <label for="">Tipo de documento</label>
                <input type="text" class="form-control" placeholder="Escoja una opción"></input>
            </div>
            <div class="inputs">
                <label for="">Número de documento</label>
                <input type="text" class="form-control" placeholder="Numero de documento"></input>
            </div>
            <div class="inputs">
                <label for="">Nombres</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="inputs">
                <label for="">Apellidos</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="inputs">
                <label for="">Fecha nacimiento</label>
                <input type="date" class="form-control"></input>
            </div>
            
            <div class="form-check">
                <p>Género</p>
                <div>
                    <form>
                        <label>
                            <input type="radio" value="" name="genero"></input>Mujer
                        </label>
                        <label>
                            <input type="radio" value="" name="genero"></input>Hombre
                        </label>
                        <label >
                            <input type="radio" value="" name="genero"></input>Otro
                        </label>
                    </form>
                </div>
            </div>
            <div class="inputs">
                <label for="">Email</label>
                <input type="email" class="form-control"></input>
            </div>
            <div class="inputs">
                <label for="">Teléfono de contacto</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="inputs">
                <label for="">País de origen</label>
                <input type="text" class="form-control"></input>
            </div>
            <div class="inputs">
                <label for="">Foto</label>
                <input type="file" class="form-control"></input>
            </div>
            <div class="contraseña">
                <label for="">Contraseña</label>
                <input type="password" class="form-control"></input>
            </div>
            <div class="confirmar">
                <label for="">Confirmar contraseña</label>
                <input type="password" class="form-control"></input>
            </div>
        </div>
        <div class="formularioDk">
            <div class="datos1">
                <div class="inputs">
                    <label for="">Tipo de documento</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">Nombres</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">Fecha nacimiento</label>
                    <input type="date" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">Email</label>
                    <input type="email" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">País de origen</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">Contraseña</label>
                    <input type="password" class="form-control"></input>
                </div>
            </div>
            <div class="info2">
                <div class="inputs">
                    <label for="">Numero de documento</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>
                <div class="inputs">
                    <label for="">Apellidos</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>
                <div class="radios">
                    <p>Género</p>
                    <div class="generoSl">
                        <form>
                            <label>
                                <input type="radio" value="" name="genero" checked></input>Mujer
                            </label>
                            <label>
                                <input type="radio" value="" name="genero"></input>Hombre
                            </label>
                            <label>
                                <input type="radio" value="" name="genero"></input>Otro
                            </label>
                        </form>
                    </div>
                </div>
                <div class="inputs">
                    <label for="">Teléfono de contacto</label>
                    <input type="text" class="form-control" placeholder=""></input>
                </div>

                <div class="inputs">
                    <label for="">Foto</label>
                    <input type="file" class="form-control" placeholder="Subir foto"></input>
                </div>

                <div class="inputs">
                    <label for="">Confirmar contraseña</label>
                    <input type="password" class="form-control"></input>
                </div>
                <div class="inputs">
                    <label><input class="terminosyc" type="checkbox" value=""/> Acepto terminos y condiciones</label>
                <div class="form-gruop-bt"><button class="ingresar">Ingresar</button></div> 
                </div>
            </div>
        </div>
    </section>
    )
  }
}
