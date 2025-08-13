"use client";

import React from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { menuEntries } from "@/menu.config";
import { Section, Container } from "@/components/craft";
import { siteConfig } from "@/site.config";

import Balancer from "react-wrap-balancer";
import Logo2 from "@/public/logo2_black.svg";
import Image from "next/image";
import Link from "next/link";

import { SocialIcons } from "@/components/icons/socials";

import { NavbarSegmentData } from "./navbar-types";
import { useActiveSegment } from "./navbar-content";

export const Footer = () => {
    const [segments] = React.useState(
        Object.entries(menuEntries).map(([name, href], index) => ({
            name,
            id: `menu-footer-item-${index}-${name.replace(/\ /g, "-")}`,
            path: href,
        } as NavbarSegmentData))
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
                                className="hover:underline underline-offset-4 w-fit"
                            >
                                {segment.name.charAt(0).toUpperCase() + segment.name.slice(1)}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        {[
                            'Presse',
                            'Sponsors',
                            'Bliv frivillig',
                        ].map((x) => (
                            <Link
                                className="hover:underline underline-offset-4 w-fit"
                                key={x}
                                href={'#'}
                            >
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
                                className="dark:invert"
                                width={300}
                            ></Image>
                        </Link>
                        <p className="text-2xl">
                            <Balancer>{siteConfig.site_description_jsx}</Balancer>
                        </p>
                    </div>
                </Container>
                <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
                    <ThemeToggle />
                    <p className="text-muted-foreground">
                        &copy; Spotlight Space. All rights reserved.
                        2025.
                    </p>
                </Container>
            </Section>
        </footer>
    );
};
