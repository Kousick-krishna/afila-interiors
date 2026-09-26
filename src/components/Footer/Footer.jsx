import "./Footer.css";

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

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/gallery">Gallery</a>
            </div>

            <div>
              <span className="footer-label">CONNECT</span>

              <a href="/contact">Contact</a>
              <a href="/contact">Enquire Now</a>
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

          <div className="footer-map">

            <span className="footer-label">
              VISIT OUR STUDIO
            </span>

            <div className="footer-map-frame">

              <iframe
                title="Afila Interiors Location"
                src="https://www.google.com/maps/embed?pb="
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="footer-map-placeholder">
                <span>Google Maps</span>
                <small>Location will be added here</small>
              </div>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Afila Interiors
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