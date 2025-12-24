import { cn } from '@/lib/utils';
import { TitleClientWrapper } from './title-client-wrapper';
import Link from 'next/link';

export type TitleProps = {
    value: React.ReactNode;
    disableAnimation?: boolean;
    href?: string;
    newTab?: boolean;
    margin?: string;
    className?: string;
};

export const Title = (props: TitleProps) => {
    const classNames = props.className ? [props.className] : [];
    const margin = props.margin ?? 'my-10';
    const newTab = props.newTab ? '_blank' : undefined;

    const component = (
        <h1
            className={cn(
                'mx-auto text-4xl md:text-6xl lg:text-8xl text-center w-fit md:max-w-[600px] lg:max-w-[1000px] uppercase text-primary',
                ...classNames
            )}
            style={{ fontWeight: '800' }}
        >
            {props.value}
        </h1>
    );

    return props.disableAnimation ? (
        <div className={cn('w-full', margin)}>
            {props.href ? (
                <Link className={cn('w-fit')} href={props.href} target={newTab}>
                    {component}
                </Link>
            ) : (
                component
            )}
        </div>
    ) : (
        <TitleClientWrapper
            disableAnimation={props.disableAnimation}
            href={props.href}
            margin={margin}
        >
            {props.href ? (
                <Link className={cn('w-fit')} href={props.href} target={newTab}>
                    {component}
                </Link>
            ) : (
                component
            )}
        </TitleClientWrapper>
    );
};
