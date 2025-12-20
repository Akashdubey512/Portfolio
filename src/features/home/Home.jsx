import { Helmet } from "react-helmet-async";
import { SEO } from "@/config/seo.config";
import { profile } from "@/data/profile.data";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{SEO.home.title}</title>
        <meta name="description" content={SEO.home.description} />
      </Helmet>

      <div>
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>

      </div>
    </>
  );
};

export default Home;
