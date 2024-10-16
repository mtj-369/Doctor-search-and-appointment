import React from 'react'

const Header = () => {
  return (
    <>
          <header className="top-header">
                    <nav className="navbar header-nav navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                        <ul className="navbar-nav">
                            <li><a className="nav-link" href="#home">Home</a></li>
                            <li><a className="nav-link" href="#about">About Us</a></li>
                            <li><a className="nav-link" href="#services">Services</a></li>
                            <li><a className="nav-link" href="#appointment">Appointment</a></li>
                            <li><a className="nav-link" href="#gallery">Gallery</a></li>
                            <li><a className="nav-link" href="#team">Doctor</a></li>
                            <li><a className="nav-link" href="#blog">Blog</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                 </header>
    </>
  )
}

export default Header
