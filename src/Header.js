'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ScrollspyNav from "react-scrollspy-nav";

function NavHeader() {

  return (
    <>
      <Navbar expand='sm' variant='dark' >
        <Container fluid>
          <Navbar.Toggle className='color-green-900' aria-controls={'offcanvasNavbar-expand'} />
          <Navbar.Offcanvas
            aria-labelledby={'offcanvasNavbarLabel-expand'}
            placement="end"
          >
            <Offcanvas.Header closeButton className=''>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='h-auto'>
              <Nav className="justify-content-end flex-grow-1 pe-3">

                <ScrollspyNav scrollTargetIds={["about", "gallery", "booking"]} activeNavClass="is-active">
                  <li><a href="#about"><span>About</span></a></li>
                  <li><a href="#gallery"><span>Gallery</span></a></li>
                  <li><a href="#booking"><span>Booking</span></a></li>
                </ScrollspyNav>

                <img
                  className="h-12"
                  src={'/Millennium_Falcon_transparent.png'}
                  alt='Millennium_Falcon' />
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