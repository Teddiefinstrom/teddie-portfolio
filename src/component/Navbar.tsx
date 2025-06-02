
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router';


function Navbar() {
  return (

    <div className="nav-container">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link as={NavLink} to= "/projects">Projects</Nav.Link>
      <Nav.Link as={NavLink} to= "/contact">Contact</Nav.Link>
    </Nav>
    </div>
  );
}

export default Navbar;