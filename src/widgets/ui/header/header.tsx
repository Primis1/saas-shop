import * as React from "react";
import Image from "next/image";
import { ThemeToggler } from "@/entities";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Link } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-screen">
      <nav className="container">
        <div className="py-3">
          <div className="flex items-center justify-between">
            <a className="text-lg flex items-center dark:hidden" href="/">
              <Image
                className="mr-3"
                src={`/favicon-black.ico`}
                alt={"logo"}
                width={20}
                height={20}
              />
              Crystal
            </a>
            <a className="text-lg hidden items-center dark:flex" href="/">
              <Image
                className="mr-3"
                src={`/favicon-white.ico`}
                alt={"logo"}
                width={20}
                height={20}
              />
              Crystal
            </a>
            <div>
              <div className={`flex w-300 space-x-10 pl-10`}>
                <ThemeToggler />
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button className="" variant="outline">
                        My Account
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                      // onClick={() =>
                      //   signOut({
                      //     callbackUrl: `${window.location.origin}`,
                      //   })
                      // }
                      >
                        <Link href={"/sign-up"}>Sign Up</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                      // onClick={() =>
                      //   signOut({
                      //     callbackUrl: `${window.location.origin}`,
                      //   })
                      // }
                      >
                        <Link href={"/log-In"}>Log In</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
