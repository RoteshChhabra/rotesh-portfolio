// src/components/sections/ExperienceSection.tsx

import { experiences } from "../../data/portfolio";

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            style={{ marginTop: '40px' }}
            className="w-full border-t border-border/30 pt-56 md:pt-72 xl:pt-96 mt-32 xl:mt-48 pb-32 scroll-mt-12 flex flex-col "
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-32 text-foreground tracking-tight items-center text-center">
                Work Experience
            </h2>

            <div className="flex flex-col gap-12 md:gap-12 w-full max-w-4xl items-left text-left">
                {experiences.map((exp) => (
                    <div key={exp.role} className="group flex flex-col items-left">
                        <span className="text-muted text-lg md:text-xl font-mono tracking-widest block mb-6 uppercase">
                            {exp.period}
                        </span>
                        <h3 className="text-3xl md:text-2xl font-semibold text-foreground mb-">
                            {exp.role}
                        </h3>
                        <div className="flex items-center gap-4">
                            <img
                                src={exp.logo}
                                alt={exp.company}
                                className="h-6 md:h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <p className="text-muted text-xl md:text-2xl font-light">
                                {exp.company}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
