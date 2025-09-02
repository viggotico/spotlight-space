"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

import { NavbarContent } from "@/components/layout/navbar-content";
import { ThemeToggle } from "@/components/theme/theme-toggle";

import Logo1 from "@/public/logo1_black.svg";

export const Navbar = ({ className, children, id }: { className?: string; children?: React.ReactNode; id?: string }) => {
    const [vw, setVw] = useState(0);
    const [isMobile, setIsMobile] = useState(vw < 768);

    useEffect(() => {
        const handleResize = () => {
            setVw(window.innerWidth);
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav
            className={cn("sticky z-50 top-0 bg-background overflow-hidden", "border-b", className)}
            id={id}
        >
            <motion.div
                initial={{ height: isMobile ? "5rem" : "10rem" }}
                animate={{ height: isMobile ? "5rem" : "10rem" }}
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