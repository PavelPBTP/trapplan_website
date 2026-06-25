import { permanentRedirect } from "next/navigation";
import { getRequestLocale } from "@/lib/i18n.server";
import { withLocale } from "@/lib/i18n.shared";

// The co-publishing offering moved to the dedicated Trap Plan Publishing page.
// Permanent (308) redirect so the retired URL passes link equity and is dropped from the index.
export default async function GamesCoPublishingRedirect() {
  const locale = await getRequestLocale();
  permanentRedirect(withLocale(locale, "/publishing"));
}
