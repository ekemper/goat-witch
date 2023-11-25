'use client'
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavHeader() {

  const linkItems = [
    {
      path: 'about',
      text: 'About'
    },
    {
      path: 'gallery',
      text: 'Gallery'
    },
    {
      path: 'booking',
      text: 'Booking'
    },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const NavLinks = () => {

    return linkItems.map(item => {
      return (
        <li key={item.path}>
          <button
            className='w-full mx-auto my-4 py-2 text-xl border-solid border-2 border-black rounded-sm'
            onClick={() => {
              toggleMenu()
              window.location.hash = item.path
            }}>
            <span>{item.text}</span>
          </button>
        </li>
      )
    })
  }

  const handleClose = () => setMenuOpen(false)
  return (
    <Navbar expand='sm' variant='dark'>
      <Container fluid>
        <Navbar.Toggle className='color-green-900' aria-controls={'offcanvasNavbar-expand'} onClick={toggleMenu}/>
        <Navbar.Offcanvas
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
          aria-labelledby={'offcanvasNavbarLabel-expand'}
          placement="end"
        >
          <Offcanvas.Header className='text-white bg-grayGreenBackground' closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='h-auto text-white bg-grayGreenBackground'>
            <Nav className="justify-content-end flex-grow-1 pe-3">

              <NavLinks />

              <img
                className="h-12 hidden lg:block"
                src={'/Millennium_Falcon_transparent.png'}
                alt='Millennium_Falcon' />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
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