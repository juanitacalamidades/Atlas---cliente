import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Castellana = (props) => {
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetch("/castellana")
        .then(res=>res.json())
        .then(function(info){
            setInfo(info);
        })
    }, [])

    const librosCastellana = info.map(libro => {
        return (
            <>
            <Container>
                    <Row className="justify-content-md-center">
                    <Col xs lg="2"><div><img src={libro.img} alt=""/></div></Col>
                    <Col md="30"></Col>
                    <Col xs lg="30">
                    <div className="sinestilo elementos-libro" sm>{libro.titulo}</div>
                    <div className="sinestilo"> {libro.autor}</div>
                    <div className="estilo-texto">{libro.contra}</div>
                    </Col>
                    <Col md="30"></Col>
                    <Col lg="20">
                    <div className="estilo-texto">Editorial: {libro.editorial}</div>
                    <div className="estilo-texto">Materia: {libro.materia}</div>
                    <div className="estilo-texto">EAN: {libro.ean}</div>
                    <button onClick={() => props.reservar(libro._id)} className="sinestilo">Reservar libro</button>
                    </Col>

                    </Row>
                    </Container>
            </>
        )})
    return (
        <>
        <h3 className="sinestilo">Narrativa en castellano</h3>
        <div>{librosCastellana}</div>
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


export default Castellana;