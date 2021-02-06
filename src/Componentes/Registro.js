
import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Registro =(props)=>{
    ///tres estados, tres funciones(handle), fetchPOST api/register, 3 inputs + button;
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName=(e)=> {
        setName(e.target.value)
    };
    const handleEmail=(e)=> {
        setEmail(e.target.value)
    };
    const handlePassword=(e)=> {
        setPassword(e.target.value)
    };



    return (
     <>
      <div className="registro-general">
        <h3 className="estilo-texto">Introduce tus datos</h3>
        <p className="estilo-texto">Nombre de usuario: </p>
        <input type="text" placeholder="Nombre de usuario" value={name} onChange={handleName}/>
       
        <p className="estilo-texto"> E-mail: </p>
        <input type="text" placeholder="Email" value={email} onChange={handleEmail}/>
        <p className="estilo-texto">Contraseña: </p>
        <input type="password" placeholder="Contraseña" value={password} onChange={handlePassword}/>
       
        <button onClick={()=>props.registro(name, email, password)} className="sinestilo" variant="outline-danger">Registrarse</button>
        
        </div>
        <Modal show={props.show} onHide={props.handleClose}>
        
        <Modal.Body>Te has registrado</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Seguir en la librería
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    )};


export default Registro;