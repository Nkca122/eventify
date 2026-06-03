import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default async function Registration() {
  const session = await auth();

  /* ---------------- NOT LOGGED IN ---------------- */
  if (!session) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button
          type="submit"
          variant="outline"
          className="rounded-lg font-semibold transition hover:bg-muted"
        >
          Sign in
        </Button>
      </form>
    );
  }

  const name = session?.user?.name || "User";
  const email = session?.user?.email;

  /* ---------------- LOGGED IN ---------------- */
  return (
    <DropdownMenu>
      
      {/* Avatar Trigger */}
      <DropdownMenuTrigger asChild>
        <button className="rounded-full transition hover:scale-105 focus:outline-none">
          <Avatar className="size-9 border shadow-sm">
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>
              {name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      {/* Menu */}
      <DropdownMenuContent
        className="w-56 rounded-xl p-2"
        align="end"
      >
        
        {/* User Info */}
        <div className="px-3 py-2">
          <p className="text-sm font-semibold">{name}</p>
          {email && (
            <p className="text-xs text-muted-foreground truncate">
              {email}
            </p>
          )}
        </div>

        <DropdownMenuSeparator />

        {/* Actions */}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start rounded-lg text-red-500 hover:text-red-600 hover:bg-red-500/10"
          >
            Sign out
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}