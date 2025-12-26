import { profile } from "@/data/profile.data";
import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useRevel.js";
const Hero = () => {
  const { ref, isVisible } = useReveal();
  return (
    <motion.section
      ref={ref}
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center gap-4 px-6"
    >
      <h1 className="text-4xl font-bold">
        Hi, I’m {profile.name}
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-400">
        {profile.role}
      </p>

      <p className="max-w-xl text-gray-700 dark:text-gray-300">
        {profile.tagline}
      </p>
    </motion.section>
  );
};

export default Hero;
