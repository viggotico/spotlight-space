import { cn } from '@/lib/utils';
import { animations } from '@/site.config';
import { motion } from 'motion/react';
import Link from 'next/link';

export type CardSimpleProps = {
    title: React.ReactNode;
    imgUrl?: string;
    description?: string;
    date?: string;
    href?: string;
    target?: '_blank' | undefined;
    animate?: boolean;
    variant?: 'minimal' | 'default';
};

export const CardSimple = (props: CardSimpleProps) => {
    const aspectRatio =
        props.variant === 'minimal'
            ? ['aspect-[1/1]', 'md:max-w-[500px]', 'lg:max-w-[700px]']
            : ['aspect-[5/4] flex-1 mb-10', 'min-w-[300px]', 'md:min-w-[400px] md:max-w-[500px]', 'lg:min-w-[300px]'];

    const WithLink = ({ children }: { children: React.ReactNode }) => {
        if (!props.href) return <>{children}</>;
        return (
            <Link href={props.href} target={props.target}>
                {children}
            </Link>
        );
    };

    const WithAnimation = ({ children }: { children: React.ReactNode }) => {
        if (!props.animate) return <div className={cn('relative', ...aspectRatio)}>{children}</div>;
        return (
            <motion.div
                className={cn('relative', ...aspectRatio)}
                {...animations.fadeIn_moveUp({
                    whileInView: {
                        transition: {
                            duration: 0.8,
                            scale: { duration: 0.2 },
                        },
                    },
                })}
                whileHover={{
                    scale: 1.02,
                    filter: `brightness(${props.variant === 'minimal' ? 1.5 : 0.5})`,
                    transition: {
                        duration: 0.2,
                    },
                }}
            >
                {children}
            </motion.div>
        );
    };

    const Content = () => {
        switch (props.variant) {
            case 'minimal':
                return (
                    <>
                        <div
                            className="h-full bg-cover bg-center rounded-md brightness-50 pointer-events-none"
                            style={{
                                backgroundImage: props.imgUrl
                                    ? `url('${props.imgUrl}')`
                                    : undefined,
                            }}
                        />
                        <h1 className="block text-4xl md:text-7xl text-wrap text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            {props.title}
                        </h1>
                    </>
                );
            default:
                return (
                    <figure className={cn('flex flex-col gap-1', ...aspectRatio)}>
                        <div
                            className="h-full bg-cover bg-center rounded-md pointer-events-none"
                            style={{
                                backgroundImage: props.imgUrl
                                    ? `url('${props.imgUrl}')`
                                    : undefined,
                            }}
                        />
                        <div className="mt-2 flex flex-col gap-1 items-start text-wrap font-bold pl-3 border-l-2 border-secondary dark:border-primary">
                            {props.date && (
                                <span className="text-sm text-muted-foreground">{props.date}</span>
                            )}
                            <h1 className="uppercase text-lg text-secondary dark:text-primary">{props.title}</h1>
                            {props.description && (
                                <figcaption className="text-sm text-primary dark:text-foreground">{props.description}</figcaption>
                            )}
                        </div>
                    </figure>
                );
        }
    };

    return (
        <WithAnimation>
            <WithLink>
                <Content />
            </WithLink>
        </WithAnimation>
    );
};
