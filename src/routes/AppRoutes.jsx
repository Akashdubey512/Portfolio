import { Routes, Route } from "react-router-dom"

import Home from "@/features/home/Home";
import About from "@/features/about/About"
import Projects from "@/features/projects/Projects"
import Skills from "@/features/skills/Skills"
import MainLayout from "@/components/layout/MainLayout";


const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;



