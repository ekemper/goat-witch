'use client'

import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <header>


            <Nav className="justify-content-center fixed bg-black/[.4] hover:bg-black/[.6] w-full z-10" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        link
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-brand">Hidden brand</div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">Home</div>
              </li>
              <li className="nav-item">
                <div className="nav-link">Link</div>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled" aria-disabled="true">Disabled</div>
              </li>
            </ul>
            
          </div>
        </div>
      </nav> */}

        </header >
    )

}

export default Header