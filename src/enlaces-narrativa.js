import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Enlacesnarrativa =()=>{
    return(

        <div>
            <DropdownButton id="dropdown-item-button" title="Narrativa" className="sinestilo">
            <Dropdown.Item as="button"><Link to="/Componentes/Castellana">Narrativa en castellano</Link></Dropdown.Item>
            <Dropdown.Item as="button"><Link to="/Componentes/Hispanoamericana">Narrativa hispanoamericana</Link>
</Dropdown.Item>
      
            <Dropdown.Item as="button">  <Link to="/Componentes/Francesa">Narrativa francesa</Link></Dropdown.Item>
       
            <Dropdown.Item as="button"> <Link to="/Componentes/Anglosajona">Narrativa anglosajona</Link></Dropdown.Item>
       
            <Dropdown.Item as="button"> <Link to="/Componentes/Italiana">Narrativa italiana</Link></Dropdown.Item>
        
            <Dropdown.Item as="button"><Link to="/Componentes/Eslava">Narrativa eslava</Link> </Dropdown.Item>
       
            <Dropdown.Item as="button"> <Link to="/Componentes/Reportajes">Narrativa de viajes</Link></Dropdown.Item>
       
            <Dropdown.Item as="button"> <Link to="/Componentes/Poesía">Poesía</Link></Dropdown.Item>

        
       
        
        </DropdownButton>
       
         </div>
    )
}




export default Enlacesnarrativa;