import type { Metadata } from "next";
import PackageTemplate from "@/components/sections/PackageTemplate";
import { PACKAGE_DETAILS } from "@/lib/data/packageDetails";
import { buildPackageMetadata } from "@/lib/packageMeta";
import { getRequestLocale } from "@/lib/i18n.server";

const HREF = "/influencer-micro-campaign";

export async function generateMetadata(): Promise<Metadata> {
  return buildPackageMetadata(await getRequestLocale(), HREF);
}

export default async function InfluencerMicroCampaignPage() {
  const locale = await getRequestLocale();
  return <PackageTemplate detail={PACKAGE_DETAILS[HREF]} locale={locale} />;
}
