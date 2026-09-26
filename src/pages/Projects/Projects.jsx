import { useMemo, useState } from "react";
import { projects } from "../../lib/content";
import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        projects
          .map((project) => project.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="projects-page">

      {/* Page Header */}
      <section className="projects-hero">
        <div className="container">

          <p className="projects-eyebrow">
            OUR PORTFOLIO
          </p>

          <div className="projects-hero-content">
            <h1>
              Spaces
              <br />
              <em>We've Created.</em>
            </h1>

            <p>
              A collection of thoughtfully designed interiors,
              created around the people who live in them.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="projects-list-section">
        <div className="container">

          {/* Filters */}
          <div className="projects-filter">

            <span className="projects-filter-label">
              EXPLORE BY
            </span>

            <div className="projects-filter-buttons">
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

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">

              {filteredProjects.map((project, index) => (
                <article
                  className="projects-item"
                  key={project.slug}
                >

                  <a
                    href={`/projects/${project.slug}`}
                    className="projects-image"
                  >

                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                      />
                    ) : (
                      <div className="projects-placeholder">
                        <span>Project Image</span>
                      </div>
                    )}

                    <span className="projects-view">
                      View Project →
                    </span>

                  </a>

                  <div className="projects-item-info">

                    <div>
                      <span className="projects-item-category">
                        {project.category}
                      </span>

                      <h2>{project.title}</h2>
                    </div>

                    <span className="projects-item-location">
                      {project.location}
                    </span>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="projects-empty">
              <p>No projects available in this category.</p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Projects;