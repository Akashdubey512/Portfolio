import React from "react";
import { skills }  from "@/data/skills.data.js";
const Skills = () => {
    return(
       <section id="skills" className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Skills</h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Frontend */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-3 py-1 text-sm
                           bg-gray-100 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-3 py-1 text-sm
                           bg-gray-100 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="rounded-full px-3 py-1 text-sm
                           bg-gray-100 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
       </section>

    )
};

export default Skills;