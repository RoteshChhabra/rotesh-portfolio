// src/components/layout/NavMenu.tsx

import { useEffect } from "react";
import { Github, Sun, Moon, FileText, X, Menu } from "lucide-react";
import { menuItems } from "../../data/portfolio";


interface NavMenuProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const NavMenu = ({
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    theme,
    toggleTheme,
}: NavMenuProps) => {

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-6 right-6 md:top-10 md:right-10 z-[60] p-4 bg-background/80 backdrop-blur-md border border-border rounded-full hover:bg-muted-light/40 transition-colors shadow-lg"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? (
                    <X className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                ) : (
                    <Menu className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                )}
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <aside style={{ paddingRight: '80px' }} className="w-full h-full flex flex-col justify-center items-end  pt-12 pb-12 pl-12 md:pt-16 md:pb-16 md:pl-16">

                    {/* Nav Links */}
                    <nav className="my-auto w-full">
                        <ul className="space-y-10 text-4xl md:text-5xl font-medium tracking-tight text-right">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="transform transition-transform hover:-translate-y-1"
                                >
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block transition-all duration-200 ${activeSection === item.id
                                            ? "text-foreground font-bold tracking-wide"
                                            : "text-muted hover:text-foreground"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bottom Icons */}
                    <div style={{ marginTop: '40px' }} className="flex items-center justify-center gap-12 pt-12 border-t border-border/50 text-muted">
                        <button
                            onClick={toggleTheme}
                            className="hover:text-foreground transition-colors"
                            aria-label="Toggle Theme"
                            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === "dark" ? (
                                <Sun className="w-8 h-8" />
                            ) : (
                                <Moon className="w-8 h-8" />
                            )}
                        </button>

                        <a
                            href="https://github.com/roteshchhabra"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition-colors "
                            title="GitHub"
                        >
                            <Github className="w-8 h-8" />
                        </a>

                        <a
                            href="/RoteshChhabraResume.pdf"
                            download="Rotesh_Chhabra_Resume.pdf"
                            className="hover:text-foreground transition-colors"
                            title="Download Resume"
                        >
                            <FileText className="w-8 h-8" />
                        </a>
                    </div>

                </aside>
            </div>
        </>
    );
};

export default NavMenu;
