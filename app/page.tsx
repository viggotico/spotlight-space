import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { CardSimple } from '@/components/ui/card-simple';
import { Title } from '@/components/ui/title';
import { StatsBox } from '@/components/ui/stats-box';
import { Hero } from '@/components/layout/hero';

import { getPostBySlug } from '@/lib/wordpress';

export default async function Home() {
    const heroText = await getPostBySlug('home-hero-text');

    return (
        <Section className="py-0 md:py-0">
            <Hero text={heroText.content.rendered} />
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div
                    id="scroll-to-div"
                    className="absolute w-[50%] h-[100px] left-0 top-[-100px] md:top-[-250px]"
                    style={{
                        pointerEvents: 'none',
                    }}
                />
                <div className="flex flex-col gap-10 justify-center items-center">
                    <Title value="Velkommen til Spotlight Space!" />
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <StatsBox number={23} title="events" href="/events" />
                        <StatsBox number={5} title="projekter" href="/projects" />
                        <StatsBox number={30} title="artister" href="/artists" />
                        <StatsBox number={1000} title="publikum" numberSuffix="+" />
                    </div>
                </div>
                <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
                    <Title value="Upcoming" />
                    <p className="text-2xl text-center text-muted-foreground italic max-w-[70vw]">
                        <Balancer>Ingen upcoming events eller projekter lige nu.</Balancer>
                        <Balancer>
                            Følg med i vores aktiviteter på{' '}
                            <a
                                className="text-primary"
                                href="https://www.instagram.com/spotlight.space/"
                                target="_blank"
                            >
                                @spotlight.space
                            </a>
                            !
                        </Balancer>
                    </p>
                </div>

                <div className="mt-16 w-full flex flex-col justify-center items-center gap-6">
                    <Title value="Seneste nyt" />
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6">
                        <CardSimple
                            // animate
                            imgUrl="assets/events/spotlight.space_1766089963551.jpeg"
                            href="/events"
                            date="3 July 2025"
                            title="Yard Party v3"
                            description="SKATTEJAGT, TROMMER & DANS PÅ GRUS!"
                        />
                        <CardSimple
                            // animate
                            imgUrl="assets/events/sydhavnsboelgen_1766093666833.jpeg"
                            href="/events"
                            date="26 March 2025"
                            title="Sydhavnsbølgen | Boullion #3"
                            description="Music • Soup • Drinks • Fashion • Radio"
                        />
                        <CardSimple
                            // animate
                            imgUrl="assets/events/spotlight.space_1766094146270.jpeg"
                            href="/events"
                            date="8 March 2025"
                            title="Women's Day"
                            description="Den 8. marts fejrer vi alle kvinder med en nat fyldt med power, bouncy beats og fællesskab!"
                        />
                    </div>
                </div>

                <Link href="/events">
                    <Button variant="default" type="submit" size="lg" className="text-xl">
                        Se alle
                    </Button>
                </Link>

                <div className="mt-16 w-full">
                    <Title value="Udforsk" />
                    <div className="w-full grid gap-6 grid-cols-2 lg:grid-cols-3 justify-center items-start">
                        <CardSimple
                            // animate
                            title="Events"
                            imgUrl="https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg"
                            href="/events"
                            variant="minimal"
                        />
                        <CardSimple
                            // animate
                            title="Galleri"
                            imgUrl="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg"
                            href="/gallery"
                            variant="minimal"
                        />
                        <CardSimple
                            // animate
                            title="Artister"
                            imgUrl="https://images.pexels.com/photos/7586651/pexels-photo-7586651.jpeg"
                            href="/#"
                            variant="minimal"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
