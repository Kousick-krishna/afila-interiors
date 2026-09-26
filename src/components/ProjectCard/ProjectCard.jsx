import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-card-image">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>Project Image</span>
          </div>
        )}
      </div>

      <div className="project-card-content">

        <span className="project-number">01</span>

        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-card-description">
          {project.description}
        </p>

        <a href={`/projects/${project.slug}`}>
          View Project
          <span>→</span>
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;