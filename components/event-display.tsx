import { getEvents } from "@/lib/events/actions";
import { IEvent } from "@/lib/schemas/event";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Locate } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

/* ---------------------- SKELETON ---------------------- */

export function EventDisplaySkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Card key={idx} className="overflow-hidden">
          <Skeleton className="aspect-video w-full" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ---------------------- MAIN COMPONENT ---------------------- */

export default async function EventDisplay() {
  const events = (await getEvents()) || [];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {events.map((event: IEvent) => (
        <a
          href={event.link || "#"}
          key={event.title}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="h-full overflow-hidden border-muted/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 py-0">
            {/* IMAGE */}
            <CardHeader className="relative p-0 aspect-video overflow-hidden">
              <Image
                src={event.image || "https://placehold.co/1600x900"}
                alt={event.title || "placeholder"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* DATE BADGE */}
              <div className="absolute top-3 right-3 rounded-md bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {event.date}
              </div>
            </CardHeader>

            {/* CONTENT */}
            <CardContent className="p-5 flex flex-col gap-3">
              {/* TITLE */}
              <CardTitle className="line-clamp-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
                {event.title}
              </CardTitle>

              {/* VENUE */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                <Locate size={14} />
                {event.venue}
              </div>

              {/* DESCRIPTION */}
              <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {event.description}
              </CardDescription>
            </CardContent>

            {/* FOOTER */}
            <CardFooter className="px-5 pb-5 pt-0 mt-auto">
              <span className="text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
                View Event →
              </span>
            </CardFooter>
          </Card>
        </a>
      ))}
    </div>
  );
}
