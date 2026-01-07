import { Section, Container } from '@/components/craft';
import { SocialIcons } from '@/components/icons/socials';
import { Separator } from '@/components/ui/separator';

import { Title } from '@/components/ui/title';
import { Mail } from 'lucide-react';

type ProfileCardProps = {
    name: string;
    title: string;
    avatarUrl: string | undefined;
    email?: string;
    instagram?: {
        url: string;
        handle: string;
    };
};

const ProfileCard = ({ name, title, avatarUrl, email, instagram }: ProfileCardProps) => {
    return (
        <figure className="w-full md:max-w-[600px] flex flex-col justify-center items-center rounded-lg border-[1px] border-muted dark:lg:border-transparent p-10">
            <div
                className="w-full max-w-[300px] rounded-full aspect-square bg-cover bg-center mb-4"
                style={
                    avatarUrl
                        ? {
                              backgroundImage: `url(${avatarUrl})`,
                          }
                        : {
                              background: 'hsl(var(--muted))',
                          }
                }
            />
            <h2 className="font-medium text-[1.2em] text-primary">{name}</h2>
            <p className="italic text-muted-foreground text-sm">{title}</p>
            {email || instagram ? (
                <div className="flex flex-col gap-4 p-4 rounded-md justify-center items-start text-[0.8em]">
                    {email && (
                        <a
                            className="w-fit flex gap-2 items-center border-b-[1px] border-muted"
                            href={`mailto:${email}`}
                            target="_blank"
                        >
                            <Mail className="w-[25px]" />
                            {email}
                        </a>
                    )}
                    {instagram && (
                        <a
                            className="w-fit flex gap-2 items-center border-b-[1px] border-muted"
                            href={instagram.url}
                            target="_blank"
                        >
                            <SocialIcons.Instagram className="w-[25px]" />
                            {instagram.handle}
                        </a>
                    )}
                </div>
            ) : (
                <></>
            )}
        </figure>
    );
};

export default function AboutUs() {
    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-16 mb-16">
                    <article className="text-center">
                        <Title value="Teamet" />
                        <p className='max-w-[800px] mx-auto'>
                            Bag Spotlight Space står et dedikeret hold af seks personer, der hver
                            især bidrager med specialiseret viden inden for SoMe, økonomi,
                            kundehåndtering, support og visuel produktion.
                        </p>
                        <br />
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-10">
                            <ProfileCard
                                name="Kofi"
                                title="Økonomi & Kommunikation"
                                avatarUrl="assets/team/kofi.png"
                                email="kofi@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'kofi.insta',
                                }}
                            />
                            <ProfileCard
                                name="Mille"
                                title="SoMe"
                                avatarUrl="assets/team/mille.png"
                                email="mille@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'mille.insta',
                                }}
                            />
                            <ProfileCard
                                name="Roxanne"
                                title="Økonomi & Kommunikation"
                                avatarUrl="assets/team/roxanne.jpg"
                                email="roxanne@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'roxanne.insta',
                                }}
                            />
                            <ProfileCard
                                name="Muoch"
                                title="Support"
                                avatarUrl="assets/team/muoch.png"
                                email="muoch@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'muoch.insta',
                                }}
                            />
                            <ProfileCard
                                name="Lamin"
                                title="Support"
                                avatarUrl="assets/team/lamin.png"
                                email="lamin@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'lamin.insta',
                                }}
                            />
                            <ProfileCard
                                name="Vinny"
                                title="AV & Grafik"
                                avatarUrl={undefined}
                                email="vinny@spotlightspace.dk"
                                instagram={{
                                    url: 'https://www.instagram.com/spotlight.space',
                                    handle: 'vinny.insta',
                                }}
                            />
                        </div>
                        <br />
                        <p className="text-center">
                            Vil du være en del af teamet?
                            <br />
                            <a href="/volunteer" className="text-primary">
                                Læs mere her.
                            </a>
                        </p>
                    </article>
                    <Separator />
                    <div className='flex flex-col justify-center items-center gap-16 max-w-[800px]'>
                        <article className="text-center">
                            <Title value="Hvad er Spotlight Space?" />
                            <h2 className="font-medium italic mb-3">
                                Platformen for Aarhus' spirende talenter
                            </h2>
                            <p>
                                Spotlight Space er et ungt og passioneret initiativ baseret i
                                Aarhus, der fungerer som en groende platform for artister i
                                vækstlaget. Vi er sat i verden for at skabe et stærkt netværk og
                                give scenetid til de talenter, der ofte bliver overset af de mere
                                etablerede spillesteder.
                                <br />
                                <br />
                                Siden vores opstart i april 2024 har vi allerede afholdt mere end 10
                                succesfulde events, hvor vi har forenet undergrundens autenticitet
                                med mere professionelle rammer. Vores mission er at løfte musikkens
                                kulturliv ved at fungere som bindeleddet mellem spirende kunstnere i
                                vækstlaget, et nysgerrigt publikum og professionelle
                                samarbejdspartnere.
                            </p>
                        </article>
                        <article className="text-center">
                            <Title value="Hvad vi står for?" />
                            <h2 className="font-medium italic mb-3">Fokus på Vækstlaget</h2>
                            <p>
                                Vi begrænser os ikke til én bestemt musikgenre, men fokuserer på et
                                specifikt stadie i karrieren: der hvor talenterne spirer.
                            </p>
                            <br />
                            <br />
                            <h2 className="font-medium italic mb-3">Autentiske Oplevelser</h2>
                            <p>
                                Vi dyrker det rå og ægte, og vi stræber efter at skabe rum, hvor
                                både artister og publikum føler sig som en del af fællesskabet.
                            </p>
                            <br />
                            <br />
                            <h2 className="font-medium italic mb-3">Kulturel Innovation</h2>
                            <p>
                                Vi opererer i krydsfeltet mellem musik, mode og grafik for at skabe
                                en moderne visuel og kulturel identitet, der afspejler Aarhus' puls.
                            </p>
                        </article>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
