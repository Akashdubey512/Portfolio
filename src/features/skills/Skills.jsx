import React from "react";
import { skills }  from "@/data/skills.data.js";
const Skills = () => {
    return(
        <div>
        <h2>Skills</h2>

        <h3>Frontened</h3>
        <ul>
            {skills.frontend.map(skill =>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>

        <h3>Backend</h3>
        <ul>
            {skills.backend.map(skill =>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        <h3>Tools</h3>
        <ul>
            {skills.tools.map(skill =>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        </div>

    )
};

export default Skills;