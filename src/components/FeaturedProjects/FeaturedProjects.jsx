import { projects } from "../../lib/content";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 1);

  return (
    <section className="featured-projects section">

      <div className="container">

        <div className="featured-projects-header">

          <div>
            <p className="featured-projects-eyebrow">
              SELECTED WORK
            </p>

            <h2 className="section-title">
              Spaces That
              <br />
              Speak For Themselves.
            </h2>
          </div>

          <a
            href="/projects"
            className="featured-projects-link"
          >
            View All Projects →
          </a>

        </div>

        {featuredProjects.length > 0 ? (
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="featured-projects-empty">
            No featured projects available yet.
          </div>
        )}

      </div>

    </section>
  );
}

export default FeaturedProjects;