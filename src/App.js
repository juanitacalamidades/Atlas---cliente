import './App.css';
import {useState, useEffect} from 'react';
import Cabecera from './Componentes/Cabecera';
import Registro from './Componentes/Registro';
import {BrowserRouter, Route, Link} from 'react-router-dom';
//import Comprarlibro from './Componentes/Comprarlibro';
import Narrativa from './Componentes/Todonarrativa';
import Castellana from './Componentes/Castellana';
import Francesa from './Componentes/Francesa';
import Anglosajona from './Componentes/Anglosajona';
import Hispanoamericana from './Componentes/Hispanoamericana';
import Italiana from './Componentes/Italiana';
import Eslava from './Componentes/Eslava';
import Reportajes from './Componentes/Reportajes';
import Filosofia from './Componentes/Filosofia';
import Feminismo from './Componentes/Feminismo';
import Comic from './Componentes/Comic';
import Poesia from './Componentes/Poesia';
import Historia from './Componentes/Historia';
import Economia from './Componentes/Economia';
import Sociologia from './Componentes/Sociologia';
import Antropologia from './Componentes/Antropologia';
import Viaja from './Componentes/Viaja';
import Mostrarlibros from './Componentes/Todosloslibros';
import Footer from './Componentes/Footer';
import Contacto from './Componentes/Contacto';
import Recomendados from './Componentes/Recomendados';
import Enlacesnarrativa from './enlaces-narrativa';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function App() {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const registro = (name, email, password) =>{
        fetch('/api/register', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({name: name, email: email, password:password})
        })
        .then(response => response.json()
        .then(response => {console.log(response)}))
  }; 
  
  
  const login=(email, password)=> {
        fetch('/api/login', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({email: email, password:password})
        })
        .then(response=>response.json())
        .then(response=>{console.log(response)})
   };

   const reservar = (id) => {  
    const objeto = {id: id}
   fetch("/reserva/" + id, {
     method: "PUT",
     header: {
       "Content-Type": "application/json"
},
 body: JSON.stringify({id:id})
})
.then(res => res.json())
.then(res =>console.log(res))




  const nuevoArray = data.map(libro => {
    if(libro._id === id){
     return {
       _id: libro._id,
       titulo: libro.titulo,
       autor: libro.autor,
       editorial: libro.editorial,
       ean: libro.ean,
       contra: libro.contra,
       materia: libro.materia,
       img: libro.img,
       precio: libro.precio,
       recomendado: libro.recomendado,
       stock: libro.stock - 1
     }
    }else{
      return {libro};
      
    }
  })
   setData(nuevoArray);
handleShow();
};

const modal =()=>{
return (
  <>
      <Button variant="primary" onClick={handleShow}>
        Hecho...
      </Button>

      
    </>
)};


  return (

<>
<BrowserRouter>


  <Cabecera login={login}/>
  
  <Container>
  <Row>


<div className="nav-menu">
<Enlacesnarrativa />
<Link to="/Componentes/Filosofia"  className="sinestilo margin-secciones " >Filosofía</Link>
<Link to="/Componentes/Historia" className="sinestilo margin-secciones ">Historia</Link>
<Link to="/Componentes/Antropologia" className="sinestilo margin-secciones ">Antropología</Link>
<Link to="/Componentes/Sociologia" className="sinestilo margin-secciones ">Sociología</Link>
<Link to="/Componentes/Economia" className="sinestilo margin-secciones ">Economía</Link>
<Link to="/Componentes/Feminismo" className="sinestilo margin-secciones ">Feminismo</Link>
<Link to="/Componentes/Comic" className="sinestilo margin-secciones ">Novela gráfica</Link>
<Link to="/Componentes/Todosloslibros" className="sinestilo margin-secciones">Catálogo</Link>
<Link to="/Componentes/Registro" className="sinestilo margin-secciones " >Regístrate</Link>
</div>
</Row>



<Route exact path="/Componentes/Contacto">
<Contacto />
</Route>
<Route exact path="/Componentes/Anglosajona">
  <Anglosajona reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Castellana">
  <Castellana reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Hispanoamericana">
  <Hispanoamericana reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Italiana">
  <Italiana reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Poesia">
  <Poesia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Eslava">
  <Eslava reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Francesa">
  <Francesa reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Registro">
  <Registro registro={registro} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Filosofia">
  <Filosofia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Historia">
  <Historia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Antropologia">
  <Antropologia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Sociologia">
  <Sociologia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Economia">
  <Economia reservar={reservar} handleClose={handleClose} show={show}/>
</Route>
<Route exact path="/Componentes/Feminismo">
  <Feminismo reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Comic">
  <Comic reservar={reservar} handleClose={handleClose} show={show}/>
</Route>

<Route exact path="/Componentes/Recomendados">
  <Recomendados reservar={reservar}handleClose={handleClose} show={show}/>
</Route>


</Container>
<Footer />
</BrowserRouter>



</>
  
  

  )}

export default App;
