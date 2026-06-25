import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesRows from "@/components/sections/ServicesRows";
import PublishingPromo from "@/components/sections/PublishingPromo";
import Cases from "@/components/sections/Cases";
import ReadyToGoPackages from "@/components/sections/ReadyToGoPackages";
import GetAQuote, { type GetAQuoteTranslations } from "@/components/sections/GetAQuote";
import Footer from "@/components/sections/Footer";
import { getRequestLocale } from "@/lib/i18n.server";
import { t } from "@/lib/copy";

export default async function Home() {
  const locale = await getRequestLocale();

  const quoteTx: GetAQuoteTranslations = {
    eyebrow: t(locale, "form.get_a_quote.eyebrow"),
    title: t(locale, "form.get_a_quote.title"),
    subtitle: t(locale, "form.get_a_quote.subtitle"),
    ceoTitle: t(locale, "get_a_quote.ceo_title"),
    messageWhatsapp: t(locale, "form.get_a_quote.message_whatsapp"),
    fieldName: t(locale, "form.get_a_quote.field_name"),
    fieldCompany: t(locale, "form.get_a_quote.field_company"),
    fieldEmail: t(locale, "form.get_a_quote.field_email"),
    fieldBudget: t(locale, "form.get_a_quote.field_budget"),
    budgetPlaceholder: t(locale, "form.get_a_quote.budget_placeholder"),
    fieldMessage: t(locale, "form.get_a_quote.field_message"),
    submitSending: t(locale, "form.get_a_quote.submit_sending"),
    submitSend: t(locale, "form.get_a_quote.submit_send"),
    footnote: t(locale, "form.get_a_quote.footnote"),
    success: t(locale, "form.get_a_quote.success"),
    errorGeneric: t(locale, "form.get_a_quote.error_generic"),
    errorNetwork: t(locale, "form.get_a_quote.error_network"),
  };

  return (
    <>
      <Hero locale={locale} />
      <TrustedBy locale={locale} />
      <ServicesRows locale={locale} />
      <PublishingPromo locale={locale} />
      <Cases locale={locale} />
      <ReadyToGoPackages locale={locale} />
      <GetAQuote translations={quoteTx} />
      <Footer />
    </>
  );
}
