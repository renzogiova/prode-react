import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from "react-icons/fa";

function ProfileMenu() {
  return (
    <Dropdown variant="success" id="dropdown-basic">
      <Dropdown.Toggle>
        <FaUserCircle />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProfileMenu