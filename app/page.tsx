import { Metadata } from "next";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/resume");
}

export const metadata: Metadata = {
  title: "Noam Bechhofer - Resume",
  description: `Web developer with a passion for software. Quick learner and \
great debugger. I am looking for an interesting position where I can grow and \
learn.`,
};
