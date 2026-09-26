import { services } from "../../lib/content";
import "./ServicesPreview.css";

function ServicesPreview() {
  const previewServices = services.slice(0, 3);
  return (
    <section className="services-preview">

      <div className="container">

        <div className="services-preview-header">

          <div>
            <p className="services-preview-eyebrow">
              WHAT WE DO
            </p>

            <h2>
              Designed around
              <br />
              <em>the way you live.</em>
            </h2>
          </div>

          <a
            href="/services"
            className="services-preview-link"
          >
            Explore Services →
          </a>

        </div>


        <div className="services-preview-grid">

          {previewServices.map((service, index) => (

            <article
              className="service-preview-card"
              key={service.title}
            >

              <span className="service-preview-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="service-preview-image">

                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                ) : (
                  <div className="service-preview-placeholder">
                    AFILA
                  </div>
                )}

              </div>

              <div className="service-preview-content">

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

                <span className="service-preview-arrow">
                  →
                </span>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;