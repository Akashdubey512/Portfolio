import { profile } from "@/data/profile.data";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useRevel";
const Hero = () => {
  const { ref, isVisible } = useReveal();
  return (
    <motion.section
      ref={ref}
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-10 md:grid-cols-2 items-center">

        {/* LEFT — TEXT */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Hi, I’m {profile.name}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {profile.role}
          </p>

          <p className="max-w-xl text-gray-700 dark:text-gray-300 mb-6">
            {profile.tagline}
          </p>

          <div className="flex gap-4">
            <a
              href={profile.resume}
              download
              className="rounded border px-5 py-2 text-sm"
            >
              Download Resume
            </a>

            <a
              href="/projects"
              className="rounded border px-5 py-2 text-sm"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="w-60 h-60 object-cover rounded-xl"
          />
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;
