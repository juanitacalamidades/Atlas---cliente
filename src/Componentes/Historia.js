import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Historia = (props) => {

    const [data, setData] = useState([]);
   
    useEffect(()=>{
        fetch("/historia")
        .then(response => response.json())
        .then(function(data){
        setData(data)
    })
    }, []);
    const Historia = data.map(libro =>{
        return (
            <>

            <Container>
                    <Row className="justify-content-md-center">
                    <Col xs lg="2"><div><img src={libro.img} alt="" className="img-secciones"/></div></Col>
                    <Col md="30"></Col>
                    <Col xs lg="30">
                    <div className="sinestilo" sm>{libro.titulo}</div>
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
        );
    });
    return (
        <>
        <h3 className="sinestilo fondo-seccion">Historia</h3>       
        <div>{Historia}</div>
      </>
      )

};

export default Historia;