import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    return (
        <>
        <Container>
        <Row>
        <Col><input type="text" placeholder="email"  value={email} onChange={handleEmail}/></Col>
        <Col><input type="password" placeholder="contraseña"  value={password} onChange={handlePassword}/></Col>
        <Col><button onClick={()=>props.login(email, password)} className="sinestilo">Iniciar sesión</button></Col>
        
        </Row>
        </Container>
        </>
    )
}
export default Login;