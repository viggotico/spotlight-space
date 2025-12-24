'use client'

import { cn } from '@/lib/utils';
import { animations } from '@/site.config';
import { motion, MotionNodeOptions } from 'motion/react';

export type TitleProps = {
    children?: React.ReactNode;
    disableAnimation?: boolean;
    href?: string;
    newTab?: boolean;
    margin?: string;
};

export const TitleClientWrapper = (props: TitleProps) => {
    const animation: MotionNodeOptions = !props.disableAnimation ? animations.fadeIn_moveUp() : {};

    const margin = props.margin ?? 'my-10';
    return (
        <motion.div
            className={cn('w-full', margin)}
            {...animation}
            whileHover={
                props.href && {
                    scale: 1.03,
                    rotate: 1.7,
                    opacity: 0.5,
                    transition: { duration: 0.1 },
                }
            }
        >
            {props.children}
        </motion.div>
    );
};
