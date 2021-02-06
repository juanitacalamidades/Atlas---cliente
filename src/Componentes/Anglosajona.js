import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const Anglosajona = (props) => {

    const [data, setData] = useState([]);
   
    useEffect(()=>{
        fetch("/anglosajona")
        .then(response => response.json())
        .then(function(data){
        setData(data)
    })
    }, []);

    const libros = data.map(libro => {
        return (
            <>
                  <Container>
                    <Row className="justify-content-md-center">
                    <Col xs lg="2"><div><img src={libro.img} alt="" className="img-secciones"/></div></Col>
                    <Col md="30"></Col>
                    <Col xs lg="30">
                    <div className="sinestilo" sm>{libro.titulo}</div>
                    <div className="sinestilo"> {libro.autor}</div>
                    <div className="estilo-texto elementos-libro">{libro.contra}</div>
                    </Col>
                    <Col md="30"></Col>
                    <Col lg="20">
                    <div className="estilo-texto elementos-libro">Editorial: {libro.editorial}</div>
                    <div className="estilo-texto elementos-libro">Materia: {libro.materia}</div>
                    <div className="estilo-texto elementos-libro">EAN: {libro.ean}</div>
                    <button onClick={() => props.reservar(libro._id)} className="sinestilo">Reservar libro</button>

                    </Col>

                    </Row>
                    </Container>
                    
            </>
        );
    });
    return (
        <>
        <h3 className="sinestilo fondo-seccion">Narrativa anglosajona</h3>
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
    }

export default Anglosajona;