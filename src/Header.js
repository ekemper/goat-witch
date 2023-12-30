'use client'
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function NavHeader() {

  // const linkItems = [
  //   {
  //     path: 'about',
  //     text: 'About'
  //   },
  //   {
  //     path: 'gallery',
  //     text: 'Gallery'
  //   },
  //   {
  //     path: 'booking',
  //     text: 'Booking'
  //   },
  // ]

  // const [menuOpen, setMenuOpen] = useState(false)
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }

  // const MobileNavLinks = () => {
  //   const commonLinkClasses = 'uppercase'
  //   const mobileLinkClasses = 'w-full mx-auto my-4 py-2 text-xl border-solid border-2 border-black rounded-sm'
  //   const deskTopLinkClasses = 'sm:border-none sm:mx-6 sm:w-auto sm:py-0 sm:px-4 sm:text-lg'

  //   return linkItems.map(item => {
  //     return (
  //       <li key={item.path}>
  //         <button
  //           className={`${commonLinkClasses} ${mobileLinkClasses} ${deskTopLinkClasses}`}
  //           onClick={() => {
  //             if(menuOpen) toggleMenu()
  //             window.location.hash = item.path
  //           }}>
  //           <span>{item.text}</span>
  //         </button>
  //       </li>
  //     )
  //   })
  // }

//   const handleClose = () => setMenuOpen(false)


//   return (
//     <Navbar expand={false} variant='dark' className='h-14' fixed='top'>
//       <Container fluid>
//         <Navbar.Toggle 
//           // className="justify-content-end bg-[url('../public/assets/Millennium_Falcon_transparent.png')]" 
//           aria-controls={'offcanvasNavbar-expand'} 
//           onClick={toggleMenu}/>
//         <Navbar.Offcanvas
//           restoreFocus={false}
//           show={menuOpen}
//           onHide={handleClose}
//           aria-labelledby={'offcanvasNavbarLabel-expand'}
//           placement="end"
//         >
//           <Offcanvas.Header 
//             className='text-white bg-grayGreenBackground' 
//             closeButton>
//             <Offcanvas.Title></Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body className='h-auto text-white bg-grayGreenBackground'>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <MobileNavLinks className='block sm:hidden'/>
//               <img
//                 className="h-12 hidden sm:block my-auto"
//                 src={'/assets/Millennium_Falcon_transparent.png'}
//                 alt='Millennium_Falcon' />
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

const Header = () => {
  return (
    <header>
      hella cool header
    </header >
  )
}

export default Header