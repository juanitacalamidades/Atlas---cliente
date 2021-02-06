import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Poesia =(props)=>{
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/libros')
        .then(response => response.json())
        .then(function(data){
          setData(data)
    
        })
    }, [])
    

    const libros = data.map(libro => {
        if(libro.materia === "Poesía"){
    
            return (
                <>
                <Container>
                    <Row className="justify-content-md-center">
                    <Col xs lg="2"><div><img src={libro.img} alt=""/></div></Col>
                    <Col md="30"></Col>
                    <Col xs lg="30">
                    <div className="sinestilo elementos-libro" sm>{libro.titulo}</div>
                    <div className="sinestilo elementos-libro"> {libro.autor}</div>
                    <div className="estilo-texto elementos-libro">{libro.contra}</div>
                    </Col>
                    <Col md="30"></Col>
                    <Col lg="20">
                    <div className="estilo-texto elementos-libro">Editorial: {libro.editorial}</div>
                    <div className="estilo-texto elementos-libro">Materia: {libro.materia}</div>
                    <div className="estilo-texto elementos-libro">EAN: {libro.ean}</div>
                    <button onClick={() => props.reservar(libro._id)}className="sinestilo">Reservar libro</button>
                    
                    </Col>

                    </Row>
                    </Container>
                </>
            )
        }
        
       
        
    })
    

    return (
        <>
        <h3 className="sinestilo fondo-seccion">Poesía</h3>
        <div>{libros}</div>
        
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


export default Poesia;