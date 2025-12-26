import { Helmet } from "react-helmet-async";
import { SEO } from "@/config/seo.config";
import { profile } from "@/data/profile.data";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import ProjectsPreview from "./components/ProjectsPreview";
const Home = () => {
  return (
    <section id="hero">
      <Helmet>
        <title>{SEO.home.title}</title>
        <meta name="description" content={SEO.home.description} />
      </Helmet>

      <div>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
        <Hero />
      <AboutPreview />
      <ProjectsPreview />
      </div>
    </section>
  );
};

export default Home;
