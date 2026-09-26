import "./ProjectCTA.css";

function ProjectCTA() {
  return (
    <section className="project-cta">

      <div className="container">

        <div className="project-cta-inner">

          <p className="project-cta-eyebrow">
            HAVE A SPACE IN MIND?
          </p>

          <h2>
            Let's create
            <br />
            <em>something beautiful.</em>
          </h2>

          <a
            href="/contact"
            className="project-cta-button"
          >
            Start Your Project
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProjectCTA;