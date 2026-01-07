'use client';

import { useState } from 'react';

import { ThemeToggle } from '@/components/theme/theme-toggle';
import { menuEntries } from '@/menu.config';
import { Section, Container } from '@/components/craft';
import { siteConfig } from '@/site.config';

import Balancer from 'react-wrap-balancer';
import Logo2 from '@/public/logo2_black.svg';
import Image from 'next/image';
import Link from 'next/link';

import { SocialIcons } from '@/components/icons/socials';

import { NavbarSegmentData } from './navbar-types';
import { useActiveSegment } from './navbar-content';

export const Footer = ({ site_description }: { site_description: string }) => {
    const [segments] = useState(
        Object.entries(menuEntries).map(
            ([name, href], index) =>
                ({
                    name,
                    id: `menu-footer-item-${index}-${name.replace(/\ /g, '-')}`,
                    path: href,
                }) as NavbarSegmentData
        )
    );

    useActiveSegment({ segments, enabled: true });

    return (
        <footer className="bg-muted">
            <Section>
                <Container className="grid md:grid-cols-[0.5fr.5fr.75fr] gap-12 text-4xl">
                    <div className="flex flex-col gap-2">
                        {segments.map(segment => (
                            <Link
                                id={segment.id}
                                key={segment.path}
                                href={segment.path}
                                className="w-fit"
                            >
                                {segment.name.charAt(0).toUpperCase() + segment.name.slice(1)}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {['Presse', 'Sponsors'].map(x => (
                            <Link className="w-fit" key={x} href={'#'}>
                                {x}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 not-prose">
                        <div className="flex gap-4">
                            <SocialIcons.Facebook
                                width={40}
                                height={40}
                                href="https://www.facebook.com/profile.php?id=100081548152957"
                            />
                            <SocialIcons.Instagram
                                width={40}
                                height={40}
                                href="https://www.instagram.com/spotlight.space/"
                            />
                        </div>
                        <Link href="/" className="w-fit">
                            <h3 className="sr-only">{siteConfig.site_name}</h3>
                            <Image
                                src={Logo2}
                                alt="Logo"
                                className="dark:invert dark:brightness-50"
                                width={300}
                            ></Image>
                        </Link>
                        <div
                            className="flex flex-col gap-4 text-2xl *:m-0"
                            dangerouslySetInnerHTML={{
                                __html: site_description,
                            }}
                        ></div>
                    </div>
                </Container>
                <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
                    <ThemeToggle className="dark:bg-muted hover:dark:bg-primary" />
                    <p className="text-muted-foreground text-sm">
                        &copy; Spotlight Space. All rights reserved. 2025.
                    </p>
                </Container>
            </Section>
        </footer>
    );
};
