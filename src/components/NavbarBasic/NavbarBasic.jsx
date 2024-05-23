import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";


function NavbarBasic(props) {
  const { toggleSidebar } = props;
  const handleMenu = () => {
    toggleSidebar();
  }
  return (
    <Navbar 
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        border: '1px solid red'
      }}
      >
        <div>
          <Button variant="secondary" onClick={handleMenu} style={{display:'none'}}>
            <AiOutlineMenu />
          </Button>
        </div>  
        <div style={{display: 'flex'}}>
          <div>
            <Button variant='Secondary'>
              <BsBell/> 
              {/* <Badge bg="secondary">9</Badge>               */}
            </Button>
          </div>
          <div>
            <span>
              Jovani vazquez
            </span>
            <Button variant="secondary" style={{background: 'transparent', padding: 0, border:'none'}}>
              {/* <FaUserCircle /> */}
              <Image width={50} height={50} src='src\assets\profile-example.jpeg' rounded/>
            </Button>
          </div>
        </div>
      {/* </Container> */}
    </Navbar>
  )
}

export default NavbarBasic