import { Section, Container } from '@/components/craft';

import { CardSimple } from '@/components/ui/card-simple';
import { Carousel } from '@/components/ui/carousel';
import { Title } from '@/components/ui/title';
import Balancer from 'react-wrap-balancer';

export default function Events() {
    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center gap-6">
                    <div className="w-full mb-16">
                        <article className="text-center mb-16">
                            <p>
                                <Balancer>
                                    Vi caster løbende deltagere til vores næste event eller store projekt, følg
                                    med inde på vores instagram{' '}
                                    <a
                                        className="text-primary"
                                        href="https://www.instagram.com/spotlight.space/"
                                        target="_blank"
                                    >
                                        @spotlight.space
                                    </a>{' '}
                                    og få en chance i at deltage!
                                    <br />
                                    <br />
                                    Hvis du er interesseret i at hjælpe os som frivillig kan du læse mere{' '}
                                    <a
                                        className="text-primary"
                                        href="/volunteer"
                                    >
                                        her
                                    </a>
                                    .
                                </Balancer>
                            </p>
                            <Title value="Projekter" />
                            <p>
                                <Balancer>
                                    Her kan du se alle vores projekter.
                                    <br />
                                    Vores projekter foregår typisk over flere dage, hvor vi har
                                    fokus på artister i vækstlaget.
                                    <br />
                                    Du kan forvente mindst 2 store projekter om året.
                                </Balancer>
                            </p>
                        </article>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start">
                            <CardSimple
                                animate
                                title="TBA"
                                variant="minimal"
                                className='hidden lg:block'
                                imgClass="brightness-50 border-2 border-dashed border-muted"
                                titleClass="text-muted"
                            />
                            <CardSimple
                                animate
                                title="Bootcamp"
                                imgUrl="assets/events/spotlight.space_1766424717303.jpeg"
                                href="/events/bootcamp-1"
                                variant="minimal"
                                imgClass="brightness-[0.3]"
                            />
                            <CardSimple
                                animate
                                title="Zipcode Linkup"
                                imgUrl="assets/events/spotlight.space_zipcode_linkup.png"
                                href="/events/zipcode-linkup"
                                variant="minimal"
                                imgClass="brightness-[0.3]"
                            />
                        </div>
                    </div>
                    <article className="text-center mb-16">
                        <Title value="Koncerter" />
                        <p>
                            <Balancer>
                                Alle afholdte koncerter til dags dato - der er flere at komme!
                                <br />
                                Du kan forvente mindst 1 koncert om måneden.
                            </Balancer>
                        </p>
                    </article>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 mb-16">
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
                        <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_1766094281967.jpeg"
                            href="/events"
                            date="7 February 2025"
                            title="Underground Sounds"
                            description="Oplev en aften, hvor melodisk og soulful rap møder rå energi fra undergrunden."
                        />
                    </div>
                    <Title value="Mere" />
                    <Carousel>
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
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/spotlight.space_halloween_underground.png"
                            href="/events"
                            date="1 November 2024"
                            title="Halloween Underground"
                            description="Et event med rå beats, upcoming artister/DJ's, konkurrencer for bedste udklædning og meget mere, for at holde den spooky ånd i live natten lang!"
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/equalclub_1766423572546.jpeg"
                            href="/events"
                            date="21 September 2024"
                            title="Vibe Haven"
                            description="We are proud to invite the young and creative collective Spotlight Space to present Dj KOKO and Dj MELO"
                        />
                        <CardSimple
                            animate
                            imgUrl="assets/events/1766423691955.jpeg"
                            href="/events"
                            date="15 June 2024"
                            title="Spotlight Space x BLÅ"
                            description={`Dyk ned i Aarhus' musikalske hidden gems med "Spotlight Space" et event-koncept dedikeret til at showcase spændende up-and-coming artister!`}
                        />
                    </Carousel>
                </div>
            </Container>
        </Section>
    );
}
