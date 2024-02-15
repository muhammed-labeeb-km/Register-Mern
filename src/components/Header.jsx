import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='w-100 fixed-top'>
    <Navbar bg="dark" className='w-100' data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Education</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">Services</Nav.Link>
        <Nav.Link href="">About us</Nav.Link>
        <Nav.Link href="">Login </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <br />
  


  </div>
  )
}

export default Header
Header