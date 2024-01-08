'use client'
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

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

  const [menuOpen, setMenuOpen] = useState(true)
  const toggleMenu = () => {
    console.log('called toggle')
    setMenuOpen(!menuOpen)
  }

  const menuClasses = `
    absolute
    bg-grayGreenBackground 
    w-xl 
    z-10 
    flex flex-col 
    w-screen md:w-1/2 xl:w-1/4 
    border-solid border-2 border-black 
    rounded`

  return (
    <header>

      <button className='absolute z-10 h-16 w-16' onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#ffffff",}}/>
        </button>

      {menuOpen && <div className={menuClasses} >
        <div className='flex justify-between'>
          <h1 className='mx-6 mt-6 py-2 text-xl' style={{"color":"white"}}>
            MENU
          </h1>
          <button className='' onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" style={{color: "#ffffff",}} className='mt-6 mx-6'/>
          </button>
        </div>
        {
          linkItems.map(item => {
            return (
              <button
                key={item.path}
                className={`w-auto max-w-1/2 m-6 py-2 text-xl border-solid border-2 border-black rounded`}
                style={{"color":"white"}}
                onClick={() => {
                  if (menuOpen) toggleMenu()
                  window.location.hash = item.path
                }}>
                <span>{item.text}</span>
              </button>
            )
          })
        }

      </div>}
    </header >
  )
}

export default Header