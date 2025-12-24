'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Check } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, 'Navn skal være mindst 2 tegn'),
    email: z.string().email('Ugyldig e-mail adresse'),
    roles: z.array(z.string()).min(1, 'Vælg mindst én post'),
    message: z.string().min(10, 'Fortæl os lidt om dig selv (mindst 1 sætning)'),
});

export type VolunteerFormProps = {
    roles: VolunteerFormRole[];
    className?: string;
};

export type VolunteerFormRole = {
    id: string;
    label: string;
};

export function VolunteerForm({ className, roles }: VolunteerFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            roles: [],
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        alert('Ansøgning sendt!');
        location.reload();
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn('space-y-8 w-full max-w-md', className)}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Navn</FormLabel>
                            <FormControl>
                                <Input placeholder="Dit fulde navn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="din@email.dk" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="roles"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base text-[0.9em]">
                                    Hvilke poster er du interesseret i?
                                </FormLabel>
                                <FormDescription>Vælg en eller flere af disse.</FormDescription>
                            </div>
                            {roles.map(role => (
                                <FormField
                                    key={role.id}
                                    control={form.control}
                                    name="roles"
                                    render={({ field }) => {
                                        return (
                                            <FormItem className="flex flex-row gap-3 !space-x-0 !space-y-0 justify-start items-center text-[0.8em] cursor-pointer">
                                                <FormControl>
                                                    <Input
                                                        type="checkbox"
                                                        className="h-6 w-6 appearance-none relative peer shrink-0 checked:bg-primary checked:border-primary invalid:border-destructive cursor-pointer"
                                                        checked={field.value?.includes(role.id)}
                                                        onChange={e => {
                                                            return e.target.checked
                                                                ? field.onChange([
                                                                      ...field.value,
                                                                      role.id,
                                                                  ])
                                                                : field.onChange(
                                                                      field.value?.filter(
                                                                          value => value !== role.id
                                                                      )
                                                                  );
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer">
                                                    {role.label}
                                                </FormLabel>
                                                <Check
                                                    strokeWidth={4}
                                                    className="h-5 w-5 !pl-1 absolute hidden peer-checked:block text-white"
                                                />
                                            </FormItem>
                                        );
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ansøgning</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Fortæl os lidt om hvorfor du vil være frivillig..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Tøv ikke med at sende én samlet ansøgning for en gruppe af flere
                                personer, fx hvis dig og din ven/veninde gerne vil være frivillig sammen.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Send Ansøgning
                </Button>
            </form>
        </Form>
    );
}
