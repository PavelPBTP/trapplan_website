import type { Metadata } from "next";

import Footer from "@/components/sections/Footer";
import { getRequestLocale, withLocale } from "@/lib/i18n.server";
import { SUPPORTED_LOCALES } from "@/lib/i18n.shared";
import { t } from "@/lib/copy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const canonical = withLocale(locale, "/game-launch-blueprint");
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [l, withLocale(l, "/game-launch-blueprint")]),
  ) as Record<string, string>;

  const title = t(locale, "seo.game_launch_blueprint.title");
  const description = t(locale, "seo.game_launch_blueprint.desc");

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function SectionKicker({ children }: { children: string }) {
  return (
    <div className="text-[12px] font-semibold tracking-wide text-black/45">{children}</div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mt-3 text-[34px] font-extrabold leading-[1.05] tracking-tight text-black">
      {children}
    </h2>
  );
}

function CTAButtons({ locale }: { locale: Parameters<typeof t>[0] }) {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#FF1F6D] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_18px_42px_rgba(255,31,109,0.28)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.40)]"
      >
        {t(locale, "game_launch_blueprint.ui.cta.lets_talk")}
      </a>
    </div>
  );
}

function ContactField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold text-black/60">{label}</span>
      <input
        className="mt-2 w-full rounded-[12px] bg-[#F5F5F5] px-4 py-4 text-[14px] text-black placeholder:text-black/40 outline-none ring-2 ring-transparent transition-shadow focus:ring-[#FF1F6D]/40"
        placeholder={placeholder}
      />
    </label>
  );
}

