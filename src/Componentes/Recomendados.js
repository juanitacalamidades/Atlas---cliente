import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Recomendados =(props)=>{
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/libros')
        .then(response => response.json())
        .then(function(data){
          setData(data)
    
        })
    }, [])
    

    const libros = data.map(libro => {
        if(libro.recomendado){
    
            return (
           
           <Carousel.Item interval={1000}>
             
          <img className="d-block w-100" src={libro.img} alt="First slide" />
          <Carousel.Caption>
          <button onClick={() => props.reservar(libro._id)}>Reservar libro</button>
          </Carousel.Caption>
                </Carousel.Item>

            )
        }
        
       
        
    })
    

    return (
       
        <>
      <div className="container-grande-recomendados">
      <div>
        <h1 className="cabeza-recomendados sinestilo">Recomendados</h1>
       <div className="carrusel">
        <Carousel>{libros}</Carousel>
        </div>
      </div>
      </div>
    </>

      
      )
};


export default Recomendados;