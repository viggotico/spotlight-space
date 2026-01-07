'use client';

import { motion } from 'motion/react';

import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
    const handleScroll = (e?: React.MouseEvent) => {
        e?.preventDefault();
        const scrollToDiv = document.getElementById('scroll-to-div');
        if (!scrollToDiv) return;
        scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="absolute flex justify-center items-end w-full h-full">
            <button className="flex flex-col h-[60px] mb-4" onClick={handleScroll}>
                {new Array(3).fill(0).map((_, i) => (
                    <motion.div
                        key={i}
                        className='flex-1'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: [0, 1, 0], y: 0 }}
                        transition={{
                            duration: 2,
                            delay: 0.3 * i,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    >
                        <ChevronDown color="white" />
                    </motion.div>
                ))}
            </button>
        </div>
    );
};
