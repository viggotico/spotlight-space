import './globals.css';
import 'react-multi-carousel/lib/styles.css';

import type { Metadata } from 'next';
import { siteConfig } from '@/site.config';
import { Inter as FontSans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';
import { getPostBySlug } from '@/lib/wordpress';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const meta_site_description_html = (await getPostBySlug('meta-site-description')).content.rendered;

const meta_site_description = meta_site_description_html
    .replaceAll('<p>', '')
    .replaceAll('</p>', '')
    .replaceAll('<br>', ' ');

const font = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: siteConfig.site_name,
    description: meta_site_description,
    metadataBase: new URL(siteConfig.site_domain),
    alternates: {
        canonical: `${siteConfig.site_domain}/`,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={cn('min-h-screen font-sans antialiased', font.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar id="navbar" />
                    {children}
                    <Footer site_description={meta_site_description_html} />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
