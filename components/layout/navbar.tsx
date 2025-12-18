'use client';

import { useEffect, useState } from 'react';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';

import { isMobile as isMobileHook } from '@/hooks/isMobile';

import { NavbarContent } from '@/components/layout/navbar-content';
import { ThemeToggle } from '@/components/theme/theme-toggle';

import Logo1 from '@/public/logo1_black.svg';

export const Navbar = ({
    className,
    children,
    id,
}: {
    className?: string;
    children?: React.ReactNode;
    id?: string;
}) => {
    const isMobile = isMobileHook();

    return (
        <nav
            className={cn('sticky z-50 top-0 bg-background overflow-hidden', 'border-b', className)}
            id={id}
        >
            <motion.div
                initial={{ height: isMobile.heightValue }}
                animate={{ height: !isMobile.value && isMobile.scrollY > 3 ? '5rem' : isMobile.heightValue }}
                transition={{ duration: 0.3 }}
                id="nav-container"
                className="relative mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
            >
                <Link
                    className="flex gap-4 items-center h-full hover:opacity-75 transition-all"
                    href="/"
                >
                    <Image
                        src={Logo1}
                        alt="Logo"
                        loading="eager"
                        className="dark:invert h-full w-fit"
                    ></Image>
                </Link>
                {children}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <NavbarContent />
                </div>
            </motion.div>
        </nav>
    );
};
