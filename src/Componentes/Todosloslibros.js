
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';




const Mostrarlibros =(props) =>{
  
  
  const [data, setData] = useState([]);
   
  useEffect(()=>{
      fetch("/libros")
      .then(response => response.json())
      .then(function(data){
      setData(data)
  })
  }, []);
  const Mostrarlibros = data.map(libro =>{
      return (
          <>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <div>
                <img src={libro.img} alt=""/>
                 <div className="sinestilo">{libro.titulo}</div>
                 <div className="estilo-texto">Autor: {libro.autor}</div>
                 <div className="estilo-texto">Editorial: {libro.editorial}</div>
                 <div className="estilo-texto">EAN: {libro.ean}</div>
                </div>
                  </Accordion.Toggle>
                 
                  <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <div className="sinestilo">Materia: {libro.materia}</div>  
                            <div className="estilo-texto">{libro.contra}</div>
                            </Card.Body>
                   </Accordion.Collapse>
        </>
          
      )});

      return (
        <>
        <h3 className="sinestilo fondo-seccion">Catálogo</h3>
        <div>{Mostrarlibros}</div>
        <Modal show={props.show} onHide={props.handleClose}>
        
        <Modal.Body>Has reservado tu libro!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Seguir en la librería
          </Button>
          
        </Modal.Footer>
      </Modal>
      </>
      ) 

};

export default Mostrarlibros;