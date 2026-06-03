import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center px-6 lg:px-32">

      <section className="grid w-full grid-cols-1 lg:grid-cols-2 items-center gap-14">

        {/* ---------------- TEXT SECTION ---------------- */}
        <div className="flex flex-col gap-6">

          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Developer
          </span>

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold font-bungee leading-tight">
              Hi, I'm
            </h1>

            <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 font-bungee leading-tight">
              Nikunj Chauhan
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
            I am a highly motivated Computer Science & Engineering student at
            NIT Agartala. I enjoy building full-stack web applications and
            exploring AI/ML systems. I focus on writing clean, scalable
            software and enjoy turning ideas into real-world products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">

            <a
              href="https://www.linkedin.com/in/nkca122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-lg font-semibold">
                Hire Me
              </Button>
            </a>

            <a
              href="https://drive.google.com/file/d/1cfFMCs5w4jjjGXUdfE6aHhMCvksvj1aJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="rounded-lg font-semibold">
                View Resume
              </Button>
            </a>

          </div>
        </div>

        {/* ---------------- IMAGE SECTION ---------------- */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative group">

            {/* Glow background */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-2xl opacity-70 group-hover:opacity-100 transition" />

            {/* Image card */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl border">
              <Image
                src="/logo.jpg"
                alt="Nikunj Chauhan"
                width={500}
                height={500}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}