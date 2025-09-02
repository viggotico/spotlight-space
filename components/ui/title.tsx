import { cn } from "@/lib/utils";
import { animations } from "@/site.config";
import { motion, MotionNodeOptions } from "motion/react";

export type TitleProps = {
    value: React.ReactNode;
    disableAnimation?: boolean;
    href?: string;
    newTab?: boolean;
    margin?: string;
    className?: string;
}

export const Title = (props: TitleProps) => {
    const animation: MotionNodeOptions = !props.disableAnimation
        ? animations.fadeIn_moveUp()
        : {};

    const classNames = props.className ? [props.className] : [];
    const margin = props.margin ?? "my-10";
    const newTab = props.newTab ? "_blank" : undefined;

    const component = (
        <h1
            className={cn(
                "mx-auto text-4xl md:text-8xl text-center w-fit md:max-w-[50vw] uppercase text-primary",
                ...classNames,
            )}
            style={{ fontWeight: "800" }}
        >
            {props.value}
        </h1>
    );

    return (
        <motion.div
            className={cn("w-full", margin)}
            {...animation}
            whileHover={props.href && {
                scale: 1.03,
                rotate: 1.7,
                opacity: 0.5,
                transition: { duration: 0.1 },
            }}
        >
            {
                props.href ? (
                    <a
                        className={cn("w-fit")}
                        href={props.href}
                        target={newTab}
                    >
                        {component}
                    </a>
                ) : (
                    component
                )
            }
        </motion.div>
    );
}
