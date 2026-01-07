import { Section, Container } from '@/components/craft';
import { Masonry, type MasonryEntry } from '@/components/ui/masonry';
import { Title } from '@/components/ui/title';
import { sanatizeContent } from '@/lib/utils';
import { getMedia, getPostBySlug } from '@/lib/wordpress';
import Balancer from 'react-wrap-balancer';

export default async function Gallery() {
    const introText = await getPostBySlug('gallery-intro-text');
    const mediaImages = await getMedia({ search: 'img-', per_page: 100 });
    const mediaVideos = await getMedia({ search: 'video-', per_page: 100 });

    const entries: MasonryEntry[] = [...mediaImages, ...mediaVideos]
        .map(media => ({
            src: media.source_url,
        }))
        .sort(_ => 10 * Math.random() - 10 * Math.random());

    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <div className="w-full">
                        <article className="text-center mb-16">
                            <Title value="Galleri" />
                            <Balancer
                                dangerouslySetInnerHTML={{
                                    __html: sanatizeContent(introText.content.rendered),
                                }}
                            ></Balancer>
                        </article>
                        <Masonry items={entries} />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
