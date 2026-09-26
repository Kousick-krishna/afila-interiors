import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const stats = [
  {
    value: 50, // Replace with actual number
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    value: 8, // Replace with actual number
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    value: 100, // Replace with actual number
    suffix: "+",
    label: "HAPPY CLIENTS",
  },
];

function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime;
    const duration = 1600;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div className="about-stat" ref={statRef}>
      <div className="about-stat-number">
        {count}
        <span>{suffix}</span>
      </div>

      <p>{label}</p>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
            alt="Afila Interiors"
          />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="container">

          <div className="about-hero-content">

            <p className="about-eyebrow">
              ABOUT AFILA
            </p>

            <h1>
              Designing spaces.
              <br />
              <em>Creating experiences.</em>
            </h1>

            <p className="about-hero-description">
              We create interiors that bring together
              thoughtful design, everyday functionality
              and a sense of belonging.
            </p>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="about-stats">

        <div className="container">

          <div className="about-stats-grid">

            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}

          </div>

        </div>

      </section>


      {/* STORY */}

      <section className="about-story">

        <div className="container">

          <div className="about-story-heading">

            <span>01 / OUR STORY</span>

            <h2>
              Spaces should
              <br />
              <em>feel like you.</em>
            </h2>

          </div>

          <div className="about-story-content">

            <p>
              At Afila Interiors, we believe that the best
              interiors are not simply beautiful. They are
              spaces that understand the people who live in
              them.
            </p>

            <p>
              Every project begins by understanding how a
              space should look, feel and function. From the
              overall layout to the smallest detail, we create
              interiors that are personal, practical and
              timeless.
            </p>

          </div>

        </div>

      </section>


      {/* VISUAL BREAK */}

      <section className="about-visual">

        <div className="container">

          <div className="about-visual-grid">

            <div className="about-visual-main">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
                alt="Modern interior"
              />
            </div>

            <div className="about-visual-side">

              <div className="about-visual-small">
                <img
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85"
                  alt="Interior detail"
                />
              </div>

              <div className="about-visual-caption">
                <span>AFILA INTERIORS</span>

                <p>
                  Thoughtful details.
                  <br />
                  Considered spaces.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* APPROACH */}

      <section className="about-approach">

        <div className="container">

          <div className="about-approach-top">

            <div>
              <span>02 / OUR APPROACH</span>

              <h2>
                Designed around
                <br />
                <em>you.</em>
              </h2>
            </div>

            <p>
              Three principles guide every space
              we create.
            </p>

          </div>


          <div className="about-values">

            <article>

              <span>01</span>

              <h3>Thoughtful</h3>

              <p>
                We begin with understanding your lifestyle,
                preferences and the character of your space.
              </p>

            </article>


            <article>

              <span>02</span>

              <h3>Functional</h3>

              <p>
                Every element has a purpose, creating spaces
                that work beautifully in everyday life.
              </p>

            </article>


            <article>

              <span>03</span>

              <h3>Timeless</h3>

              <p>
                We favour considered materials and details
                that continue to feel relevant over time.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <div className="container">

          <p>HAVE A SPACE IN MIND?</p>

          <h2>
            Let's create
            <br />
            <em>something beautiful.</em>
          </h2>

          <Link to="/contact">
            Start Your Project
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;