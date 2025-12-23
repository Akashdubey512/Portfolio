import { profile } from "@/data/profile.data";

const AboutPreview = () => {
  return (
    <section
      id="about-preview"
      className="px-6 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <h2 className="text-2xl font-semibold mb-4">About</h2>

      <p className="max-w-2xl text-gray-700 dark:text-gray-300">
        {profile.description}
      </p>
    </section>
  );
};

export default AboutPreview;
