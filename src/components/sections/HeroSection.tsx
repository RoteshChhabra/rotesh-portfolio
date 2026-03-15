// src/components/sections/HeroSection.tsx

import { MapPin } from "lucide-react";

interface HeroSectionProps {
    greeting: string;
}

const HeroSection = ({ greeting }: HeroSectionProps) => {
    return (
        <section
            id="home"
            className="min-h-screen w-full flex flex-col justify-center items-start text-left py-32 xl:py-64"
        >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 leading-[1.1]">
                <span className="animate-pulse">{greeting}</span>, I'm{" "}
                <br className="hidden sm:block" />
                Rotesh.
            </h1>

            <h2 className="text-3xl md:text-5xl text-muted font-light tracking-tight mb-8">
                Full-Stack Software Engineer.
            </h2>

            <div className="flex items-center gap-3 text-muted text-xl md:text-2xl font-light tracking-tight mb-16">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span>Toronto, Canada</span>
            </div>
        </section>
    );
};

export default HeroSection;
