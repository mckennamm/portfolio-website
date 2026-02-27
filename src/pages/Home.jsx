import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import AboutPreview from "../components/AboutPreview";
import ProjectsCarousel from "../components/ProjectsCarousel";

// import "../styles/homeSections.css";
import "../pages/Home.css";



export default function Home() {
  return (
    <main>
      <Hero />
      {/* Add other home sections here later */}
      <AboutPreview />
      <ServicesOverview />
      <ProjectsCarousel />
      <div className="spacerLarge" />


    </main>
  );
}