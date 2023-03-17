// import CartWidget from "../CartWidget/CartWidget"
// import { ComponenteContainer } from "../ComponenteContainer/ComponenteContainer"
// import Titulo from "../Titulo/Titulo"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Buscador from '../Buscador/Buscador';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img src="/images.jpg" className="imgLogo" alt="Padel Shop" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Paletas</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <NavDropdown title="Indumentaria" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Marcas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }

  export default NavBar