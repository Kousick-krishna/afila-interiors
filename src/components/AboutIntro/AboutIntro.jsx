import "./AboutIntro.css";

function AboutIntro() {
  return (
    <section className="about-intro">

      <div className="container">

        <div className="about-intro-top">

          <p className="about-intro-label">
            ABOUT AFILA
          </p>

          <span className="about-intro-count">
            01 / 03
          </span>

        </div>

        <div className="about-intro-content">

          <div className="about-intro-statement">

            <p className="about-intro-small">
              OUR APPROACH
            </p>

            <h2>
              Designing spaces
              <br />
              that feel like
              <br />
              <em>they belong to you.</em>
            </h2>

          </div>


          <div className="about-intro-story">

            <h3>
              Every space has
              <br />
              a story to tell.
            </h3>

            <p>
              We believe great interiors are more than
              beautiful rooms. They are thoughtful
              reflections of the people who live in them.
            </p>

            <p>
              From the first idea to the final detail,
              we create spaces that balance aesthetics,
              functionality and the way you truly live.
            </p>

            <div className="about-intro-values">

              <span>
                <strong>01</strong>
                Thoughtful
              </span>

              <span>
                <strong>02</strong>
                Functional
              </span>

              <span>
                <strong>03</strong>
                Timeless
              </span>

            </div>

            <a
              href="/about"
              className="about-intro-link"
            >
              Discover Our Approach
              <span>→</span>
            </a>

          </div>

        </div>

        <div className="about-intro-bottom">

          <span>
            SPACES FOR A BETTER YOU
          </span>

          <span className="about-intro-line"></span>

        </div>

      </div>

    </section>
  );
}

export default AboutIntro;