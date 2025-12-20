import React from "react";
import { projects } from "@/data/projects.data.js";

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>

            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;