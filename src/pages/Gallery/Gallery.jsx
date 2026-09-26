import { useMemo, useState } from "react";
import { gallery } from "../../lib/content";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        gallery
          .map((item) => item.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">
        <div className="container">

          <p className="gallery-eyebrow">
            OUR WORK
          </p>

          <div className="gallery-hero-content">

            <h1>
              A glimpse into
              <br />
              <em>our world.</em>
            </h1>

            <p>
              A collection of spaces, details and ideas
              that reflect the Afila approach to design.
            </p>

          </div>

        </div>
      </section>


      {/* GALLERY */}

      <section className="gallery-list">
        <div className="container">

          {/* FILTER */}

          <div className="gallery-filter">

            <span className="gallery-filter-label">
              EXPLORE BY
            </span>

            <div className="gallery-filter-buttons">

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>


          {/* GRID */}

          {filteredGallery.length > 0 ? (
            <div className="gallery-grid">

              {filteredGallery.map((item, index) => (
                <article
                  className={`gallery-item gallery-item-${index % 6}`}
                  key={item.slug}
                >

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={
                        item.title ||
                        "Afila Interiors"
                      }
                    />
                  ) : (
                    <div className="gallery-placeholder">
                      AFILA
                    </div>
                  )}

                  <div className="gallery-item-overlay">

                    {item.title && (
                      <h2>{item.title}</h2>
                    )}

                    {item.category && (
                      <span>{item.category}</span>
                    )}

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="gallery-empty">
              No gallery images available.
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Gallery;