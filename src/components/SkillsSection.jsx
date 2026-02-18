import { useState } from "react";
import { cn } from "../lib/utils";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMysql, SiCplusplus, SiMongodb } from "react-icons/si";
import { VscCode } from "react-icons/vsc";


const skills = [
    { name: "HTML/CSS", category: "frontend", icon: <FaHtml5 /> },
    { name: "JavaScript", category: "frontend", icon: <FaJs /> },
    { name: "React", category: "frontend", icon: <FaReact /> },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss /> },

    { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
    { name: "MongoDB", category: "backend", icon: <SiMongodb /> },
    { name: "Express", category: "backend", icon: <SiExpress /> },
    { name: "MySQL", category: "backend", icon: <SiMysql size={40}/> },

    { name: "Git/GitHub", category: "tools", icon: <FaGitAlt /> },
    { name: "Figma", category: "tools", icon: <FaFigma /> },
    { name: "VS Code", category: "tools", icon: <VscCode /> },

    { name: "C/C++", category: "others", icon: <SiCplusplus /> },
    { name: "Python", category: "others", icon: <FaPython /> },
];


const categories = ["All", "frontend", "backend", "tools","others"];
export const SkillsSection = () => {
    const [activeCategory, setactiveCategory] = useState("All")
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || activeCategory === skill.category);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setactiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="flex gap-5 justify-center items-center bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-3xl">
                            {skill.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}