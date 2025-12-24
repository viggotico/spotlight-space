'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { animations } from '@/site.config';
import NumberFlow from '@number-flow/react';
import { motion, MotionNodeOptions } from 'motion/react';

export type StatsBoxProps = {
    number: number;
    title?: React.ReactNode;
    disableAnimation?: boolean;
    numberPrefix?: React.ReactNode;
    numberSuffix?: React.ReactNode;
    href?: string;
    newTab?: boolean;
};

export const StatsBox = (props: StatsBoxProps) => {
    const [visible, setVisibility] = useState(false);
    const [number, setNumber] = useState(0);
    const ref = useRef<HTMLElement>(null);

    const animation: MotionNodeOptions = useMemo(
        () => (!props.disableAnimation ? animations.fadeIn_moveUp() : {}),
        [props.disableAnimation]
    );

    const component = (
        <>
            <span className="pointer-events-none flex items-center gap-0">
                {props.numberPrefix ?? ''}
                <NumberFlow
                    value={number}
                    format={{ roundingIncrement: 1 }}
                    spinTiming={{
                        duration: visible ? (number >= 500 ? 12 * (number / 10) : 80 * number) : 0,
                        easing: 'ease-out',
                    }}
                />
                {props.numberSuffix ?? ''}
            </span>
            {props.title && <span className="text-3xl pointer-events-none">{props.title}</span>}
        </>
    );

    const newTab = props.newTab ? '_blank' : undefined;

    useEffect(() => {
        if (!ref.current || !document.body) return;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(_ => {
                if (entries[0].intersectionRatio <= 0) {
                    setVisibility(false);
                    setNumber(0);
                    return;
                }
                setVisibility(true);
                setNumber(props.number);
            });
        });
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return props.href ? (
        <motion.a
            ref={ref as any}
            {...animation}
            whileHover={{
                scale: 1.03,
                opacity: 0.5,
                rotate: 3,
                transition: { duration: 0.1 },
            }}
            href={props.href}
            target={newTab}
            className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase"
        >
            {component}
        </motion.a>
    ) : (
        <motion.div
            ref={ref as any}
            {...animation}
            className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase"
        >
            {component}
        </motion.div>
    );
};
