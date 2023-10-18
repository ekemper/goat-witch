'use client'

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const expand = 'sm'

function NavHeader() {
  return (
    <>
      <Navbar fixed="top" key={expand} expand={expand} className="fixed bg-black/[.1] ">
        <Container fluid>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} />
          <Navbar.Offcanvas
            aria-labelledby={'offcanvasNavbarLabel-expand'}
            placement="end"
          >
            <Offcanvas.Header closeButton className='bg-slate-500/[.5]'>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='h-auto bg-slate-500/[.5]'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Booking</Nav.Link>
                <Nav.Link href="#action2">Portfolio</Nav.Link>
                <Nav.Link href="#action2">Flash</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

const Header = () => {
  return (
    <header>
      <NavHeader />
    </header >
  )
}

export default Header