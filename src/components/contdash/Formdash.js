import img1 from '../../pages/img/ester.jpg'
import './Formdash.css'
function Contendio() {
    return (
                <div class="contform">
                <div class="contdatos">
                    <h1>Bienvenido, Angie Vargas</h1>
                    <div class="foto">
                        <img src={img1} width="150px" alt="" />
                    </div>
                        <div class="botonesf">
                            <i class="fa-solid fa-file-arrow-up"></i>
                            <i class="fa-solid fa-upload"></i>
                        </div>
                        <button class="cambiarctñ">Cambiar contraseña</button>
                    <div class="infouser">
                        <div class="datos">
                            <div>
                                <label for=""><h3>Tipo de Documento</h3></label>
                                <input type="text" placeholder="Cédula de ciudadania" class="inputt" name="" id="" />
                            </div>
                            <div>
                                <label for=""><h3>Nombre</h3></label><br />
                                <input type="text" class="inputt" placeholder="Angie Camila" name="" id=""/>
                            </div>
                            <div>
                                <label for=""><h3>Fecha de nacimiento</h3></label>
                                <input type="date" class="inputt" placeholder="10/08/1967" name="" id=""/>
                            </div>
                            <div>
                                <label for=""><h3>Genero</h3></label>
                                <div class="chx">
                                    <input type="radio" class="inputt" value="Mujer" name="" id="" checked=""/>Mujer
                                    <input type="radio" class="inputt" value="Hombre" name="" id=""/>Hombre
                                    <input type="radio" class="inputt" value="Otros" name="" id=""/>Otros
                                </div>  
                            </div>
                            <div>
                                <label for=""><h3>Email</h3></label><br/>
                                <input type="email" class="inputt" placeholder="angievarags2@gmail.com" name="" id=""/>
                            </div><br/>
                            <div>
                                <button class="edi">Actualizar</button>
                            </div>
                            <div class="ctñ">
                                <label for=""><h3>Contraseña</h3></label><br/>
                                <input type="password" class="inputt" placeholder="......." name="" id=""/>
                            </div>
                            <button class="edi">Cambiar</button>
                        </div>
                        <div class="datos2">
                            <div>
                                <label for=""><h3>Número de Documento</h3></label>
                                <input type="number" placeholder="10264560" class="inputt" name="" id=""/><br/><br/>
                            </div>
                            <div>
                                <label for=""><h3>Apellidos</h3></label><br/>
                                <input type="text" placeholder="Vargas Pinzón" class="inputt" name="" id=""/><br/><br/>
                            </div>
                            <div>
                                <label for=""><h3>País de origen</h3></label>
                                <input type="text" placeholder="Colombia" class="inputt" name="" id=""/><br/><br/>
                            </div>
                            <div>
                                <label for=""><h3>Teléfono de contacto</h3></label>
                                <input type="number" placeholder="3135204598" class="inputt" name="" id=""/>
                            </div>
                            <div class="confirmarctñ">
                                <label for=""><h3>Confirmar contraseña</h3></label>
                                <input type="pasword" class="inputt" name="" id="" placeholder="......"/>
                            </div>  
                    </div>
                </div>
            </div>
    </div>
);
}

export default Contendio;