import { useRef } from "react";
import { projectsData } from "../data/projectsData";
import "./ProjectsCarousel.css";

export default function ProjectsCarousel({
  title = "Featured Projects",
  subtitle = "A few recent builds and experiments.",
}) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".pc__card");
    const width = card ? card.getBoundingClientRect().width : 300;

    track.scrollBy({
      left: direction * (width + 20),
      behavior: "smooth",
    });
  };

  return (
    <section className="pc">
      <div className="pc__container">
        <header className="pc__header">
          <div>
            <span className="pc__label">Work</span>
            <h2 className="pc__title">{title}</h2>
            <p className="pc__subtitle">{subtitle}</p>
          </div>

          <div className="pc__controls">
            <button
              className="pc__arrow"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              className="pc__arrow"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </header>

        <div
          className="pc__track"
          ref={trackRef}
          tabIndex={0}
          aria-label="Projects carousel"
        >
          {projectsData.map((project) => (
            <article key={project.id} className="pc__card">
              <div className="pc__thumbWrap">
                <img
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  className="pc__thumb"
                  loading="lazy"
                />
              </div>

              <div className="pc__body">
                <p className="pc__role">{project.role}</p>
                <h3 className="pc__cardTitle">{project.title}</h3>
                <p className="pc__blurb">{project.blurb}</p>

                {/* <ul className="pc__tags">
                  {/* {project.tags.map((tag) => (
                    <li key={tag} className="pc__tag">{tag}</li>
                  ))}
                </ul> */} 

                <div className="pc__links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc__btn pc__btnPrimary"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc__btn pc__btnSecondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="pc__hint">Swipe or use arrows to browse.</p>
      </div>
    </section>
  );
}