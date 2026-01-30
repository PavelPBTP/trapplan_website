import { LINKEDIN_CARDS } from "@/lib/data/linkedin";

function LinkedInIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-black text-[11px] font-extrabold leading-none text-white">
      in
    </span>
  );
}

function Avatar({ variant }: { variant: "brand" | "person" }) {
  if (variant === "brand") {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0A5B]">
        <div className="h-7 w-7 rounded-[10px] bg-black/15" />
      </div>
    );
  }

  return (
    <div className="h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-sky-500" />
  );
}

function Card({
  name,
  subtitle,
  buttonLabel,
  href,
  avatarVariant,
}: {
  name: string;
  subtitle: string;
  buttonLabel: string;
  href: string;
  avatarVariant: "brand" | "person";
}) {
  return (
    <article className="group flex min-h-[150px] w-[320px] max-w-full shrink-0 flex-col rounded-[24px] border border-[#E5E5E5] bg-white px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.03)] transition-shadow duration-200 hover:shadow-[0_18px_42px_rgba(0,0,0,0.08)]">
      <div className="flex items-start gap-4">
        <Avatar variant={avatarVariant} />
        <div className="min-w-0">
          <h3 className="text-[18px] font-extrabold leading-tight tracking-tight text-black">
            {name}
          </h3>
          <p className="mt-2 whitespace-pre-line text-[13px] leading-5 text-black/55">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-transparent px-4 py-2 text-[13px] font-semibold text-[#FF0A5B] transition-colors duration-200 hover:bg-[#FF0A5B]/10"
        >
          {buttonLabel}
          <LinkedInIcon />
        </a>
      </div>
    </article>
  );
}

export default function FollowLinkedIn() {
  return (
    <section className="bg-[#F3F3F3] pb-20 pt-14">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[32px] font-extrabold leading-none tracking-tight text-black sm:text-[36px]">
            Follow us on Linkedin
          </h2>
          <div className="hidden text-[13px] font-semibold text-black/45 sm:block">
            Social
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6 rounded-[24px] bg-[#F9F9F9] p-4 sm:p-5 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
                {LINKEDIN_CARDS.slice(0, 2).map((c) => (
                  <Card
                    key={c.name}
                    name={c.name}
                    subtitle={c.subtitle}
                    buttonLabel={c.buttonLabel}
                    href={c.href}
                    avatarVariant={c.avatarVariant}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:flex lg:items-center">
              <div className="rounded-[24px] border border-black/5 bg-white/60 px-6 py-6">
                <div className="text-[12px] font-semibold tracking-wide text-black/45">
                  SOCIAL PROOF
                </div>
                <div className="mt-3 text-[20px] font-extrabold leading-tight tracking-tight text-black">
                  Weekly insights on game marketing
                </div>
                <p className="mt-3 text-[14px] leading-6 text-black/60">
                  Follow Trap Plan and Pavel for practical playbooks, case studies, and growth notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
