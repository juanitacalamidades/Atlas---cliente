import logo2 from './Graphics/logo2.png';
import twitter from './Graphics/twitter.png';
import insta from './Graphics/insta.png';
import facebook from './Graphics/facebook.png';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer =()=>{
    return(
<>
<Container>
    <div className="footer">
<Row>
    <Col>
<div>
<img src={logo2} alt="" width="150" height="75" />
<p className="sinestilo">Nuestras redes</p>
<img src={twitter} alt="" width="30" height="20" />
<img src={insta} alt="" width="30" height="20" />
<img src={facebook} alt="" width="30" height="20" />    
</div>
</Col>
<Col md="300"></Col>

<Col>
<div>
<p className="sinestilo">Aviso Legal</p>
<Link to="./Contacto" className="sinestilo">Contacto</Link>
<p className="sinestilo">Política de privacidad</p>
<p className="sinestilo">Creditos</p>
</div>
</Col>
</Row>
</div>
</Container>
</>
    )
};

export default Footer;