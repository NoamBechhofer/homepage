import { NextResponse } from "next/server";
import resume from "./resume.json";
export function GET() {
  return NextResponse.json(resume);
}
