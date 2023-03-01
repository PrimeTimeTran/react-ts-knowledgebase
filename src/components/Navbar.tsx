import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Modal from '../components/Modal'

import { useAuth } from '../hooks'


function BasicExample() {
  const { isAuthenticated, setToken, removeToken } = useAuth();

  const SignOut = () => {
    removeToken()
    window.location.reload();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rocket Startup Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/why-us">Why Us?</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={SignOut}>
            {!isAuthenticated ? "Register/SignIn" : 'Sign out'}
          </Navbar.Text>
        </Navbar.Collapse>      </Container>
      <Modal />
    </Navbar>
  );
}

export default BasicExample;