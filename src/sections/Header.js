'use client'
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const menuPrimaryColor = `#b9e57d`
  const menuSecondaryColor = `#291c45`

  const linkItems = [
    {
      path: 'about',
      text: 'About'
    },
    {
      path: 'flash',
      text: 'Flash'
    },
    {
      path: 'portfolio',
      text: 'Portfolio'
    },
    {
      path: 'process',
      text: 'Process'
    },
    {
      path: 'aftercare',
      text: 'Aftercare'
    },
    {
      path: 'booking',
      text: 'Booking'
    },
    {
      path: 'faq',
      text: 'FAQ'
    },
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  const borderClasses = `border-solid border-2 border-black rounded`

  const menuClasses = `
    absolute
    top-0
    overflow-scroll
    bg-grayGreenBackground 
    w-xl 
    z-10 
    flex flex-col 
    w-screen md:w-1/2 xl:w-1/4 
    ${borderClasses}`

  return (
    <header className='fixed z-50'>

      <img
        src={'/assets/resized/headerTopEdge.png'}
        className="z-9 lg:max-w-screen-2xl"
        alt="top border" />

      <button className='z-10 h-16 w-16 absolute lg:top-0' onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#ffffff", }} />
      </button>

      {menuOpen && <div className={menuClasses} >
        <div className='flex justify-between'>
          <h1 className='mx-6 mt-6 py-2 text-xl' style={{ "color": menuPrimaryColor }}>
            MENU
          </h1>
          <button className='' onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faCircleXmark} size="2xl" style={{ color: menuPrimaryColor, }} className='mt-6 mx-6' />
          </button>
        </div>
        {
          linkItems.map(item => {
            return (
              <button
                key={item.path}
                className={`w-auto max-w-1/2 mx-6 my-2 py-2 text-xl ${borderClasses}`}
                style={{ "color": menuPrimaryColor, "border-color": menuSecondaryColor }}
                onClick={() => {
                  if (menuOpen) setMenuOpen(false)
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