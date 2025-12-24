'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { animations } from '@/site.config';

export type MasonryProps = {
    className?: string;
    items: MasonryEntry[];
    infiniteLoad?: boolean;
    childrenPerPage?: number;
};

export type MasonryEntry = {
    src: string;
    id?: string;
    className?: string;
    mimeType?: string;
};

export const Masonry = (props: MasonryProps) => {
    const masonryContainerRef = useRef<HTMLDivElement>(null);

    const infiniteLoad = useMemo(() => props.infiniteLoad ?? true, [props.infiniteLoad]);
    const childrenPerPage = useMemo(() => props.childrenPerPage ?? 15, [props.childrenPerPage]);
    const initialChildren: MasonryEntry[] = useMemo(() => props.items, [props.items]);

    const [children, setChildren] = useState<MasonryEntry[]>([]);

    const nonLoadedChildren = useMemo(
        () => Math.floor(initialChildren.length - children.length),
        [initialChildren, children]
    );

    const nextChildrenCount = useMemo(
        () => (childrenPerPage > nonLoadedChildren ? nonLoadedChildren : childrenPerPage),
        [nonLoadedChildren]
    );

    const childrenPerColumn = useMemo(
        () => Math.max(0, Math.ceil(children.length / 4)),
        [children]
    );

    const useColumns = useMemo(() => children.length >= 8, [children]);

    const gridStyle = useMemo(
        () => (initialChildren.length >= 3 ? ['md:grid md:grid-cols-3 lg:grid-cols-4'] : []),
        [props.items]
    );

    const onLoadMore = () => {
        const endIndex = children.length + childrenPerPage;
        if (endIndex > initialChildren.length) {
            setChildren(initialChildren.slice(0));
            return;
        }
        setChildren(initialChildren.slice(0, endIndex));
    };

    const onLoadAll = () => {
        setChildren(initialChildren.slice(0));
    };

    useEffect(() => {
        if (!masonryContainerRef.current) return;

        const observer = new IntersectionObserver((entries, o) => {
            for (const entry of entries) {
                const el = entry.target;

                if ('style' in el) {
                    (el as HTMLElement).style.setProperty(
                        'visibility',
                        entry.isIntersecting ? 'visible' : 'hidden'
                    );
                }

                if (el.tagName.toLowerCase() === 'video') {
                    const video = el as HTMLVideoElement;

                    const src = video.getAttribute('data-masonry-item-src')!;
                    const tag = video.getAttribute('data-masonry-item-tag')!;

                    let currentSrc = video.getAttribute('src');
                    switch (tag) {
                        case 'video/source':
                            currentSrc =
                                (video.firstChild as HTMLSourceElement | null)?.getAttribute(
                                    'src'
                                ) ?? null;
                            break;
                    }

                    const canPlay = !!video.canPlayType('video/mp4');
                    const canPreload = video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA;
                    const pauseCondition = entry.isIntersecting ? video.paused : !video.paused;

                    if (currentSrc && canPreload) video.load();

                    if (pauseCondition && canPlay) {
                        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                            if (entry.isIntersecting) {
                                switch (tag) {
                                    case 'video/source':
                                        (
                                            video.firstChild as HTMLSourceElement | null
                                        )?.setAttribute('src', src);
                                        break;
                                }
                                video.play();
                            } else {
                                switch (tag) {
                                    case 'video/source':
                                        (
                                            video.firstChild as HTMLSourceElement | null
                                        )?.setAttribute('src', '');
                                        break;
                                }
                                video.pause();
                            }
                        }
                    }
                }
            }
        });

        masonryContainerRef.current.querySelectorAll('.masonry-item').forEach(el => {
            observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [children]);

    useEffect(() => {
        if (!infiniteLoad) {
            setChildren(initialChildren.slice(0));
            return;
        }
        setChildren(initialChildren.slice(0, childrenPerPage));
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-6">
            <div
                ref={masonryContainerRef}
                className={cn(
                    'w-full grid grid-cols-2 justify-[inherit] items-start gap-[inherit]',
                    ...gridStyle,
                    props.className
                )}
            >
                {!useColumns && children.map((item, i) => <MasonryItem key={i} {...item} />)}
                {useColumns &&
                    new Array(4).fill(0).map((_, columnIndex) => {
                        const start = childrenPerColumn * columnIndex;
                        const end = childrenPerColumn * (columnIndex + 1);
                        const columnItems = children.slice(start, end);
                        return (
                            <div
                                key={columnIndex}
                                className={
                                    'masonry-column w-full flex flex-col justify-[inherit] items-start gap-[inherit]'
                                }
                            >
                                {columnItems.map((item, i) => (
                                    <MasonryItem key={i} {...item} />
                                ))}
                            </div>
                        );
                    })}
            </div>
            {infiniteLoad && children.length < initialChildren.length ? (
                <div className="flex justify-[inherit] items-[inherit] gap-[inherit]">
                    <Button onClick={onLoadMore}>Indlæs mere ({nextChildrenCount}+)</Button>
                    <Button className="bg-transparent text-muted-foreground border-muted-foreground border-2 hover:text-white hover:border-transparent" onClick={onLoadAll}>
                        Indlæs alle ({nonLoadedChildren}+)
                    </Button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export const MasonryItem = (props: MasonryEntry) => {
    const ref = useRef<HTMLElement>(null);

    const className = useMemo(
        () =>
            cn(
                ...new Set([
                    'masonry-item w-full justify-center items-center rounded-md',
                    ...(props.className?.split(' ') || []),
                ])
            ),
        [props.className]
    );

    const ext = useMemo(() => props.src.split('.').pop()!, [props.src]);
    const type = useMemo(() => (['jpg', 'jpeg', 'png'].includes(ext) ? 'img' : ext), [ext]);

    return type === 'img' ? (
        <motion.img
            ref={ref as any}
            id={props.id}
            {...animations.fadeIn_moveUp()}
            className={className}
            src={props.src}
            alt="Masonry Item"
            loading="lazy"
        />
    ) : (
        <motion.video
            ref={ref as any}
            id={props.id}
            {...animations.fadeIn_moveUp()}
            className={className}
            muted
            loop
            controls={false}
            preload="metadata"
            data-masonry-item-src={props.src}
            data-masonry-item-tag={'video/source'}
        >
            <source src={props.src} type={props.mimeType ?? `video/${type}`} />
        </motion.video>
    );
};
