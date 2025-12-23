import { profile } from "@/data/profile.data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center gap-4 px-6"
    >
      <h1 className="text-4xl font-bold tracking-tight">
        Hi, I’m {profile.name}
      </h1>

      <p className="text-xl text-gray-600 dark:text-gray-400">
        {profile.role}
      </p>

      <p className="max-w-xl text-gray-700 dark:text-gray-300">
        {profile.tagline}
      </p>

      <div className="mt-4 flex gap-4">
        <a
          href="/projects"
          className="rounded bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
        >
          View Projects
        </a>

        <a
          href="#about-preview"
          className="rounded border px-5 py-2"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
