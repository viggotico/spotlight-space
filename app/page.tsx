// Craft Imports
import { siteConfig } from "@/site.config";
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";
import { Button } from "@/components/ui/button";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section className="py-0 md:py-0">
      <div className="min-h-[50vh] relative">
        <video playsInline={true} autoPlay={true} muted={true} loop={true} className="absolute top-0 left-0 w-full h-full object-cover">
          <source type="video/mp4" src="https://spotfestival.dk/wp-content/uploads/2025/05/Web-front・Billede-og-video-2.mp4" />
          <source type="video/mp4" src="https://cms.roskilde-festival.dk/media/dlwnti3p/aftermovie-til-hjemmesidecover-1.mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold italic text-white text-center" style={{
          fontSize: "clamp(2rem, 10vw, 3rem)",
        }}>
          <p>Oplev vores næste event!</p>
        </div>
      </div>
      <Container>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-center max-w-[70vw]">
            <Balancer>{siteConfig.site_description}</Balancer>
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
              <span>23</span>
              <span className="text-3xl">events</span>
            </div>
            <div className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
              <span>5</span>
              <span className="text-3xl">projekter</span>
            </div>
            <div className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
              <span>30+</span>
              <span className="text-3xl">artister</span>
            </div>
            <div className="flex-1 p-6 border rounded-lg border-[hsl(var(--primary))] mt-6 flex flex-col gap-2 items-center text-7xl font-bold text-primary uppercase">
              <span>1000+</span>
              <span className="text-3xl">publikum</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <Link
              className="relative hover:scale-[1.02] transition-all aspect-[1/1]"
              href="/events"
            >
              <div className="h-full bg-cover bg-center rounded-md brightness-50 hover:brightness-100 transition-all" style={{ backgroundImage: "url('https://images.pexels.com/photos/1540338/pexels-photo-1540338.jpeg')" }}></div>
              <h1 className="block text-7xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Events</h1>
            </Link>
            <Link
              className="relative hover:scale-[1.02] transition-all aspect-[1/1]"
              href="/projects"
            >
              <div className="h-full bg-cover bg-center rounded-md brightness-50 hover:brightness-100 transition-all" style={{ backgroundImage: "url('https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg')" }}></div>
              <h1 className="block text-7xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Projekter</h1>
            </Link>
            <Link
              className="relative hover:scale-[1.02] transition-all aspect-[1/1]"
              href="/artists"
            >
              <div className="h-full bg-cover bg-center rounded-md brightness-50 hover:brightness-100 transition-all" style={{ backgroundImage: "url('https://images.pexels.com/photos/7586651/pexels-photo-7586651.jpeg')" }}></div>
              <h1 className="block text-7xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Artister</h1>
            </Link>
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
          This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>,
          created as a way to build WordPress sites with Next.js at rapid speed.
          This starter is designed with{" "}
          <a href="https://ui.shadcn.com">shadcn/ui</a>,{" "}
          <a href="https://craft-ds.com">craft-ds</a>, and Tailwind CSS. Use{" "}
          <a href="https://components.work">brijr/components</a> to build your
          site with prebuilt components. The data fetching and typesafety is
          handled in <code>lib/wordpress.ts</code> and{" "}
          <code>lib/wordpress.d.ts</code>.
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
            Posts{" "}
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
            Pages{" "}
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
            Authors{" "}
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
            Tags{" "}
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
            Categories{" "}
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
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a>
      </div>
    </main>
  );
};
