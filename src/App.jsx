import { Helmet } from "react-helmet-async";
import AppRoutes from "@/routes/AppRoutes";
import { SEO } from "@/config/seo.config";

const App = () => {
  return (
    <>
      <Helmet>
        <title>{SEO.default.title}</title>
        <meta name="description" content={SEO.default.description} />
      </Helmet>

      <AppRoutes />
    </>
  );
};

export default App;
