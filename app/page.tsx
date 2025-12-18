'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

// Craft Imports
import { animations, siteConfig } from '@/site.config';
import { Section, Container, Prose } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

// Next.js Imports
import Link from 'next/link';

// Icons
import { File, Pen, Tag, Diamond, User, Folder, ChevronDown } from 'lucide-react';
import { WordPressIcon } from '@/components/icons/wordpress';
import { NextJsIcon } from '@/components/icons/nextjs';
import { Button } from '@/components/ui/button';

import { useNavbarDimensions } from '@/hooks/useNavbarDimensions';
import { StatsBox } from '@/components/ui/stats-box';
import { CardSimple } from '@/components/ui/card-simple';
import { Title } from '@/components/ui/title';

// This page is using the craft.tsx component and design system
export default function Home() {
    const navbarDimensions = useNavbarDimensions();
    const [navbarHeight, setNavbarHeight] = useState('100vh');

    const scrollToRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e?: React.MouseEvent) => {
        e?.preventDefault();
        if (!scrollToRef.current) return;
        scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        if (navbarDimensions.height < 10) return;
        setNavbarHeight(`calc(100vh - ${navbarDimensions.height}px + 2px)`);
    }, [navbarDimensions.height]);

    return (
        <Section className="py-0 md:py-0">
            <motion.div
                className={`relative background-black overflow-hidden duration-1000 transition-all ease-in-out`}
                style={{
                    minHeight: navbarHeight,
                }}
            >
                <video
                    playsInline={true}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source
                        type="video/mp4"
                        src="https://spotfestival.dk/wp-content/uploads/2025/05/Web-front・Billede-og-video-2.mp4"
                    />
                    <source
                        type="video/mp4"
                        src="https://cms.roskilde-festival.dk/media/dlwnti3p/aftermovie-til-hjemmesidecover-1.mp4"
                    />
                </video>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold italic uppercase text-white text-center"
                    style={{
                        fontSize: 'clamp(2rem, 10vw, 3rem)',
                    }}
                >
                    <motion.p {...animations.fadeIn_moveDown({ initial: { y: -100 } })}>
                        Udforsk events med
                        <br />
                        artister i vækstlaget
                    </motion.p>
                </div>
                <button onClick={handleScroll}>
                    {new Array(3).fill(0).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: [0, 1, 0], y: 0 }}
                            transition={{
                                duration: 2,
                                delay: 0.3 * i,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            <ChevronDown color="white" />
                        </motion.div>
                    ))}
                </button>
            </motion.div>
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div
                    ref={scrollToRef}
                    className="absolute w-[50%] h-[100px] left-0 top-[-100px] md:top-[-250px]"
                    style={{
                        pointerEvents: 'none',
                    }}
                ></div>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <Title value="Velkommen til Spotlight Space!" />
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <StatsBox number={23} title="events" href="/events" />
                        <StatsBox number={5} title="projekter" href="/projects" />
                        <StatsBox number={30} title="artister" href="/artists" />
                        <StatsBox number={1000} title="publikum" />
                    </div>
                    <motion.p
                        className="text-2xl text-center max-w-[70vw]"
                        {...animations.fadeIn_moveUp({ initial: { y: 30 } })}
                    >
                        <Balancer>{siteConfig.site_description_jsx}</Balancer>
                    </motion.p>
                </div>

                <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
                    <Title value="Upcoming" />
                    <motion.p
                        className="text-2xl text-center max-w-[70vw]"
                        {...animations.fadeIn_moveUp({ initial: { y: 30 } })}
                    >
                        <Balancer>Ingen upcoming events eller projekter lige nu.</Balancer>
                        <Balancer>
                            Følg med i vores aktiviteter på{' '}
                            <a
                                className='text-primary'
                                href="https://www.instagram.com/spotlight_space/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @spotlight_space
                            </a>
                            !
                        </Balancer>
                    </motion.p>
                </div>

                <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
                    <Title value="Seneste nyt" />
                    <div className="w-full flex flex-wrap justify-center items-start gap-6">
                        <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_1766089963551.jpeg"
                            href="/events"
                            date="3 July 2025"
                            title="Yard Party v3"
                            description="SKATTEJAGT, TROMMER & DANS PÅ GRUS!"
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/sydhavnsboelgen_1766093666833.jpeg"
                            href="/events"
                            date="26 March 2025"
                            title="Sydhavnsbølgen | Boullion #3"
                            description="Music • Soup • Drinks • Fashion • Radio"
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_1766094146270.jpeg"
                            href="/events"
                            date="8 March 2025"
                            title="Women's Day"
                            description="Den 8. marts fejrer vi alle kvinder med en nat fyldt med power, bouncy beats og fællesskab!"
                        />
                        {/* <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_1766094281967.jpeg"
                            href="/events"
                            date="7 February 2025"
                            title="Underground Sounds"
                            description="Oplev en aften, hvor melodisk og soulful rap møder rå energi fra undergrunden."
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/afrobeats-x-mas-edition.png"
                            href="/events"
                            date="7 December 2024"
                            title="Afrobeats (X-mas Edition)"
                            description="Kom forbi @casav58 (vestergade 58) nu på lørdag når DJ Danny, DJ Clemo & DJ Koko tryllebinder gulvet med bouncy rytmer fra afrobeats hele natten!"
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_1766094034226.jpeg"
                            href="/events"
                            date="30 November 2024"
                            title="Boiler Room - Hip-Hop x Rage Rap Special"
                            description="Er du klar til at opleve en nat ud over det sædvanlige?"
                        /> */}
                    </div>
                </div>

                <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
                    <motion.p
                        className="text-2xl text-center max-w-[70vw]"
                        {...animations.fadeIn_moveUp({ initial: { y: 30 } })}
                    >
                        <Balancer>Tilmeld dig vores nyhedsbrev og hold dig opdateret!</Balancer>
                    </motion.p>
                    <motion.div
                        className="text-xl text-center max-w-[70vw]"
                        {...animations.fadeIn_moveUp({ initial: { y: 30 } })}
                    >
                        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-primary text-300 rounded-md p-2 w-full"
                            />
                            <Button variant="default" type="submit" size="lg" className="text-xl">
                                Tilmeld
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 w-full">
                    <Title value="Udforsk" />
                    <div className="grid gap-6 lg:grid-cols-3">
                        <CardSimple
                            title="Events"
                            imgUrl="https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg"
                            href="/events"
                            variant="minimal"
                            animate
                        />
                        <CardSimple
                            title="Projekter"
                            imgUrl="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg"
                            href="/projects"
                            variant="minimal"
                            animate
                        />
                        <CardSimple
                            title="Artister"
                            imgUrl="https://images.pexels.com/photos/7586651/pexels-photo-7586651.jpeg"
                            href="/artists"
                            variant="minimal"
                            animate
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

