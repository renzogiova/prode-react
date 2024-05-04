import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Sidebar() {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link>
              HOME
            </Nav.Link>
            <Nav.Link>
              Calendario
            </Nav.Link>
            <Nav.Link>
              Resultados
            </Nav.Link>
            <Nav.Link>
              Clasificacion
            </Nav.Link>
            <Nav.Link>
              Mis torneos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Sidebar