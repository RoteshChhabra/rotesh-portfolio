// src/components/sections/AboutSection.tsx

import profilePhoto from "../../assets/images/rotesh.png";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-full py-32 xl:py-48 scroll-mt-12 flex flex-col "
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-foreground tracking-tight items-center text-center ">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 w-full">
                <p className="text-muted  md:text-3xl lg:text-4xl leading-relaxed w-full font-light text-justify">
                    I am a full-stack software engineer who have spent 6+ years turning caffeine into cloud-native software.
                    I build high-availability platforms - from pixel-perfect UIs to the infrastructure nobody sees but everyone depends on, that scale, perform, and somehow always ship on time.
                </p>
                <div className="flex-shrink-0">
                    <img
                        src={profilePhoto}
                        alt="Rotesh Chhabra"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
