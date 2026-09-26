import { services } from "../../lib/content";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">

      {/* PAGE INTRO */}

      <section className="services-hero">
        <div className="container">

          <p className="services-eyebrow">
            WHAT WE DO
          </p>

          <div className="services-hero-content">

            <h1>
              From concept
              <br />
              to <em>completion.</em>
            </h1>

            <p>
              Thoughtfully planned interior solutions that
              bring together aesthetics, functionality and
              the way you live.
            </p>

          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="services-list">
        <div className="container">

          {services.length > 0 ? (
            <div className="services-list-grid">

              {services.map((service, index) => (
                <article
                  className="service-detail-card"
                  key={service.title}
                >

                  <div className="service-detail-image">

                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                      />
                    ) : (
                      <div className="service-detail-placeholder">
                        <span>Afila Interiors</span>
                      </div>
                    )}

                    <span className="service-detail-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <div className="service-detail-content">

                    <h2>{service.title}</h2>

                    <p>
                      {service.description}
                    </p>

                    <a href="/contact">
                      Discuss Your Project
                      <span>→</span>
                    </a>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="services-empty">
              No services available yet.
            </div>
          )}

        </div>
      </section>


      {/* CTA */}

      <section className="services-cta">
        <div className="container">

          <div className="services-cta-inner">

            <p>
              HAVE A PROJECT IN MIND?
            </p>

            <h2>
              Let's design a space
              <br />
              <em>you'll love living in.</em>
            </h2>

            <a href="/contact">
              Start Your Project
              <span>→</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Services;