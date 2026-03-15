// src/hooks/useTheme.ts

import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme };
};

export default useTheme;
