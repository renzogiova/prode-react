import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// styles
import SidebarStyles from './Sidebar.module.css';

function Sidebar(props) {
  const { showSidebar } = props;
  return (
    <div className={`${!showSidebar && SidebarStyles.hiddenSidebar} ${SidebarStyles.sidebar}`}>
      <Navbar className={SidebarStyles.navbar}>
        <Nav.Item>
          <Nav.Link>
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            Calendario
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            Resultados
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            Clasificacion
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            Mis torneos
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  )
}

export default Sidebar