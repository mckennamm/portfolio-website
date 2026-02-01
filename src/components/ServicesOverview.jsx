import { Link } from "react-router-dom";
import "./ServicesOverview.css";

/**
 * Hand-drawn SVG icon assets
 */
import webDesignIcon from "../assets/web-design-icon.svg";
import frontendDevIcon from "../assets/frontend-dev-icon.svg";
import brandDirectionIcon from "../assets/brand-direction-icon.svg";
import visualIdentityIcon from "../assets/visual-identity-icon.svg";

const services = [
  {
    title: "Brand Direction",
    to: "/services#brand-direction",
    subtitle: "Messaging, positioning, and strategy",
    icon: brandDirectionIcon,
  },
  {
    title: "Visual Identity",
    to: "/services#visual-identity",
    subtitle: "Marks, icons, and hand-drawn elements",
    icon: visualIdentityIcon,
  },
  {
    title: "Web Design",
    to: "/services#web-design",
    subtitle: "Custom website design and user experience",
    icon: webDesignIcon,
  },
  {
    title: "Front-End Development",
    to: "/services#front-end-development",
    subtitle: "HTML, CSS, JavaScript, and React",
    icon: frontendDevIcon,
  },
];

export default function ServicesOverview() {
  return (
    <section
      className="servicesOverview"
      aria-labelledby="servicesOverviewTitle"
    >
      <div className="servicesOverview__inner">
        <header className="servicesOverview__header">
          <div className="servicesOverview__headingGroup">
            <h2
              id="servicesOverviewTitle"
              className="servicesOverview__title"
            >
              Services
            </h2>

            {/* <p className="servicesOverview__description">
              A small set of offerings, designed to work together.
            </p> */}
          </div>
        </header>

        <div
          className="servicesGrid"
          role="list"
          aria-label="Services"
        >
          {services.map(({ title, subtitle, to, icon }) => (
            <Link
              key={title}
              to={to}
              className="servicePair"
              role="listitem"
              aria-label={title}
            >
              {/* Icon tile */}
              <div
                className="serviceTile serviceTile--icon"
                aria-hidden="true"
              >
                <img
                  src={icon}
                  alt=""
                  className="serviceIconImg"
                  loading="lazy"
                  data-pin-no-hover
                />
              </div>

              {/* Text tile */}
              <div className="serviceTile serviceTile--text">
                <div className="serviceText">
                  <div className="serviceTitle">{title}</div>
                  <div className="serviceSubtitle">{subtitle}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
