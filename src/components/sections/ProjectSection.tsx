// src/components/sections/ProjectsSection.tsx

import { MonitorPlay } from "lucide-react";
import { projects } from "../../data/portfolio";

const ProjectsSection = () => {
    return (
        <section
            id="projects"
            style={{ marginTop: '40px' }}
            className="w-full border-t border-border/30 pt-56 md:pt-72 xl:pt-96 mt-32 xl:mt-48 pb-32 scroll-mt-12 flex flex-col "
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-32 text-foreground tracking-tight items-center text-center">
                Projects
            </h2>

            <div className="flex flex-col gap-16 w-full max-w-4xl items-left text-left">
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`group flex flex-col items-left text-left relative ${index !== 0 ? "border-t border-border/20 pt-24" : ""
                            }`}
                    >
                        {/* <span className="text-muted text-sm md:text-base font-mono tracking-widest flex items-center justify-center gap-3 mb-8 text-center uppercase relative">
                            <MonitorPlay className="w-5 h-5 text-foreground hidden sm:block absolute -left-10" />
                            Featured
                        </span> */}

                        <h3 className="text-4xl md:text-2xl font-semibold text-foreground mb-8 transition-colors group-hover:text-primary">
                            {project.title}
                        </h3>

                        <p className="text-muted text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-3xl">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-base font-mono text-muted">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-5 py-2 bg-muted-light/30 rounded-full border border-border"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
