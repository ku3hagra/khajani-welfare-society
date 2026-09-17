import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";
export const metadata: Metadata = { title: "Projects & Initiatives", description: "Verified projects and initiatives with geography, status, outcomes, imagery and related stories." };
export default function Page(){return <InstitutionalPage eyebrow="Projects & Initiatives" title="Work shown with context, not as a catalogue of certificates." intro="This area will hold verified projects and initiatives with geography, status, outcomes, imagery and related stories." note="Final project entries will be CMS-managed and status-verified."/>}
