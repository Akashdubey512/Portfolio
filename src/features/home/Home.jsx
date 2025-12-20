import { Helmet } from "react-helmet-async";
import { SEO } from "@/config/seo.config";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{SEO.home.title}</title>
        <meta name="description" content={SEO.home.description} />
      </Helmet>

      <div>Home</div>
    </>
  );
};

export default Home;
