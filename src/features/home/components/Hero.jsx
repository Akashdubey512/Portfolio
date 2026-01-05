import { profile } from "@/data/profile.data";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useRevel";
import Button from "@/components/ui/Button"
const Hero = () => {
  const { ref, isVisible } = useReveal();
  return (
    <motion.section
  ref={ref}
  id="hero"
  initial={{ opacity: 0, y: 30 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="min-h-[85vh] sm:min-h-screen flex items-center px-6 mt-4 "
>
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

    {/* LEFT — TEXT */}
    <div className="max-w-xl">
      <div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Hi I am,</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-9">
        
        {profile.name}
      </h1>

      <p className="text-lg text-gray-600 mb-2">
        {profile.role}
      </p>

      <p className="max-w-xl text-gray-700 mb-6">
        {profile.tagline}
      </p>
      <p className="max-w-xl
         text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
  I build scalable web applications with a strong focus on frontend architecture
  and user experience, and I also develop full-stack solutions by designing APIs
  and integrating backend systems.<br/>
  Frontend-focused full-stack developer experienced in building end-to-end applications — from UI to APIs.

      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        React • Tailwind CSS • Node.js • REST APIs
      </p>



      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
  <Button
    as="a"
    href="/resume.pdf"
    download
    variant="primary"
    className="w-full sm:w-auto"
  >
    Download Resume
  </Button>

  <Button
    as="link"
    to="/projects"
    variant="outline"
    className="w-full sm:w-auto "
  >
    View Projects
  </Button>
</div>

    </div>
    </div>

    {/* RIGHT — IMAGE */}
   <div className="flex justify-center md:justify-center">
  <img
    src={profile.image}
    alt="Akash Dubey"
    className="w-85 h-100 object-cover rounded-2xl bg-gray-100"

  />
</div>


  </div>
</motion.section>

  );
};

export default Hero;
