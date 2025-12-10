"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/resume">Resume</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>View my professional experience and skills.</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/secrets">Secrets</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>Generate secure random secrets.</p>
          </TooltipContent>
        </Tooltip>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Note Keeper</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <p className="text-muted-foreground text-sm leading-tight">
                  See where I got my start at full stack web development. This
                  project was my submission for the final project at Columbia
                  University&apos;s Full Stack Web Development course.
                </p>
              </li>
              <ListItem
                href="https://full-stack-columbia-final.vercel.app/"
                title="Live Site"
              >
                Check out the deployed application.
              </ListItem>
              <ListItem
                href="https://github.com/NoamBechhofer/full-stack-final/tree/main"
                title="Source code"
              >
                You can also check out the repo.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
