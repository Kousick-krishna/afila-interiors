import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

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
            Around You.
          </h1>

          <p className="hero-description">
            Thoughtfully designed interiors crafted around
            the way you live, work and experience your space.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="hero-primary-btn">
              Explore Projects
              <span>→</span>
            </a>

            <a href="/contact" className="hero-secondary-btn">
              Start Your Project
            </a>
          </div>

        </div>

        <div className="hero-image-wrapper">

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Luxury interior designed by Afila Interiors"
            className="hero-image"
          />

          <div className="hero-image-caption">
            <span>01</span>
            <span>Modern Living Space</span>
          </div>

        </div>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>

    </section>
  );
}

export default Hero;