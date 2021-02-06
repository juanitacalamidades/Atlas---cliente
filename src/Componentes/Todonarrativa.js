import {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Narrativa =()=>{
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/narrativa')
        .then(response => response.json())
        .then(function(data){
          setData(data)
    
        })
    }, [])
   
    const librosNarrativa = data.map(libro => {
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
                <div className ="presenta-libros"> 
                    <div className="libros-envueltos"><Accordion>{librosNarrativa}</Accordion>
                    </div>
                </div> 

       
      </>
      )
};


export default Narrativa;