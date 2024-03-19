import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

class Navigationbar extends Component { 
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href={`/${this.props.usernm}`}>CAP - Preference Discovery</Navbar.Brand>
        <Nav className="mr-auto">
            {/*<Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
        </Nav>
    </Navbar>
  );
  }
}
 
export default Navigationbar;
