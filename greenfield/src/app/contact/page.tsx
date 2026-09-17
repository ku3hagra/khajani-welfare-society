import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/pages/InstitutionalPage";
export const metadata: Metadata = { title: "Contact", description: "Verified contact details, map information and enquiry routes for Khajani Welfare Society." };
export default function Page(){return <InstitutionalPage eyebrow="Contact" title="Connect with Khajani Welfare Society in Mathura." intro="Verified contact details, map information and enquiry routes will be published here before launch." note="Contact details will be CMS-managed so routine updates never require code edits."/>}
