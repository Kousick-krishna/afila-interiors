import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Luxury interior designed by Afila Interiors"
          className="hero-image"
        />
      </div>

      {/* Dark / warm overlay */}
      <div className="hero-overlay"></div>

      {/* Decorative vertical label */}
      <div className="hero-side-label">
        <span>AFILA INTERIORS</span>
      </div>

      {/* Main content */}
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-eyebrow">
            INTERIOR DESIGN STUDIO
          </p>

          <h1>
            Spaces
            <br />
            Designed
            <br />
            <em>Around You.</em>
          </h1>

          <p className="hero-description">
            Thoughtfully designed interiors crafted around
            the way you live, work and experience your space.
          </p>

          <div className="hero-actions">

            <a href="/projects" className="hero-primary-btn">
              <span>Explore Projects</span>
              <span className="hero-arrow">↗</span>
            </a>

            <a href="/contact" className="hero-secondary-btn">
              Start Your Project
            </a>

          </div>

        </div>

      </div>

      {/* Bottom information */}
      <div className="hero-bottom">

        <div className="hero-project-info">
          <span className="hero-project-number">01</span>

          <div>
            <span className="hero-project-line"></span>
            <span>Modern Living Space</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
        </div>

        <div className="hero-location">
          CHENNAI · INDIA
        </div>

      </div>

    </section>
  );
}

export default Hero;