import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="px-8 lg:px-32 py-8 bg-foreground mt-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <Avatar className="size-8 border rounded-full">
            <AvatarImage src={"/logo.jpg"} />
          </Avatar>
          <h6 className="text-sm font-bungee font-bold text-background">
            Eventify
          </h6>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full px-4">
            <span className="text-xs text-muted-foreground w-full text-center inline-flex justify-center items-center gap-2">
                <Mail size={14}/> nkca122@gmail.com
            </span>
             <span className="text-xs text-muted-foreground w-full text-center inline-flex justify-center items-center gap-2">
                <Phone size={14}/> +91-9625362621
            </span>
             <span className="text-xs text-muted-foreground w-full text-center inline-flex justify-center items-center gap-2">
                <Linkedin size={14}/> linkedin.com/in/nkca122
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
