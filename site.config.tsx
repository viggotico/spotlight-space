import { MotionNodeOptions, TargetAndTransition } from 'motion/react';
import { ReactNode } from 'react';

type SiteConfig = {
    site_domain: string;
    site_name: string;
    site_description: string;
    site_description_jsx: ReactNode;
};

export const siteConfig: SiteConfig = {
    site_name: process.env.SITE_NAME || 'Spotlight Space',
    site_description:
        process.env.SITE_DESCRIPTION ||
        'Oplev fremtidens musik i Aarhus. Spotlight Space er Danmarks platform for artister i vækstlaget. Vi giver upcoming talenter et rampelys. Udforsk events og artister!',
    site_description_jsx: (
        <>
            Oplev fremtidens musik i Aarhus.
            <br />
            <br />
            Spotlight Space er Danmarks platform for artister i vækstlaget.
            <br />
            Vi giver upcoming talenter et rampelys.
            <br />
            <br />
            Udforsk events og artister!
        </>
    ),
    site_domain: process.env.SITE_DOMAIN || 'http://localhost:3000/',
};

export type AnimationProps = {
    initial?: TargetAndTransition;
    whileInView?: TargetAndTransition;
    animate?: TargetAndTransition;
    duration?: number;
};

const ani_fadeIn = (props?: AnimationProps) => {
    const trigger = props?.animate ? 'animate' : 'whileInView';
    return {
        initial: { opacity: 0, ...props?.initial },
        [trigger]: {
            opacity: 1,
            ...props?.[trigger],
            transition: { duration: props?.duration || 0.8, ...props?.[trigger]?.transition },
        },
        viewport: { once: true },
    } as MotionNodeOptions;
};

const ani_fadeIn_moveUp = (props?: AnimationProps) => {
    const trigger = props?.animate ? 'animate' : 'whileInView';
    return {
        initial: { opacity: 0, y: 70, ...props?.initial },
        [trigger]: {
            opacity: 1,
            y: 0,
            ...props?.[trigger],
            transition: { duration: props?.duration || 0.8, ...props?.[trigger]?.transition },
        },
        viewport: { once: true },
    } as MotionNodeOptions;
};

const ani_fadeIn_moveDown = (props?: AnimationProps) => {
    const trigger = props?.animate ? 'animate' : 'whileInView';
    return {
        initial: { opacity: 0, y: -70, ...props?.initial },
        [trigger]: {
            opacity: 1,
            y: 0,
            ...props?.[trigger],
            transition: { duration: props?.duration || 0.8, ...props?.[trigger]?.transition },
        },
        viewport: { once: true },
    } as MotionNodeOptions;
};

export const animations = {
    fadeIn: ani_fadeIn,
    fadeIn_moveUp: ani_fadeIn_moveUp,
    fadeIn_moveDown: ani_fadeIn_moveDown,
};
