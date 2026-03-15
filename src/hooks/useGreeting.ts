// src/hooks/useGreeting.ts

import { useState, useEffect } from "react";
import { greetings } from "../data/portfolio";

const useGreeting = () => {
    const [greetingIndex, setGreetingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return { greeting: greetings[greetingIndex], greetingIndex };
};

export default useGreeting;
