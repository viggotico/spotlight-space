import { Section, Container } from '@/components/craft';
import { SocialIcons } from '@/components/icons/socials';
import { Accordion } from '@/components/ui/accordion';

import { Title } from '@/components/ui/title';
import { Mail } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

export default function Practical() {
    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center">
                    <Title value="Kontakt" />
                    <article className="text-center mb-16">
                        <p>
                            <Balancer>
                                Tag direkte kontakt til os på mail eller Instagram.
                            </Balancer>
                        </p>
                        <Balancer>
                            <div className="flex flex-col justify-center items-center gap-1 mt-2">
                                <a
                                    className="flex justify-center items-center gap-2 text-primary"
                                    href="mailto:kontakt@spotlightspace.dk"
                                    target="_blank"
                                >
                                    <Mail height={25} />
                                    kontakt@spotlightspace.dk
                                </a>
                                <a
                                    className="flex justify-center items-center gap-2 text-primary"
                                    href="https://www.instagram.com/spotlight.space/"
                                    target="_blank"
                                >
                                    <SocialIcons.Instagram height={25} />
                                    spotlight.space
                                </a>
                            </div>
                        </Balancer>
                    </article>
                    <Title value="FAQ" />
                    <article className="text-center">
                        <p>
                            <Balancer>
                                Har du spørgsmål?
                                <br />
                                Gennemgå vores FAQ og find dit svar!
                                <br />
                                <br />
                            </Balancer>
                        </p>
                    </article>
                    <Accordion
                        countPrefx
                        items={[
                            {
                                title: `Hvad er Spotlight Space?`,
                                content: `Spotlight Space er en platform og et netværk baseret i Aarhus, der er dedikeret til at give scenetid og synlighed til kunstnere i vækstlaget, som ofte overses af etablerede spillesteder.`,
                            },
                            {
                                title: `Hvor kan jeg købe billetter til jeres events?`,
                                content: `Vi benytter os af eksterne billetudbydere. Du kan finde direkte links til billetsalg under det specifikke event på vores 'Events' side.`,
                            },
                            {
                                title: `Hvor afholdes jeres begivenheder typisk?`,
                                content: `Vores events finder ofte sted på forskellige spillesteder i Aarhus, men også i andre byer.`,
                            },
                            {
                                title: `Hvordan kan jeg blive frivillig hos jer?`,
                                content: `Vi søger altid passionerede folk! Du kan ansøge direkte via formularen på vores 'Bliv frivillig' side.`,
                            },
                            {
                                title: `Hvilke musikgenrer fokuserer I på?`,
                                content: `Vi er multigenre! Vi begrænser os ikke til én stilart, men fokuserer i stedet på kunstnerens stadie i karrieren - nemlig vækstlaget.`,
                            },
                            {
                                title: `Hvor kan jeg se billeder fra tidligere events?`,
                                content: `Du kan udforske vores 'Galleri' side, som fungerer som et visuelt arkiv over vores tidligere koncerter og projekter.`,
                            },
                            {
                                title: `Hvem står bag Spotlight Space?`,
                                content: `Organisationen drives af et passioneret team bestående af seks faste personer, der varetager alt fra SoMe og økonomi til support og grafik. Mød teamet og lær os at kende på 'Om Os' siden!`,
                            },
                            {
                                title: `Er jeres events tilgængelige for alle aldre?`,
                                content: `Vores primære målgruppe er unge mellem 18-28 år, men alle kulturelskere er velkomne til at tage del i fællesskabet. OBS: der sælges alkohol til de fleste events - man kan dog stadig deltage uden at drikke alkohol da der typisk vil være alkoholfrie alternativer.`,
                            },
                            {
                                title: `Hvordan kontakter jeg jer for et samarbejde?`,
                                content: `Virksomheder, fonde eller artister kan finde vores kontaktinformationer under 'Praktisk' siden.`,
                            },
                            {
                                title: `Hvordan holder jeg mig opdateret om nye events?`,
                                content: `Det bedste overblik får du her på hjemmesiden under 'Events', men du kan også følge os på Instagram og Facebook for hurtige opdateringer.`,
                            },
                        ]}
                    />
                    <article className="text-center mt-16">
                        <p>
                            <Balancer>
                                Brug for mere hjælp? Tag direkte kontakt!
                            </Balancer>
                        </p>
                        <Balancer>
                            <div className="flex flex-col justify-center items-center gap-1 mt-2">
                                <a
                                    className="flex justify-center items-center gap-2 text-primary"
                                    href="mailto:kontakt@spotlightspace.dk"
                                    target="_blank"
                                >
                                    <Mail height={25} />
                                    kontakt@spotlightspace.dk
                                </a>
                                <a
                                    className="flex justify-center items-center gap-2 text-primary"
                                    href="https://www.instagram.com/spotlight.space/"
                                    target="_blank"
                                >
                                    <SocialIcons.Instagram height={25} />
                                    spotlight.space
                                </a>
                            </div>
                        </Balancer>
                    </article>
                </div>
            </Container>
        </Section>
    );
}
