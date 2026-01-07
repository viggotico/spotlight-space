'use client';

import { useEffect, useState } from 'react';

import { motion } from 'motion/react';
import { animations } from '@/site.config';

import { useNavbarDimensions } from '@/hooks/useNavbarDimensions';
import { ScrollIndicator } from '../ui/scroll-indicator';

export const Hero = ({ text }: { text: string }) => {
    const navbarDimensions = useNavbarDimensions();
    const [navbarHeight, setNavbarHeight] = useState('100vh');

    useEffect(() => {
        if (navbarDimensions.height < 10) return;
        setNavbarHeight(`calc(100vh - ${navbarDimensions.height}px + 2px)`);
    }, [navbarDimensions.height]);

    return (
        <div
            className={`relative background-black overflow-hidden duration-1000 transition-all ease-in-out`}
            style={{
                minHeight: navbarHeight,
            }}
        >
            <video
                playsInline={true}
                autoPlay={true}
                muted={true}
                loop={true}
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                    type="video/mp4"
                    src="https://spotfestival.dk/wp-content/uploads/2025/05/Web-front・Billede-og-video-2.mp4"
                />
            </video>
            <motion.div
                {...animations.fadeIn_moveDown({ initial: { y: -100 } })}
                className="absolute flex justify-center items-center w-full h-full text-3xl lg:text-5xl font-bold italic uppercase text-white text-center"
            >
                <p
                    className="max-w-[800px]"
                    dangerouslySetInnerHTML={{
                        __html: text.replaceAll('<p>', '').replaceAll('</p>', ''),
                    }}
                ></p>
            </motion.div>
            <ScrollIndicator />
        </div>
    );
};