// This is just some example TSX
const ToDelete = () => {
    return (
        <main className="space-y-6">
            <Prose>
                <h1>
                    <Balancer>Headless WordPress built with the Next.js</Balancer>
                </h1>

                <p>
                    This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>, created as a
                    way to build WordPress sites with Next.js at rapid speed. This starter is
                    designed with <a href="https://ui.shadcn.com">shadcn/ui</a>,{' '}
                    <a href="https://craft-ds.com">craft-ds</a>, and Tailwind CSS. Use{' '}
                    <a href="https://components.work">brijr/components</a> to build your site with
                    prebuilt components. The data fetching and typesafety is handled in{' '}
                    <code>lib/wordpress.ts</code> and <code>lib/wordpress.d.ts</code>.
                </p>
            </Prose>

            <div className="flex justify-between items-center gap-4">
                {/* Vercel Clone Starter */}
                <div className="flex items-center gap-3">
                    <a
                        className="h-auto block"
                        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
                    >
                        {/* eslint-disable-next-line */}
                        <img
                            className="not-prose my-4"
                            src="https://vercel.com/button"
                            alt="Deploy with Vercel"
                            width={105}
                            height={32.62}
                        />
                    </a>
                    <p className="!text-sm sr-only sm:not-sr-only text-muted-foreground">
                        Deploy with Vercel in seconds.
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <WordPressIcon className="text-foreground" width={32} height={32} />
                    <NextJsIcon className="text-foreground" width={32} height={32} />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Link
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="/posts"
                >
                    <Pen size={32} />
                    <span>
                        Posts{' '}
                        <span className="block text-sm text-muted-foreground">
                            All posts from your WordPress
                        </span>
                    </span>
                </Link>
                <Link
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="/pages"
                >
                    <File size={32} />
                    <span>
                        Pages{' '}
                        <span className="block text-sm text-muted-foreground">
                            Custom pages from your WordPress
                        </span>
                    </span>
                </Link>
                <Link
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="/posts/authors"
                >
                    <User size={32} />
                    <span>
                        Authors{' '}
                        <span className="block text-sm text-muted-foreground">
                            List of the authors from your WordPress
                        </span>
                    </span>
                </Link>
                <Link
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="/posts/tags"
                >
                    <Tag size={32} />
                    <span>
                        Tags{' '}
                        <span className="block text-sm text-muted-foreground">
                            Content by tags from your WordPress
                        </span>
                    </span>
                </Link>
                <Link
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="/posts/categories"
                >
                    <Diamond size={32} />
                    <span>
                        Categories{' '}
                        <span className="block text-sm text-muted-foreground">
                            Categories from your WordPress
                        </span>
                    </span>
                </Link>
                <a
                    className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
                    href="https://github.com/9d8dev/next-wp/blob/main/README.md"
                >
                    <Folder size={32} />
                    <span>
                        Documentation{' '}
                        <span className="block text-sm text-muted-foreground">
                            How to use `next-wp`
                        </span>
                    </span>
                </a>
            </div>
        </main>
    );
};
