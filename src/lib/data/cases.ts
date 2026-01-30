export type CaseStudy = {
  slug: string;
  href: string;
  title: string;
  date: string;
  client: string;
  excerpt: string;
  theme: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  body?: {
    title: string;
    paragraphs: string[];
    kpis?: {
      label: string;
      value: string;
    }[];
  }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "created-a-brief-for-youtube-and-twitch",
    href: "/studios-cases/created-a-brief-for-youtube-and-twitch",
    title: "Created a brief for YouTube and Twitch",
    date: "May 28, 2025",
    client: "Wargaming",
    excerpt: "Clear creator direction and execution system.",
    theme: "from-sky-700 via-blue-700 to-indigo-700",
    coverImage: {
      src: "/images/brief-case.png",
      alt: "Created a brief for YouTube and Twitch",
    },
    body: [
      {
        title: "Wargaming teams constantly create various materials for content creators",
        paragraphs: [
          "Wargaming teams constantly create various materials for content creators, many and varied - for YouTube, Twitch, separately for each promotion and joint promo with any IP. We edit them: we make them clearer, shorter, more readable.",
        ],
      },
      {
        title: "We figured out the game completely",
        paragraphs: [
          "To improve the briefs, we first need to have a good understanding of the game ourselves, the approaches to advertising it, what to say and what to do. Roughly speaking, we put ourselves in the shoes of a content creator who will receive this very brief.",
          "Therefore, we went deep: we played the game, leveled up quite a lot, logged into the press accounts that are given to each content creator.",
          "We asked a lot of questions both to the Warships and WOT teams, and to content creators - for example, for one brief, there were usually 3-4 rounds of questions and answers, because every time different nuances surfaced.",
        ],
      },
      {
        title: "Simplifying",
        paragraphs: [
          "The Wargaming team regularly prepares briefs for content creators - one for YouTube, a second for Twitch, then a YouTube campaign with Star Trek - and we edit them and bring them to the final version that is sent to content creators.",
        ],
      },
      {
        title: "We make sure that the briefs are consistent with each other",
        paragraphs: [
          "It is important that the information received by content creators is up-to-date, so that they do not do unnecessary work, do not break the timing, and have time to do everything on time.",
          "On these and many other little things, we agree on how to do it right - and we follow these rules. This is the beauty of working with a permanent team, and not involving anyone else, not wasting time yourself.",
        ],
      },
    ],
  },
  {
    slug: "dedicated-ad-campaign-for-the-czech-audience",
    href: "/studios-cases/dedicated-ad-campaign-for-the-czech-audience",
    title: "Dedicated ad campaign for the Czech audience",
    date: "May 28, 2025",
    client: "Wargaming",
    excerpt: "Dedicated advertising campaign with structured creator delivery.",
    theme: "from-emerald-700 via-teal-600 to-sky-500",
    coverImage: {
      src: "/images/CZC.png",
      alt: "Czech audience case",
    },
    body: [
      {
        title: "Context",
        paragraphs: [
          "World of Warships is a tactical team-based shooter that has become known and loved by millions of players.",
          "The Warships team came to us with the task of helping to promote the collaboration with the popular Czech character, The Good Soldier Švejk.",
          "World of Warships used this character as exclusive in-game content to appeal to a new niche audience.",
        ],
      },
      {
        title: "Audience and creators",
        paragraphs: [
          "The audience of World of Warships is all gamers from all over the world, but since we focused on the Czech audience, we gathered Twitch creators from the Czech Republic who could interest their viewers in World of Warships.",
          "It was important that the creators themselves were interested in participating in the campaign, because it affects how deeply they immerse into the game and how convincingly they tell the story.",
          "That is why we kept a balance when selecting creators between content fit, game fandom, and cost.",
        ],
      },
      {
        title: "What we've been doing",
        paragraphs: [
          "During the 6 months, we offered the Warships team different content creators and selected them taking into account the directions that creators themselves produce, holidays, and important dates.",
          "We also used analytics to better understand who we would be working with.",
          "For hypothesis testing we attracted two streamers from other regions to the project, one from Sweden and the other from Hungary.",
          "Due to the different geography, experience and approach, we were able to attract interest in the collaboration as a whole, and subsequently in the game.",
        ],
      },
      {
        title: "Highlights",
        paragraphs: [
          "Mazarini Highlight: Mazi's Marigolds #307 - Warships, Pacman, Tarkov and cheats in CS2",
          "MGFitman Highlight: I have earned 20,000 Cups in 30 Days",
          "Herdyn Highlight: Finally I have cooperation! - WoLe #432",
        ],
      },
      {
        title: "Results for a 6 months of cooperation",
        paragraphs: [
          "We started working on the project from scratch, the audience knew about the game, but didn't fully understand why they should start playing.",
          "We made content within one month. During this time we made 24 streamings of 2 hours each, several Discord publications.",
          "We finished cooperation on this campaign with the World of Warships team when we achieved these results ↓",
        ],
        kpis: [
          { label: "New players", value: "320" },
          { label: "Twitch streams", value: "24" },
          { label: "Views in total", value: "312K" },
          { label: "Concurrent viewers (CCV)", value: "4K" },
        ],
      },
    ],
  },
  {
    slug: "performance-based-campaigns-for-warthunder",
    href: "/studios-cases/performance-based-campaigns-for-warthunder",
    title: "Performance based Campaigns for WarThunder",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt: "Monthly creator activations with KPI focus.",
    theme: "from-lime-600 via-emerald-500 to-sky-500",
    coverImage: {
      src: "/images/WTP.png",
      alt: "WarThunder performance case",
    },
    body: [
      {
        title: "Campaign goal",
        paragraphs: [
          "War Thunder, the renowned combat MMO that thrusts players into intense air, land, and sea battles, sought to expand its global reach and bolster its player base.",
          "To achieve this, they partnered with Trap Plan to execute a performance-driven Twitch influencer campaign spanning both the US and Europe.",
          "This campaign aimed to leverage the captivating power of popular Twitch creators to generate excitement and attract new recruits to War Thunder's immersive battlefields.",
        ],
      },
      {
        title: "Creator selection",
        paragraphs: [
          "Central to the campaign's success was Trap Plan's meticulous approach to creator selection.",
          "Rather than simply collaborating with any streamer boasting a large following, we prioritized those whose content and audience aligned with War Thunder's thrilling gameplay and diverse vehicle roster.",
          "This involved carefully considering the types of games creators typically streamed, their audience demographics, and their overall style and tone, ensuring a natural fit with War Thunder's action-packed universe.",
        ],
      },
      {
        title: "Data-driven execution",
        paragraphs: [
          "Data-driven decision-making fueled this process.",
          "Trap Plan leveraged analytics to gain deeper insights into each creator's audience, engagement rates, and overall reach.",
          "This ensured that the selected creators not only possessed a genuine affinity for War Thunder's explosive gameplay but also had the influence to effectively reach and engage potential players across both US and European gaming communities.",
        ],
      },
      {
        title: "Authentic enthusiasm",
        paragraphs: [
          "Crucially, Trap Plan recognized the importance of authentic enthusiasm.",
          "We sought out creators who were genuinely passionate about War Thunder, understanding that genuine excitement translates into more compelling and persuasive content.",
          "These creators weren't just playing the game; they were actively showcasing their skills in aerial dogfights, tank battles, and naval engagements, igniting a passion for War Thunder within their communities.",
        ],
      },
      {
        title: "Results for a 3 months of cooperation",
        paragraphs: [
          "The War Thunder campaign serves as a powerful testament to the impact of performance-based influencer marketing within the gaming industry.",
          "By carefully selecting creators, leveraging data-driven insights, and prioritizing authentic enthusiasm, Trap Plan successfully expanded War Thunder's global player base and strengthened its presence within the competitive gaming landscape.",
          "This campaign exemplifies how a well-executed influencer strategy can effectively fuel growth and engagement for games seeking to reach new audiences and soar to new heights.",
          "This strategic approach, combining careful creator selection, data-driven insights, and a focus on authentic enthusiasm, yielded impressive results ↓",
        ],
        kpis: [
          { label: "Twitch streams", value: "39" },
          { label: "Views in total", value: "788K" },
          { label: "Concurrent viewers (CCV)", value: "14,755" },
        ],
      },
    ],
  },
  {
    slug: "twitch-ad-campaigns-for-crossout",
    href: "/studios-cases/twitch-ad-campaigns-for-crossout",
    title: "How we reached new players for CrossOut",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt: "Expanded reach in Europe and the US.",
    theme: "from-fuchsia-700 via-pink-600 to-rose-500",
    coverImage: {
      src: "/images/Crossout_case.png",
      alt: "CrossOut case",
    },
    body: [
      {
        title: "Starting from zero",
        paragraphs: [
          "Together with TrapPlan, the campaign started from zero. The goal was to show the game to new audiences through live gameplay, not ads.",
          "We selected Twitch creators who fit CrossOut’s tone and who genuinely enjoyed fast, chaotic PvP combat.",
          "Each of them played the game, built their own vehicles, and shared their reactions live with their viewers.",
        ],
      },
      {
        title: "Execution",
        paragraphs: [
          "In one month, we produced 15 streams, each lasting four hours.",
          "The creators generated real engagement through gameplay, Q&A with viewers, and Discord posts before and after streams.",
        ],
      },
      {
        title: "What worked",
        paragraphs: [
          "What worked was simple: the right creators, real enthusiasm, and consistent communication.",
          "No scripts, no artificial hype. Just people discovering and enjoying the game together.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "The campaign reached 183,000 total views, 5,983 concurrent viewers, and brought in 951 new players.",
        ],
        kpis: [
          { label: "Twitch streams", value: "15" },
          { label: "Views in total", value: "183K" },
          { label: "Concurrent viewers (CCV)", value: "5,983" },
          { label: "New players", value: "951" },
        ],
      },
    ],
  },
  {
    slug: "twitch-ad-campaigns-for-enlisted",
    href: "/studios-cases/twitch-ad-campaigns-for-enlisted",
    title: "Twitch ad campaigns for Enlisted",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt: "Reached 1,500+ new players.",
    theme: "from-slate-800 via-slate-700 to-slate-600",
    coverImage: {
      src: "/images/Twitch-ad_enlisted.png",
      alt: "Twitch ad campaigns for Enlisted",
    },
    body: [
      {
        title: "Campaign goal",
        paragraphs: [
          "Enlisted, a popular tactical team-based shooter with a global player base, recognized the opportunity to further solidify its presence within the European gaming community.",
          "To achieve this, they enlisted the expertise of Trap Plan to design and execute a targeted Twitch influencer campaign.",
          "This campaign sought to leverage the influence of popular Twitch creators to generate excitement and attract new players to Enlisted's immersive battlefields.",
        ],
      },
      {
        title: "Creator selection",
        paragraphs: [
          "Central to the campaign's success was Trap Plan's meticulous approach to creator selection.",
          "Rather than simply partnering with any streamer boasting a large following, we prioritized creators whose content and audience aligned with Enlisted's gameplay and target demographic.",
          "This involved carefully considering the types of games creators typically streamed, their audience demographics, and their overall style and tone.",
        ],
      },
      {
        title: "Data-driven decision making",
        paragraphs: [
          "Data-driven decision-making played a crucial role in this process.",
          "Trap Plan leveraged analytics to gain deeper insights into each creator's audience, engagement rates, and overall reach.",
          "This ensured that the selected creators not only possessed a genuine affinity for Enlisted but also had the influence to effectively reach and engage potential players within the European gaming community.",
        ],
      },
      {
        title: "Authentic enthusiasm",
        paragraphs: [
          "Crucially, Trap Plan recognized the importance of authentic enthusiasm.",
          "We sought out creators who were genuinely passionate about Enlisted, understanding that genuine excitement translates into more compelling and persuasive content.",
          "One standout example was streamer MedhiZW, who went above and beyond by actively rallying his Discord community to join him in Enlisted, demonstrating a level of commitment that resonated with his audience.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "This strategic approach, combining careful creator selection, data-driven insights, and a focus on authentic enthusiasm, yielded impressive results.",
          "Within just one month, the campaign attracted around 192 new players to Enlisted, demonstrating the effectiveness of influencer marketing in driving player acquisition.",
          "Furthermore, the campaign generated over a third of a thousand views across all videos, increasing Enlisted's visibility within the European gaming community.",
          "The Enlisted campaign serves as a compelling case study in the power of strategic influencer marketing within the gaming industry.",
        ],
      },
      {
        title: "Results for a 2 months of cooperation",
        paragraphs: [
          "We started working on the project from scratch, the audience knew about the game, but didn't fully understand why they should start playing.",
          "During this time we made 11 Twitch Creator with a 22 Streams.",
        ],
        kpis: [
          { label: "Twitch creators", value: "11" },
          { label: "Views", value: "1,183,000" },
          { label: "CCV", value: "4,983" },
        ],
      },
    ],
  },
  {
    slug: "youtube-ad-campaigns-for-warthunder-in-europe",
    href: "/studios-cases/youtube-ad-campaigns-for-warthunder-in-europe",
    title: "YouTube ad campaigns for WarThunder in Europe",
    date: "May 28, 2025",
    client: "Gaijin",
    excerpt: "1M+ views per month.",
    theme: "from-zinc-700 via-stone-600 to-stone-500",
    coverImage: {
      src: "/images/WarThunder-EU_Case.png",
      alt: "WarThunder EU Case",
    },
    body: [
      {
        title: "Campaign goal",
        paragraphs: [
          "War Thunder, the popular combat MMO that throws players into intense air, land, and sea battles, sought to amplify its reach and engage new players.",
          "Recognizing the power of influencer marketing, they partnered with Trap Plan to orchestrate a dynamic YouTube campaign.",
          "This campaign focused on leveraging the influence of popular content creators to generate excitement and attract new recruits to War Thunder's immersive battlefields.",
        ],
      },
      {
        title: "Creator selection",
        paragraphs: [
          "Central to the campaign's success was Trap Plan's meticulous approach to creator selection.",
          "We didn't just seek out any gaming YouTuber with a large following. Instead, we prioritized creators whose content naturally aligned with War Thunder's thrilling gameplay and diverse vehicle roster.",
          "This involved carefully considering the types of games creators typically featured, their audience demographics, and even the potential for creative tie-ins with historical events or War Thunder updates.",
        ],
      },
      {
        title: "Data-driven selection",
        paragraphs: [
          "Data-driven decision-making played a crucial role in the selection process.",
          "Trap Plan leveraged analytics to gain a deeper understanding of each creator's audience, engagement rates, and overall reach.",
          "This ensured that the chosen creators were not only a good fit for War Thunder but also possessed the influence to effectively reach and engage potential players.",
        ],
      },
      {
        title: "Authentic enthusiasm",
        paragraphs: [
          "Crucially, Trap Plan recognized the importance of genuine enthusiasm.",
          "We sought out creators who were genuinely interested in War Thunder, understanding that authentic passion translates into more compelling and persuasive content.",
          "By striking a balance between content alignment, audience reach, and creator enthusiasm, Trap Plan assembled a team of passionate YouTubers who effectively became ambassadors for War Thunder.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The results of this strategic approach were impressive.",
          "The campaign consistently generated over one million views per month across diverse European regions, from Germany and France to the Balkans and Nordics.",
          "This surge in viewership translated into increased awareness and player interest, contributing to War Thunder's continued growth.",
          "The War Thunder campaign exemplifies the power of strategic influencer marketing in the gaming industry.",
        ],
      },
      {
        title: "Results for a 2 months of cooperation",
        paragraphs: [
          "We started working on the project from scratch, the audience knew about the game, but didn't fully understand why they should start playing.",
          "We made content within six months. During this time we made 11 YouTube Integrations and 9 Youtube Dedicated videos.",
          "We finished cooperation on this campaign in this year with the World of Warships team when we achieved these results ↓",
        ],
        kpis: [
          { label: "Creators", value: "20" },
          { label: "Views", value: "4109K" },
          { label: "YouTube integrations", value: "11" },
          { label: "Dedicated videos", value: "9" },
        ],
      },
    ],
  },
  {
    slug: "youtube-ad-campaigns-for-world-of-tanks-in-usa",
    href: "/studios-cases/youtube-ad-campaigns-for-world-of-tanks-in-usa",
    title: "YouTube ad campaigns for World Of Tanks in USA",
    date: "May 28, 2025",
    client: "Wargaming",
    excerpt: "Launched USA campaigns with structured creator delivery.",
    theme: "from-orange-600 via-amber-500 to-yellow-400",
    coverImage: {
      src: "/images/WOT-case.png",
      alt: "World of Tanks USA case",
    },
    body: [
      {
        title: "Campaign overview",
        paragraphs: [
          "World of Tanks, the popular tactical team-based shooter, partnered with Trap Plan to launch a focused YouTube campaign in the US market.",
          "This collaboration involved over 60 YouTube creators producing monthly videos for various World of Tanks channels.",
          "In just two months at the end of 2024, the campaign successfully attracted approximately 340 new players and generated over 650,000 views.",
        ],
      },
      {
        title: "Target audience",
        paragraphs: [
          "While World of Tanks players are located worldwide, this campaign specifically targeted English-speaking gamers aged 25-34 who have a strong influence on their audience and can effectively promote the game.",
        ],
      },
      {
        title: "What we've been doing",
        paragraphs: [
          "Over the two-month period, we presented the Tanks team with a diverse selection of content creators.",
          "Our selection process carefully considered the type of content these creators specialize in, along with relevant holidays and important dates.",
          "We also leveraged analytics to gain a deeper understanding of each creator and their audience.",
          "It was crucial to find creators who were genuinely interested in participating in the campaign.",
          "Therefore, we balanced selection criteria across content style, passion for gaming (especially World of Tanks), and overall cost.",
        ],
      },
      {
        title: "Results achieved in just 2 months of collaboration",
        paragraphs: [
          "Initially, we faced the challenge of raising awareness and generating excitement for the game among an audience already familiar with it but lacking a compelling reason to play.",
          "Within two months, we developed and executed a content strategy that yielded impressive results.",
          "This included the creation of 4 integrated YouTube videos and 6 dedicated YouTube videos.",
          "We finished cooperation on this campaign in this year with the World of Warships team when we achieved these results ↓",
        ],
        kpis: [
          { label: "Creators", value: "10" },
          { label: "Views", value: "657K" },
          { label: "Integrated videos", value: "4" },
          { label: "Dedicated videos", value: "6" },
        ],
      },
    ],
  },
  {
    slug: "youtube-ad-campaigns-for-world-of-warships-in-europe",
    href: "/studios-cases/youtube-ad-campaigns-for-world-of-warships-in-europe",
    title: "YouTube ad campaigns for World of Warships in Europe",
    date: "May 28, 2025",
    client: "Wargaming",
    excerpt: "YouTube campaigns across major European regions with consistent delivery.",
    theme: "from-indigo-700 via-violet-600 to-fuchsia-500",
    coverImage: {
      src: "/images/warships-case.png",
      alt: "World of Warships Europe case",
    },
  },
];
