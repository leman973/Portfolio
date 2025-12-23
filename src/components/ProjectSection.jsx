import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "PulseFit",
        description: "A Custom Workout Generator Website frontend using only html and css",
        image: "public/projects/PulseFit.png",
        tags: ["HTML", "CSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "MusicPlayer",
        description: "A simple music player website",
        image: "public/projects/MusicPlayer.jpeg",
        tags: ["HTML", "CSS", "Javascript"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "ToDo",
        description: "A todo website to manage and track your task",
        image: "public/projects/Todo.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    }
];



export const ProjectSection = () => {
    return (<section id="projects" className="py-24 px-4 relative bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">Here are some of my recent projects.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="flex flex-col grow p-5">

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border bg-secondary/60 rounded-full text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>

                            <p className="text-sm mb-4 mx-1">
                                {project.description}
                            </p>

                            <div className="mt-auto flex space-x-3">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/leman973" 
                target="_blank" className="cosmic-button flex items-center mx-auto w-fit gap-2"> Check My GitHub <ArrowRight size={16}/></a>
            </div>
        </div>
    </section>);
}