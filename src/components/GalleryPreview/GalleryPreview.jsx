import { gallery } from "../../lib/content";
import "./GalleryPreview.css";

function GalleryPreview() {
  const galleryItems = gallery.slice(0, 3);

  return (
    <section className="gallery-preview">

      <div className="container">

        <div className="gallery-preview-header">

          <div>
            <p className="gallery-preview-eyebrow">
              OUR WORK
            </p>

            <h2>
              A glimpse into
              <br />
              <em>our world.</em>
            </h2>
          </div>

          <a
            href="/gallery"
            className="gallery-preview-link"
          >
            Explore Gallery →
          </a>

        </div>


        {galleryItems.length > 0 && (

          <div className="gallery-preview-grid">

            {galleryItems.map((item, index) => (

              <div
                className={`gallery-preview-item gallery-item-${index + 1}`}
                key={item.slug}
              >

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title || "Afila Interiors"}
                  />
                ) : (
                  <div className="gallery-preview-placeholder">
                    AFILA
                  </div>
                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default GalleryPreview;