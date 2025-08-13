import { useEffect, useState } from "react";

export const getNavbarHeight = () => {
    const el = document.getElementById("navbar");
    return el?.offsetHeight || 0;
};

export const useNavbarDimensions = () => {
    const [heightInitial, setHeightInitial] = useState(0);
    const [height, setHeight] = useState(heightInitial);

    useEffect(() => {
        const initialHeight = getNavbarHeight();
        setHeightInitial(initialHeight);
        setHeight(initialHeight);

        const observer = new MutationObserver(() => {
            const el = document.getElementById("navbar");
            if (el) setHeight(el.offsetHeight);
        });

        const navbarEl = document.getElementById("navbar");
        if (navbarEl) {
            observer.observe(navbarEl, {
                attributes: true,
                childList: true,
                subtree: true,
            });
        }

        return () => observer.disconnect();
    }, []);

    return {
        height,
        heightInitial,
    };
};