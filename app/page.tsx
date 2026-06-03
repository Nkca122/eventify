import EventDisplay, { EventDisplaySkeleton } from "@/components/event-display";
import Image from "next/image";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 120;

export default async function Home() {
  return (
    <main className="space-y-16">

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-32">

          {/* Text */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-blue-500 lg:text-5xl font-bungee">
              What’s On
            </h1>

            <p className="text-lg text-muted-foreground">
              Never miss what’s happening around you
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
              Discover concerts, festivals, exhibitions, workshops, and local
              experiences happening across your city. Browse by interest,
              save your favourites, and stay updated effortlessly.
            </p>

            {/* CTA hint */}
            <div className="flex gap-3 pt-2">
              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-xs text-blue-500">
                🎟 Live Events
              </span>
              <span className="rounded-full bg-muted px-4 py-2 text-xs">
                🔥 Trending Now
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/hero.jpg"
                alt="Hero"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EVENTS ---------------- */}
      <section className="mx-auto max-w-7xl px-6 lg:px-32 space-y-8">
        
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bungee">Events</h2>
          <p className="text-xs text-muted-foreground">
            Updated every 2 minutes
          </p>
        </div>

        <Suspense fallback={<EventDisplaySkeleton />}>
          <EventDisplay />
        </Suspense>
      </section>
    </main>
  );
}