"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/resume">
                    <div className="font-medium">Resume</div>
                    <div className="text-muted-foreground">
                      View my professional experience and skills.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <>
                    <div className="font-medium">Note Keeper</div>
                    <div className="text-muted-foreground">
                      See where I got my start at full stack web development.
                      This project was my submission for the final project at
                      Columbia University&apos;s Full Stack Web Development
                      course.
                      <br />
                      <Button variant="link" asChild>
                        <Link href="https://full-stack-columbia-final.vercel.app/">
                          Check it out here.
                        </Link>
                      </Button>
                      <Button variant="link" asChild>
                        <Link href="https://github.com/NoamBechhofer/full-stack-final/tree/main">
                          You can also check out the repo.
                        </Link>
                      </Button>
                    </div>
                  </>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="https://github.com/NoamBechhofer/homepage">
                    <div className="font-medium">This Website</div>
                    <div className="text-muted-foreground">
                      The code for this very website is open source. Feel free
                      to check it out.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">
                      My thought to your thought. I don&apos;t have a blog yet,
                      but maybe some day I&apos;ll write one.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