export default async function GameLaunchBlueprintPage() {
  const locale = await getRequestLocale();

  const buildTogetherItems = [
    { label: t(locale, "game_launch_blueprint.ui.build.item.01") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.02") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.03") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.04") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.05") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.06") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.07") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.08") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.09") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.10") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.11") },
    { label: t(locale, "game_launch_blueprint.ui.build.item.12") },
  ];

  const faqs = [
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q1"),
      a: t(locale, "game_launch_blueprint.ui.faq.a1"),
    },
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q2"),
      a: t(locale, "game_launch_blueprint.ui.faq.a2"),
    },
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q3"),
      a: t(locale, "game_launch_blueprint.ui.faq.a3"),
    },
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q4"),
      a: t(locale, "game_launch_blueprint.ui.faq.a4"),
    },
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q5"),
      a: t(locale, "game_launch_blueprint.ui.faq.a5"),
    },
    {
      q: t(locale, "game_launch_blueprint.ui.faq.q6"),
      a: t(locale, "game_launch_blueprint.ui.faq.a6"),
    },
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,31,109,0.14),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:px-10 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[12px] font-semibold text-black/70">
                <span className="h-2 w-2 rounded-full bg-[#FF1F6D]" />
                {t(locale, "game_launch_blueprint.ui.hero.badge")}
              </div>

              <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-black sm:text-[54px]">
                {t(locale, "game_launch_blueprint.ui.hero.title")}
              </h1>

              <p className="mt-4 text-[18px] leading-7 text-black/70">
                {t(locale, "game_launch_blueprint.ui.hero.subtitle")}
              </p>

              <p className="mt-6 text-[15px] leading-7 text-black/65">
                {t(locale, "game_launch_blueprint.ui.hero.body")}
              </p>

              <CTAButtons locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "game_launch_blueprint.ui.workflow.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "game_launch_blueprint.ui.workflow.title")}</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-8 aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-black/10 bg-white">
                <div className="h-full w-full p-6">
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    {t(locale, "game_launch_blueprint.ui.workflow.image_placeholder")}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-16 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-black/10" />
                    </div>
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-14 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-black/10" />
                    </div>
                    <div className="h-full rounded-[18px] border border-black/10 bg-white p-4">
                      <div className="h-2 w-18 rounded-full bg-black/10" />
                      <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                      <div className="mt-2 h-2 w-3/5 rounded-full bg-black/10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase1.label")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase1.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase1.body")}
                  </p>
                </div>

                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase2.label")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase2.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase2.body")}
                  </p>
                </div>

                <div>
                  <div className="text-[12px] font-semibold tracking-wide text-black/45">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase3.label")}
                  </div>
                  <div className="mt-2 text-[16px] font-extrabold tracking-tight text-black">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase3.title")}
                  </div>
                  <p className="mt-3 text-[14px] leading-6 text-black/65">
                    {t(locale, "game_launch_blueprint.ui.workflow.phase3.body")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "game_launch_blueprint.ui.build.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "game_launch_blueprint.ui.build.title")}</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {buildTogetherItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-[14px] border border-black/10 bg-white">
                      <div className="h-full w-full p-3">
                        <div className="h-2 w-20 rounded-full bg-black/10" />
                        <div className="mt-3 h-2 w-full rounded-full bg-black/10" />
                        <div className="mt-2 h-2 w-3/4 rounded-full bg-black/10" />
                      </div>
                    </div>

                    <div className="mt-4 flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-[#FF1F6D]/70" />
                      <div className="text-[14px] font-semibold leading-6 text-black/75">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons locale={locale} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "game_launch_blueprint.ui.best_fit.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "game_launch_blueprint.ui.best_fit.title")}</SectionTitle>
              <p className="mt-5 text-[15px] leading-7 text-black/65">
                {t(locale, "game_launch_blueprint.ui.best_fit.body")}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <div className="absolute left-[34px] top-7 bottom-7 w-px bg-black/10" aria-hidden />

                <div className="space-y-7">
                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-[#FF1F6D]" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">
                        {t(locale, "game_launch_blueprint.ui.best_fit.status_label")}
                      </div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        {t(locale, "game_launch_blueprint.ui.best_fit.status_text")}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-black/20" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">
                        {t(locale, "game_launch_blueprint.ui.best_fit.need_label")}
                      </div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        {t(locale, "game_launch_blueprint.ui.best_fit.need_text")}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-[28px,1fr] gap-5">
                    <div className="pt-[2px]">
                      <span className="mt-[3px] block h-3 w-3 rounded-full bg-black/20" aria-hidden />
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold tracking-wide text-black/45">
                        {t(locale, "game_launch_blueprint.ui.best_fit.goal_label")}
                      </div>
                      <div className="mt-2 text-[15px] leading-7 text-black/65">
                        {t(locale, "game_launch_blueprint.ui.best_fit.goal_text")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <SectionKicker>{t(locale, "game_launch_blueprint.ui.process.kicker")}</SectionKicker>
          <SectionTitle>{t(locale, "game_launch_blueprint.ui.process.title")}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">
                {t(locale, "game_launch_blueprint.ui.process.step1.label")}
              </div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">
                {t(locale, "game_launch_blueprint.ui.process.step1.title")}
              </div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                {t(locale, "game_launch_blueprint.ui.process.step1.body")}
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">
                {t(locale, "game_launch_blueprint.ui.process.step2.label")}
              </div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">
                {t(locale, "game_launch_blueprint.ui.process.step2.title")}
              </div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                {t(locale, "game_launch_blueprint.ui.process.step2.body")}
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white px-7 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="text-[12px] font-semibold tracking-wide text-black/45">
                {t(locale, "game_launch_blueprint.ui.process.step3.label")}
              </div>
              <div className="mt-3 text-[16px] font-extrabold tracking-tight text-black">
                {t(locale, "game_launch_blueprint.ui.process.step3.title")}
              </div>
              <p className="mt-3 text-[14px] leading-6 text-black/60">
                {t(locale, "game_launch_blueprint.ui.process.step3.body")}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons locale={locale} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionKicker>{t(locale, "game_launch_blueprint.ui.faq.kicker")}</SectionKicker>
              <SectionTitle>{t(locale, "game_launch_blueprint.ui.faq.title")}</SectionTitle>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[18px] border border-black/10 bg-white px-6 py-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <div className="text-[15px] font-semibold leading-7 text-black">{item.q}</div>
                      <div className="mt-1 text-black/30 transition-transform duration-200 group-open:rotate-45">
                        <span className="text-[18px] leading-none">+</span>
                      </div>
                    </summary>
                    <div className="mt-3 text-[15px] leading-7 text-black/65">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <CTAButtons locale={locale} />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0F0F0F]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                {t(locale, "game_launch_blueprint.ui.contact.title")}
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/65">
                {t(locale, "game_launch_blueprint.ui.contact.body")}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  {t(locale, "game_launch_blueprint.ui.contact.tag.framework")}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  {t(locale, "game_launch_blueprint.ui.contact.tag.execution")}
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/70">
                  {t(locale, "game_launch_blueprint.ui.contact.tag.reporting")}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[24px] bg-white px-8 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                <div className="text-[12px] font-semibold tracking-wide text-black/45">
                  {t(locale, "game_launch_blueprint.ui.contact.card_kicker")}
                </div>
                <div className="mt-3 text-[22px] font-extrabold tracking-tight text-black">
                  {t(locale, "game_launch_blueprint.ui.contact.card_title")}
                </div>

                <form className="mt-7 space-y-5" action="#">
                  <ContactField
                    label={t(locale, "game_launch_blueprint.ui.contact.field.name.label")}
                    placeholder={t(
                      locale,
                      "game_launch_blueprint.ui.contact.field.name.placeholder",
                    )}
                  />
                  <ContactField
                    label={t(locale, "game_launch_blueprint.ui.contact.field.studio.label")}
                    placeholder={t(
                      locale,
                      "game_launch_blueprint.ui.contact.field.studio.placeholder",
                    )}
                  />
                  <ContactField
                    label={t(locale, "game_launch_blueprint.ui.contact.field.steam.label")}
                    placeholder={t(
                      locale,
                      "game_launch_blueprint.ui.contact.field.steam.placeholder",
                    )}
                  />

                  <button
                    type="button"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#FF1F6D] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(255,31,109,0.30)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_22px_52px_rgba(255,31,109,0.42)]"
                  >
                    {t(locale, "game_launch_blueprint.ui.contact.send")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
