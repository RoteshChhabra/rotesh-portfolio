// src/components/sections/ContactSection.tsx

import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="w-full min-h-screen border-t border-border/30 flex flex-col justify-center py-32 xl:py-64 text-center mt-32"
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter mb-16 leading-[1.1]">
                Let's build <br className="hidden md:block" /> together.
            </h2>

            <p className="w-full text-2xl md:text-3xl text-muted font-light mb-24 px-8">
                Open to discovering new opportunities and discussing bold architectures.
            </p>

            <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center justify-center font-mono">
                <a
                    href="mailto:roteshchhabra1@gmail.com"
                    className="group flex flex-col items-center gap-8"
                >
                    <div className="p-10 md:p-12 rounded-full border-2 border-border group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-500 scale-100 group-hover:scale-110">
                        <Mail className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <span className="text-xl md:text-xl uppercase tracking-widest font-medium text-muted group-hover:text-foreground transition-colors">
                        Email
                    </span>
                </a>

                <a
                    href="https://github.com/roteshchhabra"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-8"
                >
                    <div className="p-10 md:p-12 rounded-full border-2 border-border group-hover:bg-[#333] group-hover:text-white group-hover:border-[#333] transition-all duration-500 scale-100 group-hover:scale-110">
                        <Github className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <span className="text-xl md:text-xl uppercase tracking-widest font-medium text-muted group-hover:text-foreground transition-colors">
                        GitHub
                    </span>
                </a>

                <a
                    href="https://www.linkedin.com/in/rotesh-chhabra/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center gap-8"
                >
                    <div className="p-10 md:p-12 rounded-full border-2 border-border group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2] transition-all duration-500 scale-100 group-hover:scale-110">
                        <Linkedin className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <span className="text-xl md:text-xl uppercase tracking-widest font-medium text-muted group-hover:text-foreground transition-colors">
                        LinkedIn
                    </span>
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
