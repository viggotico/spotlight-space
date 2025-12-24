import {
    Header,
    Root,
    Item,
    Content,
    Trigger,
    type AccordionItemProps,
    type AccordionTriggerProps,
    type AccordionContentProps,
    type AccordionSingleProps,
    type AccordionMultipleProps,
} from '@radix-ui/react-accordion';

import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export type AccordionProps = {
    items: AccordionItem[];
    countPrefx?: boolean;
    titleClassName?: string;
    contentClassName?: string;
    hideChevron?: boolean;
} & Omit<AccordionSingleProps | AccordionMultipleProps, 'type'>;

export type AccordionItem = {
    title: React.ReactNode;
    content?: React.ReactNode;
    id?: string;
    titleClassName?: string;
    contentClassName?: string;
    hideChevron?: boolean;
};

export const Accordion = ({
    items,
    countPrefx,
    className,
    titleClassName,
    contentClassName,
    hideChevron,
    ...props
}: AccordionProps) => {
    return (
        <Root
            className={cn('w-full max-w-[1000px]', className)}
            type="single"
            collapsible
            {...(props as any)}
        >
            {items.map((item, i) => {
                return (
                    <AccordionItemWrapper key={i} id={item.id} value={`item-${i + 1}`} asChild>
                        <article className="w-full">
                            <AccordionTrigger
                                count={countPrefx ? i + 1 : undefined}
                                className={item.titleClassName ?? titleClassName}
                                hideChevron={item.hideChevron ?? hideChevron}
                            >
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className={item.contentClassName ?? contentClassName}>
                                {item.content}
                            </AccordionContent>
                        </article>
                    </AccordionItemWrapper>
                );
            })}
        </Root>
    );
};

const AccordionItemWrapper = ({ children, className, ...props }: AccordionItemProps) => (
    <Item
        className={cn(
            'mt-px py-4 md:py-1 overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 border-b-[1px] last:border-b-0',
            className
        )}
        {...props}
    >
        {children}
    </Item>
);

const AccordionTrigger = ({
    children,
    className,
    count,
    hideChevron,
    ...props
}: AccordionTriggerProps & { count?: number } & Pick<AccordionProps, 'hideChevron'>) => (
    <Header className="flex">
        <Trigger
            className={cn(
                'group flex min-h-[45px] flex-1 items-center justify-between px-5 font-medium leading-none outline-none text-start data-[state=open]:text-primary hover:text-primary hover:cursor-pointer',
                className
            )}
            {...props}
        >
            <div className="flex gap-2">
                {count && <span>{`${count}.`}</span>}
                {children}
            </div>
            <ChevronDownIcon
                style={{ display: hideChevron ? 'none' : undefined }}
                className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Trigger>
    </Header>
);

const AccordionContent = ({ children, className, ...props }: AccordionContentProps) => (
    <Content
        className={cn(
            'overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown text-start',
            className
        )}
        {...props}
    >
        <div className="px-5 pt-2 pb-4 md:pt-0 text-[0.85em]">{children}</div>
    </Content>
);
