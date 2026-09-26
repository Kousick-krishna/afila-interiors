import { useParams, Link } from "react-router-dom";
import { projects } from "../../lib/content";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="container">
          <p>PROJECT NOT FOUND</p>

          <h1>
            This project
            <br />
            doesn't exist.
          </h1>

          <Link to="/projects">
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-details">

      {/* HERO */}

      <section className="project-details-hero">
        <div className="container">

          <div className="project-details-breadcrumb">
            <Link to="/projects">
              Projects
            </Link>

            <span>/</span>

            <span>{project.title}</span>
          </div>

          <div className="project-details-heading">

            <div>
              <p className="project-details-category">
                {project.category}
              </p>

              <h1>{project.title}</h1>
            </div>

            <div className="project-details-location">
              <span>LOCATION</span>
              <strong>{project.location}</strong>
            </div>

          </div>

        </div>
      </section>


      {/* COVER IMAGE */}

      <section className="project-details-cover">
        <div className="container">

          <div className="project-details-cover-image">

            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.title}
              />
            ) : (
              <div className="project-details-placeholder">
                Project Image
              </div>
            )}

          </div>

        </div>
      </section>


      {/* DESCRIPTION */}

      <section className="project-details-intro">
        <div className="container">

          <div className="project-details-intro-label">
            <span>ABOUT THE PROJECT</span>
          </div>

          <div className="project-details-intro-content">

            <h2>
              Designed around
              <br />
              the way you live.
            </h2>

            <p>
              {project.description}
            </p>

          </div>

        </div>
      </section>


      {/* PROJECT GALLERY */}

      {project.gallery &&
        project.gallery.length > 0 && (
          <section className="project-details-gallery">

            <div className="container">

              <div className="project-details-gallery-header">
                <div>
                  <p>PROJECT GALLERY</p>

                  <h2>
                    Inside the
                    <br />
                    <em>space.</em>
                  </h2>
                </div>

                <span>
                  {String(project.gallery.length).padStart(2, "0")}
                  {" "}
                  IMAGES
                </span>
              </div>


              <div className="project-details-gallery-grid">

                {project.gallery.map((item, index) => {

                  const image =
                    typeof item === "string"
                      ? item
                      : item.image;

                  return (
                    <div
                      className={`project-gallery-image project-gallery-image-${index + 1}`}
                      key={`${image}-${index}`}
                    >

                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                      />

                    </div>
                  );

                })}

              </div>

            </div>

          </section>
        )}


      {/* BACK TO PROJECTS */}

      <section className="project-details-bottom">
        <div className="container">

          <Link to="/projects">
            ← Explore All Projects
          </Link>

        </div>
      </section>

    </main>
  );
}

export default ProjectDetails;