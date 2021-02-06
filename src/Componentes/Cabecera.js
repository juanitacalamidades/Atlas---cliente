import React from 'react';
import Login from './Login';
import logo from './Graphics/logo.png';
//import Recomendados from './Recomendados';



function Cabecera (props){
    return ( //Escribir 'RegistroUsuario' en otro componente.
            // Escribir 'EntradaUsuario' en otro componente.  
    <>

<nav>
    <div className="cabecera-general">
    
    <div>
    <img src={logo} width="250" height="125" alt="" />
   
    </div>
    
    <div><Login  login={props.login} /></div>
       
    </div>

</nav>

    </>
    )
}

export default Cabecera;