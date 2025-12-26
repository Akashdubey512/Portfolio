import portfolioImg from "@/assets/projects/advanced-portfolio.png";
import devgrowthImg from "@/assets/projects/devgrowth.png";

export const projects = [
  {
    id: "advanced-portfolio",
    title: "Advanced Developer Portfolio",
    description:
      "A scalable, feature-based React portfolio built with clean architecture and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/your-username/advanced-portfolio",
    liveUrl: "",
    featured: true,
    thumbnail: portfolioImg,
  },
  {
    id: "devgrowth",
    title: "DevGrowth Platform",
    description:
      "A developer-focused platform for sharing experiences and technical learnings.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/your-username/devgrowth",
    liveUrl: "",
    featured: false,
    thumbnail: devgrowthImg,
  },
];
