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
      <Navbar expand={expand} className="" >
        <Container fluid>
          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} />
          <Navbar.Offcanvas
            aria-labelledby={'offcanvasNavbarLabel-expand'}
            placement="end"
          >
            <Offcanvas.Header closeButton className=''>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='h-auto'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='text-white my-auto' href="#action1">Booking</Nav.Link>
                <Nav.Link className='text-white my-auto' href="#action2">Portfolio</Nav.Link>
                <Nav.Link className='text-white my-auto' href="#action2">Flash</Nav.Link>
                <Nav.Link className='text-white my-auto' href="#action2">About</Nav.Link>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="h-12" 
                  src={'/Millennium_Falcon_transparent.png'} 
                  alt='Millennium_Falcon'/>
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