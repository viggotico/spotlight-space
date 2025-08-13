"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

import { NavbarContent } from "@/components/layout/navbar-content";

import Logo1 from "@/public/logo1_black.svg";
import { useState } from "react";

export const Navbar = ({ className, children, id }: { className?: string; children?: React.ReactNode; id?: string }) => {
    const [vw] = useState(window.innerWidth || 0);
    const [isMobile] = useState(vw < 768);

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
                <div className="flex items-center gap-2">
                    <NavbarContent />
                </div>
            </motion.div>
        </nav>
    );
};