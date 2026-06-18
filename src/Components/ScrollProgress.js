import React, { useEffect, useState } from "react";
import "../styles/ScrollProgress.css";

export default function ScrollProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scroll =
                window.scrollY;

            const percentage =
                (scroll / totalHeight) * 100;

            setProgress(percentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <div
            className="scroll-progress"
            style={{
                width: `${progress}%`
            }}
        />

    );

}