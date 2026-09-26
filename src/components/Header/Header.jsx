import { useState } from "react";
import logo from "../../assets/images/afila-logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">

          <a href="/" className="brand" onClick={closeMenu}>
            <img
              src={logo}
              alt="Afila Interiors"
              className="brand-logo"
            />

            <div className="brand-text">
              <span>AFILA INTERIORS</span>
              <small>SPACES FOR A BETTER YOU</small>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/contact" className="header-button">
            Enquire Now
          </a>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <nav className="mobile-nav">
          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/about" onClick={closeMenu}>
            About
          </a>

          <a href="/services" onClick={closeMenu}>
            Services
          </a>

          <a href="/projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="/gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="mobile-enquire"
          onClick={closeMenu}
        >
          Start Your Project →
        </a>

        <p className="mobile-menu-tagline">
          SPACES FOR A BETTER YOU
        </p>

      </div>
    </>
  );
}

export default Header;