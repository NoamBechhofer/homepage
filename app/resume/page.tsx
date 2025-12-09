import { Metadata } from "next";
import Resume from "./Resume";

export default function Page() {
  return <Resume />;
}

export const metadata: Metadata = {
  title: "Resume",
  description: `Web developer with a passion for software. Quick learner and \
great debugger. I am looking for an interesting position where I can grow and \
learn.`,
};
