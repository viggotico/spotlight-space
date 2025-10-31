'use client';

import { useEffect, useState } from 'react';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';

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
    const [isMobile, setIsMobile] = useState(false);
    const [heightValue, setHeightValue] = useState('5rem');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY((window.scrollY / document.body.scrollHeight) * 100);
            console.log('scrollY:', (window.scrollY / document.body.scrollHeight) * 100);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setHeightValue(window.innerWidth < 768 ? '5rem' : '10rem');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleResize);
        };
    }, []);

    return (
        <nav
            className={cn('sticky z-50 top-0 bg-background overflow-hidden', 'border-b', className)}
            id={id}
        >
            <motion.div
                initial={{ height: heightValue }}
                animate={{ height: !isMobile && scrollY > 3 ? '5rem' : heightValue }}
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
