import { Section, Container } from '@/components/craft';
import { Masonry, type MasonryEntry } from '@/components/ui/masonry';
import { Title } from '@/components/ui/title';
import Balancer from 'react-wrap-balancer';

export default function Gallery() {
    const entries: MasonryEntry[] = [];

    entries.push(
        ...new Array(8).fill(0).map((_, i) => ({
            src: `assets/gallery/img-${i + 1}.jpg`,
        }))
    );

    entries.push(
        ...new Array(20).fill(0).map((_, i) => ({
            src: `assets/gallery/video-${i + 1}.mp4`,
        }))
    );

    entries.push(
        ...new Array(1).fill(0).map((_, i) => ({
            src: `assets/gallery/andet/img-${i + 1}.jpg`,
        }))
    );

    entries.push(
        ...new Array(42).fill(0).map((_, i) => ({
            src: `assets/gallery/andet/video-${i + 1}.mp4`,
        }))
    );

    // entries.sort(_ => 10 * Math.random() - 10 * Math.random());

    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <div className="w-full">
                        <article className="text-center mb-16">
                            <Title value="Galleri" />
                            <p>
                                <Balancer>
                                    I vores galleri finder du et arkiv med billeder og videoer fra afholdte
                                    events/projekter.
                                    <br />
                                    Ønsker du at følge direkte med i hvad der foregår med artisterne
                                    i vækslaget i Spotlight Space?
                                    <br />
                                    Så følg med inde på vores Instagram{' '}
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
                        </article>
                        <Masonry items={entries} />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
