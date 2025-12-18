import { useEffect, useState } from 'react';

export const isMobile = () => {
    const [_isMobile, setIsMobile] = useState(false);
    const [heightValue, setHeightValue] = useState('5rem');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY((window.scrollY / document.body.scrollHeight) * 100);
            // console.log('scrollY:', (window.scrollY / document.body.scrollHeight) * 100);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
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
        value: _isMobile,
        heightValue,
        scrollY,
    };
};
