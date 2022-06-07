
import "./nav.css"
import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <>
        <Navbar collapseOnSelect sticky="top" id="nav">
          <Container>
          <Navbar.Brand href="#" id="brand">GARNT CO.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav id="links">
                <Nav.Link href="#products">
                  PRODCUTS
                </Nav.Link>
                <Nav.Link href="#people">
                  PEOPLE
                </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Navigation