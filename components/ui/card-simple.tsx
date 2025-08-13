import { animations } from "@/site.config";
import { motion } from "motion/react";
import Link from "next/link";

export type CardSimpleProps = {
    title: React.ReactNode;
    imgUrl?: string;
    href?: string;
    target?: string;
    animate?: boolean;
}

export const CardSimple = (props: CardSimpleProps) => {
    const WithLink = ({ children }: { children: React.ReactNode }) => {
        if (!props.href) return <>{children}</>;
        return (
            <Link href={props.href} target={props.target ?? '_blank'}>
                {children}
            </Link>
        );
    }

    const WithAnimation = ({ children }: { children: React.ReactNode }) => {
        if (!props.animate) return (
            <div className="relative aspect-[1/1]">
                {children}
            </div>
        );
        return (
            <motion.div
                className="relative aspect-[1/1]"
                {...animations.fadeIn_moveUp({
                    whileInView: {
                        transition: {
                            duration: 0.8,
                            scale: { duration: 0.2 }
                        }
                    }
                })}
                whileHover={{
                    scale: 1.02,
                    filter: 'brightness(1.5)',
                    transition: {
                        duration: 0.2,
                    }
                }}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <WithAnimation>
            <WithLink>
                <div className="h-full bg-cover bg-center rounded-md brightness-50 pointer-events-none" style={{
                    backgroundImage: props.imgUrl ? `url('${props.imgUrl}')` : undefined
                }}></div>
                <h1 className="block text-7xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    {props.title}
                </h1>
            </WithLink>
        </WithAnimation>
    );
}