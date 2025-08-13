"use client";

import { animations } from "@/site.config";
import NumberFlow from "@number-flow/react";
import { motion, MotionNodeOptions } from "motion/react";

export type StatsBoxProps = {
    number: number;
    title?: React.ReactNode;
    animate?: boolean;
    numberPrefix?: React.ReactNode;
    numberSuffix?: React.ReactNode;
}

export const StatsBox = (props: StatsBoxProps) => {
    const animation: MotionNodeOptions = props.animate
        ? animations.fadeIn_moveUp()
        : {};

    return (
        <motion.div {...animation} className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
            <span className="pointer-events-none">
                {props.numberPrefix ?? ''}
                <NumberFlow value={props.number} />
                {props.numberSuffix ?? ''}
            </span>
            {props.title && <span className="text-3xl pointer-events-none">{props.title}</span>}
        </motion.div>
    )
}