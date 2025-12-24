'use client';

import { useMobile } from '@/hooks/useMobile';
import MultiCarousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const Carousel = ({ children }: { children?: React.ReactNode }) => {
    const mobile = useMobile();

    return mobile.isMobile || mobile.isTablet ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-6">
            {children}
        </div>
    ) : (
        <MultiCarousel
            swipeable
            showDots
            infinite
            draggable={false}
            autoPlay={false}
            responsive={responsive}
            transitionDuration={500}
            containerClass="w-full flex flex-wrap justify-center items-start"
            itemClass="px-4"
        >
            {children}
        </MultiCarousel>
    );
};
