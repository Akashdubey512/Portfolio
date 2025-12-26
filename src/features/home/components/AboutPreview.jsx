import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useRevel";
import { profile } from "@/data/profile.data";

const AboutPreview = () => {
  const { ref, isVisible } = useReveal();

  return (
    <motion.section
      ref={ref}
      id="about-preview"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 py-32 border-t border-gray-200 dark:border-gray-800"
    >
      <h2 className="text-2xl font-semibold mb-4">About</h2>

      <p className="max-w-2xl text-gray-700 dark:text-gray-300">
        {profile.description}
      </p>
    </motion.section>
  );
};

export default AboutPreview;
