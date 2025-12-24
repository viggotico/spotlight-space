import { useEffect, useState } from 'react';

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [heightValue, setHeightValue] = useState('5rem');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY((window.scrollY / document.body.scrollHeight) * 100);
            // console.log('scrollY:', (window.scrollY / document.body.scrollHeight) * 100);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
            setHeightValue(window.innerWidth < 768 ? '5rem' : '10rem');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, []);

    return {
        isMobile,
        isTablet,
        heightValue,
        scrollY,
    };
};
