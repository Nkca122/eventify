import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-foreground px-6 py-10 lg:px-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        
        {/* Top Section */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Avatar className="size-10 border">
            <AvatarImage src="/logo.jpg" />
          </Avatar>

          <h6 className="text-lg font-bold text-background tracking-wide">
            Eventify
          </h6>

          <p className="text-xs text-muted-foreground max-w-md">
            Discover, explore, and join events happening around you.
          </p>
        </div>

        <Separator className="opacity-20" />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          
          {/* Email */}
          <a
            href="mailto:nkca122@gmail.com"
            className="group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs text-muted-foreground transition-all hover:bg-white/5 hover:text-white"
          >
            <Mail size={14} className="transition-colors group-hover:text-primary" />
            <span className="break-all">nkca122@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919625362621"
            className="group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs text-muted-foreground transition-all hover:bg-white/5 hover:text-white"
          >
            <Phone size={14} className="transition-colors group-hover:text-primary" />
            <span>+91 96253 62621</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nkca122"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-xs text-muted-foreground transition-all hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={14} className="transition-colors group-hover:text-primary" />
            <span>linkedin.com/in/nkca122</span>
          </a>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Eventify. Built with Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
}