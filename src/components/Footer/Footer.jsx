import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <h2>AFILA</h2>
            <p>INTERIORS</p>

            <span>
              SPACES FOR A BETTER YOU
            </span>
          </div>


          <div className="footer-links">

            <div>
              <span className="footer-label">EXPLORE</span>

              <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/projects">Projects</Link>
<Link to="/gallery">Gallery</Link>
            </div>

            <div>
              <span className="footer-label">CONNECT</span>

              <Link to="/contact">Contact</Link>
<Link to="/contact">Enquire Now</Link>
            </div>

          </div>


          <div className="footer-contact">

            <span className="footer-label">
              START A CONVERSATION
            </span>

            <a href="mailto:hello@afilainteriors.com">
              hello@afilainteriors.com
            </a>

            <a href="tel:+919003835891">
              +91 90038 35891
            </a>

            <span className="footer-location">
              Chennai, Tamil Nadu
            </span>

          </div>


          {/* MAP */}

          {/* MAP */}

<div className="footer-map">

  <span className="footer-label">
    VISIT OUR STUDIO
  </span>

  <a
    href="https://maps.app.goo.gl/GZT1kReBvRdXos8HA?g_st=aw"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-map-frame"
    aria-label="Open Afila Interiors location in Google Maps"
  >

    <iframe
      title="Afila Interiors Location"
      src="https://www.google.com/maps?q=12.8822489,80.1923523&z=16&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <div className="footer-map-overlay">
      <span>OPEN IN GOOGLE MAPS →</span>
    </div>

  </a>

</div>

        </div>


        <div className="footer-bottom">

  <span>
    © {new Date().getFullYear()} Afila Interiors. All Rights Reserved.
  </span>

  <span>
    Chennai, Tamil Nadu
  </span>

</div>

      </div>

    </footer>
  );
}

export default Footer;