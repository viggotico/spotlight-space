"use client";

import { animations } from "@/site.config";
import NumberFlow from "@number-flow/react";
import { motion, MotionNodeOptions } from "motion/react";

export type StatsBoxProps = {
    number: number;
    title?: React.ReactNode;
    disableAnimation?: boolean;
    numberPrefix?: React.ReactNode;
    numberSuffix?: React.ReactNode;
    href?: string;
    newTab?: boolean;
}

export const StatsBox = (props: StatsBoxProps) => {
    const animation: MotionNodeOptions = !props.disableAnimation
        ? animations.fadeIn_moveUp()
        : {};

    const component = (
        <>
            <span className="pointer-events-none">
                {props.numberPrefix ?? ''}
                <NumberFlow value={props.number} />
                {props.numberSuffix ?? ''}
            </span>
            {props.title && <span className="text-3xl pointer-events-none">{props.title}</span>}
        </>
    );

    const newTab = props.newTab ? "_blank" : undefined;

    return props.href ? (
        <motion.a
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
        <motion.div {...animation} className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
            {component}
        </motion.div>
    );
}