import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/services">Services</Link>
<Link to="/projects">Projects</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/contact">Contact</Link>
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
          <Link to="/" onClick={closeMenu}>Home</Link>
<Link to="/about" onClick={closeMenu}>About</Link>
<Link to="/services" onClick={closeMenu}>Services</Link>
<Link to="/projects" onClick={closeMenu}>Projects</Link>
<Link to="/gallery" onClick={closeMenu}>Gallery</Link>
<Link to="/contact" onClick={closeMenu}>Contact</Link>
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