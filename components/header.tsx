import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, Home, BookUser, XCircle } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Registration from "@/components/registration";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-32">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            width={36}
            height={36}
            alt="Eventify logo"
            className="rounded-md"
          />
          <div className="flex flex-col leading-tight">
            <p className="text-lg font-bold font-bungee">Eventify</p>
            <span className="text-[11px] text-muted-foreground">
              Discover events around you
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          
          {/* Registration */}
          <Suspense fallback={<Spinner className="size-6" />}>
            <Registration />
          </Suspense>

          {/* Drawer Menu */}
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="rounded-lg px-3 hover:bg-muted transition"
              >
                <Menu size={20} />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="font-varela-round">
              
              {/* Header */}
              <DrawerHeader className="border-b pb-4">
                <DrawerTitle className="flex items-center justify-between text-2xl font-bold font-bungee">
                  Eventify

                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      className="size-9 rounded-full hover:bg-red-500/10"
                    >
                      <XCircle className="size-5 text-red-500" />
                    </Button>
                  </DrawerClose>
                </DrawerTitle>

                <DrawerDescription className="text-xs text-muted-foreground">
                  Navigation Menu
                </DrawerDescription>
              </DrawerHeader>

              {/* Nav Items */}
              <div className="px-4 py-6 space-y-2">

                <Link href="/">
                  <div className="group flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition hover:bg-muted hover:border-primary/30">
                    <Home size={18} className="text-muted-foreground group-hover:text-primary" />
                    Home
                  </div>
                </Link>

                <Link href="/about">
                  <div className="group flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition hover:bg-muted hover:border-primary/30">
                    <BookUser size={18} className="text-muted-foreground group-hover:text-primary" />
                    About
                  </div>
                </Link>

              </div>

              {/* Footer */}
              <DrawerFooter className="border-t px-4 py-4 text-xs text-muted-foreground">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">
                    Contact
                  </p>
                  <p>nkca122@gmail.com</p>
                  <Separator className="my-2 opacity-30" />
                  <p>© {new Date().getFullYear()} Eventify</p>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}