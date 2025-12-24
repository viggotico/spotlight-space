import Balancer from 'react-wrap-balancer';

import { Section, Container } from '@/components/craft';
import { Accordion } from '@/components/ui/accordion';
import { Title } from '@/components/ui/title';
import { VolunteerForm, type VolunteerFormRole } from '@/components/ui/volunteer-form';

export default function Volunteer() {
    const volunteerRoles: (VolunteerFormRole & { description: string })[] = [
        {
            id: 'baren',
            label: 'Baren',
            description: `Her hjælper du os med at stå ved baren som bartender.`,
        },
        {
            id: 'opsætning',
            label: 'Opsætning',
            description: `Her hjælper du os med at sætte tingene op før et event/projekt.`,
        },
        {
            id: 'oprydning',
            label: 'Oprydning',
            description: `Her hjælper du os med at rydde op efter et event/projekt.`,
        },
        {
            id: 'billetsalg',
            label: 'Billetsalg',
            description: `Her hjælper du os med at stå for salg af billetter ved indgangen.`,
        },
    ] as const;

    return (
        <Section className="py-0 md:py-0">
            <Container className="relative flex flex-col justify-center items-center gap-10">
                <div className="w-full flex flex-col justify-center items-center">
                    <Title value="Bliv Frivillig" />
                    <article className="text-center mb-16 max-w-[800px]">
                        <p>
                            <Balancer>
                                Går du med et lille ønske om at være en del af Spotlight Space?
                                <br />
                                <br />
                                Det har du mulighed for som frivillig! Vi søger periodisk frivillige
                                til vores næste events/projekter.
                                <br />
                                <br />
                                Tidligere erfaringer som frivillig er ikke et krav - vi hjælper dig
                                med at komme godt i gang.
                                <br />
                                <br />
                                Posterne du kan vælge imellem er en eller flere af disse:
                            </Balancer>
                        </p>
                        <br />
                        <Accordion
                            hideChevron
                            className="max-w-[400px] mx-auto"
                            titleClassName="justify-center font-normal"
                            contentClassName="text-center"
                            items={volunteerRoles.map(x => ({
                                title: x.label,
                                content: x.description,
                            }))}
                        />
                        <br />
                        <p>
                            <Balancer>
                                For events eller projekter med større budgetter kan der være tale om
                                løn/honorar.
                                <br />
                                <br />
                                Lyder det som noget for dig?
                                <br />
                                Send en ansøgning - vi læser dem alle!
                                <br />
                                <br />
                            </Balancer>
                        </p>
                    </article>
                    <Title value="Ansøg her!" />
                    <VolunteerForm roles={volunteerRoles} className="mb-16" />
                </div>
            </Container>
        </Section>
    );
}
