import React from "react";
import {profile} from "@/data/profile.data"
const About = () => {
    return (
        <section>
            <h1 className="px-6 py-20 max-w-3xl">About Me</h1>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {profile.description}
            </p>

       <p className="text-gray-700 dark:text-gray-300 mb-6">
        I focus on building scalable frontend applications with clean
        architecture, strong fundamentals, and maintainable codebases.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Currently, I am looking for opportunities where I can contribute as a
        frontend or full-stack developer and continue growing through
        real-world problem solving.
      </p>
        </section>
    )
};

export default About;