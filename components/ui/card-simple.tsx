import { cn } from "@/lib/utils";
import { animations } from "@/site.config";
import { motion } from "motion/react";
import Link from "next/link";

export type CardSimpleProps = {
    title: React.ReactNode;
    imgUrl?: string;
    href?: string;
    target?: string;
    animate?: boolean;
    variant?: 'minimal' | 'default';
}

export const CardSimple = (props: CardSimpleProps) => {
    const aspectRatio = props.variant === 'minimal'
        ? ['aspect-[1/1]']
        : ['aspect-[3/2]', 'flex-1', 'min-w-[300px]'];

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
            <div className={cn("relative", ...aspectRatio)}>
                {children}
            </div>
        );
        return (
            <motion.div
                className={cn("relative", ...aspectRatio)}
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

    const Content = () => {
        switch (props.variant) {
            case 'minimal':
                return (
                    <>
                        <div className="h-full bg-cover bg-center rounded-md brightness-50 pointer-events-none" style={{
                            backgroundImage: props.imgUrl ? `url('${props.imgUrl}')` : undefined
                        }}></div>
                        <h1 className="block text-4xl md:text-7xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            {props.title}
                        </h1>
                    </>
                );
            default:
                return (
                    <article className="flex flex-col gap-4">
                        <div className="h-full bg-cover bg-center rounded-md brightness-50 pointer-events-none" style={{
                            backgroundImage: props.imgUrl ? `url('${props.imgUrl}')` : undefined
                        }}></div>
                        {/* <div className="p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
                            <p>D. 1. SEPTEMBER 2025</p>
                            <title>{props.title}</title>
                        </div> */}
                    </article>
                );
        }
    }

    return (
        <WithAnimation>
            <WithLink>
                <Content />
            </WithLink>
        </WithAnimation>
    );
}