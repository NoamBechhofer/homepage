import { Button } from "@/components/ui/button";
import { Github } from "feather-icons-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="text-center">
      Written in Next.js.{" "}
      <Button variant="link" asChild>
        <Link href="https://github.com/NoamBechhofer/homepage">
          See the repo. <Github size={16} className="inline-block" />
        </Link>
      </Button>
      <br />© {year} Noam Bechhofer
    </div>
  );
}
