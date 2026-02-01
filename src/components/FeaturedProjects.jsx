import { Link } from "react-router-dom";

import './FeaturedProjects.css';

export default function FeaturedProjects() {
  return (
    <section className="section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="sectionHeader">
          <h2 id="projects-heading">Featured Projects</h2>
          <p className="muted">A few recent builds and experiments.</p>
        </header>

        <div className="grid3">
          <article className="card">
            <h3>Project Title</h3>
            <p>One sentence: problem → solution.</p>
            <Link className="link" to="/projects/project-slug">
              View project →
            </Link>
          </article>

          <article className="card">
            <h3>Project Title</h3>
            <p>One sentence: problem → solution.</p>
            <Link className="link" to="/projects/project-slug">
              View project →
            </Link>
          </article>

          <article className="card">
            <h3>Project Title</h3>
            <p>One sentence: problem → solution.</p>
            <Link className="link" to="/projects/project-slug">
              View project →
            </Link>
          </article>
        </div>

        <div className="sectionFooter">
          <Link className="btn btnPrimary" to="/projects">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
