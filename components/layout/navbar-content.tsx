"use client";

import * as React from "react";
import _ from "lodash";
import { motion } from "motion/react";
import { menuEntries } from "@/menu.config";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import LogoBadge from "@/public/badge_black.svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";

import { NavbarSegmentData, useActiveSegmentProps } from "./navbar-types";

const sortSegments = (segments: useActiveSegmentProps['segments']) => {
  if (!segments) return segments;
  return _.orderBy(segments?.slice(), 'path');
}

export const useActiveSegment = (props: useActiveSegmentProps) => {
  const enabled = !!props.enabled;
  const pathname = usePathname();

  const [sortedSegments, setSortedSegments] = React.useState(sortSegments(props.segments));

  React.useEffect(() => setSortedSegments(sortSegments(props.segments)), [props.segments]);

  React.useEffect(() => {
    if (!enabled) return;
    if (!sortedSegments) return;
    setTimeout(() => {
      const pathnameClean = pathname.replace('/', '');
      for (const segment of sortedSegments) {
        const segmentPath = segment.path.replace('/', '');
        const el = document.getElementById(segment.id);
        if (!el) continue;
        if (pathnameClean === segmentPath || pathnameClean.startsWith(segment.path)) {
          el.classList.add("text-secondary");
          el.classList.add("dark:text-primary");
          break;
        }
        el.classList.remove("text-secondary");
        el.classList.remove("dark:text-primary");
      }
    }, 250);
  }, [pathname, enabled, sortedSegments]);
}

export function NavbarContent() {
  const [open, setOpen] = React.useState(false);

  const [segments] = React.useState(
    Object.entries(menuEntries).map(([name, href], index) => ({
      name,
      id: `menu-item-${index}-${name.replace(/\ /g, "-")}`,
      path: href,
    } as NavbarSegmentData))
  );

  const router = useRouter();
  useActiveSegment({ segments, enabled: open });

  function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
  }: MobileLinkProps) {
    return (
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn("text-lg", className)}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 h-[4rem] md:h-[4rem] hover:bg-transparent hover:text-primary"
        >
          <Menu className="aspect-square h-full w-full" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="pr-0 max-h-[80%] h-full overflow-x-hidden">
        <SheetHeader>
          <SheetTitle className="text-left">
            <MobileLink
              href="/"
              className="flex items-center"
              onOpenChange={setOpen}
            >
              <motion.div
                whileInView={{ rotate: [0, 0, 360, 360] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1], // inOutExpo
                }}
              >
                <Image
                  src={LogoBadge}
                  alt="Logo"
                  loading="eager"
                  className="dark:invert"
                  height={100}
                ></Image>
              </motion.div>
            </MobileLink>
          </SheetTitle>
        </SheetHeader>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-full">
          <div
            className="flex flex-col items-center justify-center text-center uppercase gap-4 w-fit h-fit"
            style={{ fontWeight: "500" }}
          >
            {segments.map(segment => (
              <MobileLink
                id={segment.id}
                key={segment.path}
                href={segment.path}
                onOpenChange={setOpen}
                className="text-4xl md:text-8xl hover:text-primary w-fit px-10"
              >
                {segment.name.charAt(0).toUpperCase() + segment.name.slice(1)}
              </MobileLink>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  id?: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}
