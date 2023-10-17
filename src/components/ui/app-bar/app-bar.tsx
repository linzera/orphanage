import NavMenu from "./nav-menu";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../button";
import { LogInIcon } from "lucide-react";
import { UserAvatar } from "../user-avatar";
import { ModeToggle } from "../theme-button";

const AppBar = () => {
  const session = useSession();

  return (
    <div className="fixed w-full border-b">
      <div className="flex h-16 items-center p-4">
        <div className="flex flex-1 items-center">
          <span className="leading">Orphanage</span>
        </div>
        <NavMenu />
        <div className="flex flex-1 justify-end gap-4">
          <ModeToggle />
          {!!session.data?.user ? (
            <UserAvatar user={session.data.user} />
          ) : (
            <Button className="gap-1" onClick={() => void signIn("discord")}>
              Login <LogInIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export { AppBar };
