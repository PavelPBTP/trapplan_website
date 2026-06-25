/**
 * Content for the dark package detail template (redesign 2026).
 * English-first; localized in a later phase. The Reddit entry mirrors the
 * design handoff verbatim; the others use the standard deliverables for each
 * service.
 */

export interface PackageStat {
  value: string;
  label: string;
}

export interface IncludedItem {
  title: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface MetaRow {
  label: string;
  value: string;
}

export interface PackageDetail {
  href: string;
  category: string;
  title: string;
  lede: string;
  price: string;
  priceNumeric: string;
  stats: PackageStat[];
  includedTitle: string;
  included: IncludedItem[];
  processTitle: string;
  process: ProcessStep[];
  meta: MetaRow[];
  ctaTitle: string;
  ctaBody: string;
  related: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PACKAGE_DETAILS: Record<string, PackageDetail> = {
  "/reddit-launch-support": {
    href: "/reddit-launch-support",
    category: "Reddit · wishlists",
    title: "Reddit Launch Support",
    lede:
      "We run your Reddit presence from your studio’s official account — 15 targeted posts across the right subreddits, written to fit each community and built to drive Steam wishlists.",
    price: "€2,500",
    priceNumeric: "2500",
    stats: [
      { value: "15", label: "Targeted posts" },
      { value: "8–12", label: "Subreddits" },
      { value: "3–4 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Subreddit research", body: "We map the communities that actually fit your game — rules, tone, and what gets removed — so every post lands." },
      { title: "15 tailored posts", body: "Copy written per community — not copy-pasted. Each post fits the subreddit’s voice and links back to your Steam page." },
      { title: "Posting & moderation", body: "Published from your official account on the right cadence, with comment monitoring through the first 48 hours." },
      { title: "Wishlist-first framing", body: "Every post is built to move players to your Steam page and convert — not just collect upvotes." },
      { title: "Performance report", body: "A clean summary of reach, engagement and click-through — with what worked and what to repeat next time." },
      { title: "Safe, rules-aware", body: "We post like a member of each community, not a marketer — so your studio keeps its credibility intact." },
    ],
    processTitle: "From kickoff to report in 3–4 weeks",
    process: [
      { step: "W1", title: "Brief & research", body: "You share the game, key art and Steam page. We map subreddits, rules and angles, and align on the posting plan." },
      { step: "W2", title: "Copy & approval", body: "We write all 15 posts tailored per community and send them for your sign-off. You stay in control of every word." },
      { step: "W3", title: "Publish & monitor", body: "Posts go live on the right cadence from your account. We watch comments and adjust to keep momentum positive." },
      { step: "W4", title: "Report & next steps", body: "You get a clear performance report and a recommendation on what to scale — Reddit, influencers, or paid." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Account used", value: "Your official" },
      { label: "Reporting", value: "Included" },
    ],
    ctaTitle: "Ready to run your Reddit launch?",
    ctaBody: "Tell us about your game. We reply within one business day with a plan and a clear start date.",
    related: ["/pr-starter-pack", "/influencer-micro-campaign", "/tiktok-package-20-videos"],
    metaTitle: "Reddit Launch Support — wishlist-driven Reddit campaign | TrapPlan",
    metaDescription:
      "15 targeted Reddit posts from your studio’s official account, written per community to drive Steam wishlists. Fixed €2,500.",
  },

  "/pr-starter-pack": {
    href: "/pr-starter-pack",
    category: "PR · earned media",
    title: "PR Starter Pack",
    lede:
      "PR outreach that gets your game covered — a readable press release, a targeted media list, personalized pitches and follow-ups, built for credibility and Steam wishlists.",
    price: "€3,000",
    priceNumeric: "3000",
    stats: [
      { value: "1", label: "Press release" },
      { value: "30+", label: "Outlets pitched" },
      { value: "2–3 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Press release", body: "A clear, embargo-ready release that journalists can actually use — no fluff, no jargon." },
      { title: "Targeted media list", body: "The outlets and journalists that cover your genre and platform, not a generic blast list." },
      { title: "Personalized pitches", body: "Each pitch written for the recipient, with the hook that fits their beat and audience." },
      { title: "Follow-ups", body: "Polite, well-timed follow-ups so your story doesn’t get lost in a full inbox." },
      { title: "Coverage tracking", body: "We track pickups and clips and share them as they land, with a final summary." },
      { title: "Assets prep", body: "We help package key art, screenshots and fact sheet so press have everything they need." },
    ],
    processTitle: "From angle to coverage in 2–3 weeks",
    process: [
      { step: "W1", title: "Brief & angle", body: "We find the story worth telling and align on the hook, timing and embargo." },
      { step: "W2", title: "Write & build list", body: "We draft the release and assets and build a targeted, genre-fit media list." },
      { step: "W3", title: "Pitch & follow up", body: "We pitch journalists individually and follow up to maximize pickups." },
      { step: "W4", title: "Report & clips", body: "You get the full coverage report and contact list to keep for the future." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Embargo", value: "Supported" },
      { label: "Contact list", value: "Yours to keep" },
    ],
    ctaTitle: "Ready to get your game covered?",
    ctaBody: "Tell us about your game and the moment you’re building toward. We’ll come back with a PR plan and a start date.",
    related: ["/reddit-launch-support", "/influencer-micro-campaign", "/gameplay-trailer"],
    metaTitle: "PR Starter Pack — press release, pitches & media list | TrapPlan",
    metaDescription:
      "Earned-media PR for your game: a readable press release, targeted pitches, follow-ups and the full contact list. Fixed €3,000.",
  },

  "/influencer-micro-campaign": {
    href: "/influencer-micro-campaign",
    category: "Influencers · UGC",
    title: "Influencer Micro Campaign",
    lede:
      "We identify niche creators, handle outreach and coordination, and track performance — a cost-efficient, scalable campaign built for meaningful reach.",
    price: "€5,000",
    priceNumeric: "5000",
    stats: [
      { value: "8–12", label: "Creators" },
      { value: "3", label: "Platforms" },
      { value: "4 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Creator research", body: "We shortlist niche creators whose audience and tone genuinely fit your game." },
      { title: "Outreach & negotiation", body: "We handle the messy part — outreach, rates and signed scopes — so you don’t have to." },
      { title: "Briefs & coordination", body: "Clear briefs and scheduling that keep creators on-message and on-time." },
      { title: "Content activations", body: "Streams, videos or shorts timed to your beat, native to each platform." },
      { title: "Performance tracking", body: "Views, engagement and click-through tracked across the campaign." },
      { title: "Wrap-up report", body: "A clean summary with what worked and who to re-book next time." },
    ],
    processTitle: "From shortlist to report in ~4 weeks",
    process: [
      { step: "W1", title: "Strategy & shortlist", body: "We align on goals and propose a vetted creator shortlist with rationale." },
      { step: "W2", title: "Outreach & sign-off", body: "We negotiate rates and scopes and get your approval on the final lineup." },
      { step: "W3", title: "Activate & monitor", body: "Content goes live; we coordinate, monitor and keep momentum up." },
      { step: "W4", title: "Report & next steps", body: "You get results tied to reach and a recommendation on what to scale." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Platforms", value: "Twitch · YT · TikTok" },
      { label: "Reporting", value: "Included" },
    ],
    ctaTitle: "Ready to reach the right creators?",
    ctaBody: "Tell us about your game and audience. We’ll come back with a creator plan and a clear start date.",
    related: ["/tiktok-package-20-videos", "/pr-starter-pack", "/reddit-launch-support"],
    metaTitle: "Influencer Micro Campaign — niche creator activations | TrapPlan",
    metaDescription:
      "Niche creator identification, outreach, coordination and tracking — a scalable influencer campaign for meaningful reach. Fixed €5,000.",
  },

  "/tiktok-package-20-videos": {
    href: "/tiktok-package-20-videos",
    category: "TikTok · short-form",
    title: "TikTok Package: 20 videos",
    lede:
      "20 custom TikTok videos tailored for your game. We handle concept, production and platform-native formatting, aligned with trends and audience behaviour.",
    price: "€2,000",
    priceNumeric: "2000",
    stats: [
      { value: "20", label: "Videos" },
      { value: "9:16", label: "Native format" },
      { value: "2–3 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Concepts & hooks", body: "Scroll-stopping hooks built around your game’s most shareable moments." },
      { title: "Scripting", body: "Tight scripts written for short-form pacing and platform behaviour." },
      { title: "Production & editing", body: "We produce and edit all 20 videos — capture, cuts, captions and sound." },
      { title: "Native formatting", body: "Vertical 9:16, platform-safe text and pacing tuned for the feed." },
      { title: "Trend alignment", body: "Formats and audio chosen to ride current trends, not fight them." },
      { title: "Delivery-ready files", body: "Final files ready to post, plus variations you can reuse." },
    ],
    processTitle: "From concept to delivery in 2–3 weeks",
    process: [
      { step: "W1", title: "Concept & references", body: "We align on angles, hooks and references that fit your game." },
      { step: "W2", title: "Production", body: "We capture and produce the footage for all 20 videos." },
      { step: "W3", title: "Editing & formatting", body: "We edit, caption and format every video for the feed." },
      { step: "W4", title: "Delivery", body: "You get all delivery-ready files plus a posting recommendation." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Format", value: "9:16 vertical" },
      { label: "Delivery", value: "Ready to post" },
    ],
    ctaTitle: "Ready for 20 scroll-stopping videos?",
    ctaBody: "Tell us about your game. We’ll come back with a content plan and a clear start date.",
    related: ["/influencer-micro-campaign", "/gameplay-trailer", "/reddit-launch-support"],
    metaTitle: "TikTok Package: 20 videos — short-form for games | TrapPlan",
    metaDescription:
      "20 custom, trend-aligned TikTok videos for your game — concept, production and native formatting handled end to end. Fixed €2,000.",
  },

  "/paid-ads-setup": {
    href: "/paid-ads-setup",
    category: "Paid media · setup",
    title: "Paid Ads Setup",
    lede:
      "We set up your paid campaigns end to end — channel selection, tracking, targeting and creative placement — then hand the account over at launch.",
    price: "€2,000",
    priceNumeric: "2000",
    stats: [
      { value: "Multi", label: "Channel" },
      { value: "Tracking", label: "Ready" },
      { value: "1–2 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Channel selection", body: "We pick the channels that fit your game, budget and goals — no guesswork." },
      { title: "Account & tracking setup", body: "Accounts, pixels and conversion tracking configured correctly from day one." },
      { title: "Audience & targeting", body: "Audiences and targeting structured for control and clean measurement." },
      { title: "Creative placement", body: "Your creative set up across the right placements and formats." },
      { title: "Budget structure", body: "A clear budget structure you can scale without breaking tracking." },
      { title: "Clean handover", body: "The account is handed to you at launch, with documentation." },
    ],
    processTitle: "From audit to handover in 1–2 weeks",
    process: [
      { step: "W1", title: "Audit & plan", body: "We review goals and assets and propose a channel and budget plan." },
      { step: "W1", title: "Build & configure", body: "We build the campaigns, audiences and tracking." },
      { step: "W2", title: "QA & launch", body: "We QA everything end to end and launch the campaigns." },
      { step: "W2", title: "Handover & docs", body: "You get the account and documentation to run it yourself." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Handover", value: "At launch" },
      { label: "Ongoing mgmt", value: "Not included" },
    ],
    ctaTitle: "Ready to launch paid the right way?",
    ctaBody: "Tell us about your game and budget. We’ll come back with a setup plan and a clear start date.",
    related: ["/gameplay-trailer", "/influencer-micro-campaign", "/reddit-launch-support"],
    metaTitle: "Paid Ads Setup — channels, tracking & targeting | TrapPlan",
    metaDescription:
      "End-to-end paid campaign setup: channel selection, tracking, targeting and creative placement, handed to you at launch. Fixed €2,000.",
  },

  "/gameplay-trailer": {
    href: "/gameplay-trailer",
    category: "Video · trailer",
    title: "Gameplay Trailer",
    lede:
      "A high-quality gameplay trailer crafted for your game — clear storytelling, polished capture, pacing and editing, delivery-ready for Steam, YouTube and press.",
    price: "€3,000",
    priceNumeric: "3000",
    stats: [
      { value: "1", label: "Trailer" },
      { value: "Steam", label: "Ready" },
      { value: "3–4 wk", label: "Timeline" },
    ],
    includedTitle: "Everything in the package",
    included: [
      { title: "Concept & storyboard", body: "We shape the story and structure before a single frame is cut." },
      { title: "Capture direction", body: "Direction on what to capture so the footage actually sells the game." },
      { title: "Editing & pacing", body: "Tight editing and pacing that holds attention to the final frame." },
      { title: "Sound design", body: "Music and sound that match the tone and lift the key beats." },
      { title: "Versioning", body: "Cuts sized for Steam, YouTube and social, not one-size-fits-all." },
      { title: "Source files", body: "You keep the deliverables and source files for future use." },
    ],
    processTitle: "From concept to delivery in 3–4 weeks",
    process: [
      { step: "W1", title: "Brief & concept", body: "We align on story, tone and the moments that matter most." },
      { step: "W2", title: "Capture & assembly", body: "We direct capture and assemble the first cut." },
      { step: "W3", title: "Edit & review", body: "We edit, add sound and iterate with your feedback." },
      { step: "W4", title: "Final cuts & delivery", body: "You get final cuts for every platform plus source files." },
    ],
    meta: [
      { label: "Reply time", value: "< 1 business day" },
      { label: "Formats", value: "Steam · YT · social" },
      { label: "Revisions", value: "Included" },
    ],
    ctaTitle: "Ready for a trailer that converts?",
    ctaBody: "Tell us about your game. We’ll come back with a creative plan and a clear start date.",
    related: ["/tiktok-package-20-videos", "/paid-ads-setup", "/pr-starter-pack"],
    metaTitle: "Gameplay Trailer — Steam-ready trailer production | TrapPlan",
    metaDescription:
      "A polished gameplay trailer with clear storytelling, capture direction, editing and sound — delivery-ready for Steam, YouTube and press. Fixed €3,000.",
  },
};

export const PACKAGE_ORDER = [
  "/reddit-launch-support",
  "/pr-starter-pack",
  "/influencer-micro-campaign",
  "/tiktok-package-20-videos",
  "/paid-ads-setup",
  "/gameplay-trailer",
];
