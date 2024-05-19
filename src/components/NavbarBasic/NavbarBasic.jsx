import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";


function NavbarBasic(props) {
  const { toggleSidebar } = props;
  const handleMenu = () => {
    toggleSidebar();
  }
  return (
    <Navbar 
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
      >
      {/* <Container> */}
        <div>
          <Button variant="secondary" onClick={handleMenu}>
            <AiOutlineMenu />
          </Button>
        </div>  
        <div>
          <h1 style={{margin:0}}> EL PRODE </h1>
        </div>
        <div>
          <Button variant="secondary">
            <FaUserCircle />
          </Button>
        </div>
      {/* </Container> */}
    </Navbar>
  )
}

export default NavbarBasic