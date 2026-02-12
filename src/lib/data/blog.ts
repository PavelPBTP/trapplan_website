import { BLOG_IMPORTED_POSTS } from "@/lib/data/blog.posts";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; src: string; alt?: string }
  | { type: "callout"; emoji?: string; title?: string; text: string };

export type CardArticle = {
  title: string;
  lead?: string;
  cards: Array<{
    id: string;
    question: string;
    answer: string;
    proTip?: string;
  }>;
};

export type BlogPost = {
  slug: string;
  title: string;
  emoji?: string;
  date: string; // ISO
  excerpt: string;
  readingMinutes: number;
  category?: string;
  authorName?: string;
  authorRole?: string;
  cover?: string; // public path, e.g. /blog/covers/<slug>.jpg
  cardArticle?: CardArticle;
  content: BlogBlock[];
};

export const MANUAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "can-tiktok-and-youtube-shorts-increase-steam-wishlists",
    title: "Can TikTok and YouTube Shorts Increase Steam Wishlists",
    emoji: "🎬",
    date: "2026-02-12",
    excerpt:
      "Can TikTok and YouTube Shorts actually increase Steam wishlists? This card-style breakdown covers real market data from R.E.P.O. and Fallen Aces, when short form video helps Wishlist Velocity, when it damages Conversion Rate, and how to treat Shorts as a structured acquisition system instead of a creative gamble.",
    readingMinutes: 9,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/blog5.png",
    cardArticle: {
      title: "Can TikTok and YouTube Shorts Increase Steam Wishlists",
      lead: "You are building a game for Steam and watching Wishlist Velocity like it is a heartbeat monitor. Traffic exists, but growth feels slow. Then you hear the same advice from every direction. Post short videos on TikTok and YouTube Shorts, go viral, and the wishlists will follow. Now you are wondering whether short form video can realistically increase Steam wishlists or if this is just another marketing myth.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "You are building a game for Steam and watching Wishlist Velocity like it is a heartbeat monitor. Traffic exists, but growth feels slow. Then you hear the same advice from every direction. Post short videos on TikTok and YouTube Shorts, go viral, and the wishlists will follow. Now you are wondering whether short form video can realistically increase Steam wishlists or if this is just another marketing myth.",
        },
        {
          id: "short-form-video-2026",
          question: "What short form video for Steam games actually means in 2026",
          answer:
            "In 2026, TikTok Steam wishlists and YouTube Shorts for game marketing are not about virality, they are about signal quality. Short form platforms generate attention at scale, but Steam only reacts to behavior inside its ecosystem. The Steam Algorithm evaluates Conversion Rate, Wishlist Velocity, CTR on Capsule Art, and interaction patterns in Discovery Queue. A Short can drive thousands of visits, yet if Metadata, genre clarity, and store positioning do not match the promise of the video, the algorithm receives a weak signal. Short form works only when external curiosity turns into consistent in platform intent.",
        },
        {
          id: "not-on-tiktok",
          question: "Am I doing something wrong if I am not on TikTok or Shorts?",
          answer:
            "Not necessarily. Many PC and Console titles grow through strong Discovery Queue performance, clear Capsule Art, and stable Conversion Rate without heavy external traffic. TikTok and YouTube Shorts are amplifiers. If your store page already converts well, short form can accelerate Wishlist Velocity. If your Conversion Rate is unstable, more traffic will simply expose the weakness faster.",
        },
        {
          id: "tiktok-increase-wishlists",
          question: "Can TikTok actually increase Steam wishlists?",
          answer:
            "This is usually framed more directly as does TikTok increase Steam wishlists, and the honest answer is yes, but only under strict conditions. Real market data supports this. R.E.P.O., a horror multiplayer title, generated around 3,100,000 short form video views and translated that exposure into roughly 20,000 additional wishlists. Fallen Aces accumulated approximately 6,500,000 views and gained around 25,600 wishlists during its short form momentum. The raw numbers prove that TikTok can drive Steam wishlists, but the ratio between views and wishlists also shows that attention alone is not enough.\\n\\nIn both cases, performance depended on alignment. The first seconds of the video communicated genre and tone clearly, and the Steam page confirmed that promise through strong Capsule Art, coherent Metadata, and clear gameplay positioning. Conversion Rate remained stable during traffic spikes, which allowed Wishlist Velocity to rise in a way the Steam Algorithm could confidently scale.",
        },
        {
          id: "youtube-shorts",
          question: "What about YouTube Shorts for game marketing?",
          answer:
            "YouTube Shorts behave slightly differently. Discovery is influenced by search intent and recommendation history, which often results in lower reach but higher intent traffic. For certain genres, especially strategy, roguelike, or simulation, YouTube Shorts for game marketing can produce fewer clicks than TikTok but stronger Conversion Rate once users reach Steam. In that scenario, the algorithm values consistency over volume and Discovery Queue exposure may expand gradually rather than explosively.",
        },
        {
          id: "viral-no-wishlists",
          question: "Why do some viral videos not move wishlists at all?",
          answer:
            "Virality optimizes for entertainment, not alignment. A funny moment or shocking clip can generate massive views and high outbound CTR, but if the store page does not confirm the same core fantasy, visitors hesitate. Conversion Rate drops, Wishlist Velocity stays flat, and Steamworks data signals inconsistency. From the perspective of the Steam Algorithm, traffic that does not convert is noise, not growth.",
        },
        {
          id: "before-launch-or-discount",
          question: "Does short form help before launch or during Launch Discount?",
          answer:
            "Before launch, short form is primarily a wishlist acquisition tool. The goal is stable Wishlist Velocity and predictable Conversion Rate across regions, including sensitivity to Regional Pricing expectations. During a Launch Discount, the same channels can drive purchase intent, but price framing and perceived value become critical. If audience expectations shaped by Shorts do not align with final pricing, traffic may not convert into revenue even if pre launch wishlists looked healthy.",
        },
        {
          id: "shorts-working",
          question: "How do I know if Shorts are working for my game?",
          answer:
            "Look for correlation, not spikes. When each content wave leads to measurable Wishlist Velocity increases without collapsing Conversion Rate, you are building a system. When traffic surges and CR drops, the creative and the store page are misaligned. Monitor Steamworks data closely and compare outbound CTR with in platform behavior. Short form is working only when Steam can confidently expand Discovery Queue testing based on consistent user actions.",
        },
        {
          id: "stay-sane",
          question: "How do I stay sane while testing TikTok and YouTube Shorts?",
          answer:
            "You stay sane by treating short form video as a structured acquisition system, not a creative gamble. TikTok for game marketing works when testing is deliberate. Instead of uploading random clips, build batches of controlled experiments that test different hooks, gameplay angles, and audience segments while tracking outbound CTR and resulting Wishlist Velocity inside Steamworks.\\n\\nThis is exactly why we structured our TikTok package around twenty videos designed to generate comparable data across multiple creative directions. The goal is not to chase virality but to understand which format produces qualified TikTok Steam wishlists without damaging Conversion Rate. When short form campaigns are aligned with Capsule Art, Metadata clarity, Regional Pricing expectations, and launch sequencing, the Steam Algorithm receives consistent signals. Attention becomes measurable intent, and measurable intent becomes sustainable wishlist growth before launch.",
        },
      ],
    },
    content: [],
  },
  {
    slug: "should-you-launch-tiktok-for-your-steam-game",
    title: "Should You Launch TikTok For Your Steam Game",
    emoji: "📱",
    date: "2026-02-11",
    excerpt:
      "Thinking about launching TikTok for your Steam game? This card-style breakdown covers when TikTok actually helps Wishlist Velocity, when it hurts Conversion Rate, how it interacts with pricing and launch plans, and how to treat it as a structured acquisition layer instead of a distraction.",
    readingMinutes: 8,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/blog3.png",
    cardArticle: {
      title: "Should You Launch TikTok For Your Steam Game",
      lead: "You are staring at your Steamworks dashboard and thinking about attention. Wishlist Velocity is decent but not explosive. Discovery Queue impressions fluctuate. Someone tells you TikTok can change everything. Now you are wondering whether launching a TikTok account for your Steam game is a strategic move or just another distraction.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "You are staring at your Steamworks dashboard and thinking about attention. Wishlist Velocity is decent but not explosive. Discovery Queue impressions fluctuate. Someone tells you TikTok can change everything. Now you are wondering whether launching a TikTok account for your Steam game is a strategic move or just another distraction.",
        },
        {
          id: "what-launching-tiktok-means",
          question: "What launching TikTok for a Steam game actually means in 2026",
          answer:
            "In 2026, TikTok for game marketing in the PC and Console space is not about chasing views, it is about engineering TikTok Steam wishlists through controlled audience alignment. TikTok is an attention engine optimized for rapid creative testing and behavioral filtering. It can increase outbound CTR toward your Steam page and influence top of funnel demand, but it does not control Conversion Rate or Wishlist Velocity directly. Those outcomes depend on how well your Capsule Art, Metadata, genre positioning, and store page structure convert interest once users land inside Steam. TikTok only becomes a growth channel when its traffic behaves in a way the Steam Algorithm can interpret and scale.",
        },
        {
          id: "doing-something-wrong",
          question: "Am I doing something wrong if I do not have TikTok?",
          answer:
            "Not automatically. Many games grow through organic Discovery Queue exposure, strong Capsule Art CTR, and consistent Conversion Rate without heavy external traffic. TikTok is an amplifier, not a requirement. If your core Steam metrics are unstable, adding TikTok will amplify instability rather than fix it. The question is not whether you have TikTok, but whether your current Steam behavior can absorb additional traffic without collapsing CR.",
        },
        {
          id: "when-tiktok-helps",
          question: "When does TikTok actually help Steam growth?",
          answer:
            "TikTok helps when your gameplay fantasy is visually clear within seconds and pre qualifies the correct audience before they ever click through. This is where TikTok Steam wishlists are actually created, not on the platform itself but in the consistency between video promise and Steam page confirmation. Genres like horror, sandbox, simulation, and action roguelike tend to perform better because the loop is easy to demonstrate and easy to understand. When the creative clearly signals genre and tone, traffic arriving on your Steam page behaves predictably. Stable Conversion Rate combined with repeatable Wishlist Velocity bumps tells the Steam Algorithm that the audience match is real, which can support Discovery Queue expansion.",
        },
        {
          id: "when-tiktok-hurts",
          question: "When does TikTok hurt more than it helps?",
          answer:
            "TikTok hurts when it creates curiosity without clarity. A funny glitch, shocking moment, or exaggerated reaction can drive high views and CTR, but if the store page does not immediately confirm the same promise, Conversion Rate drops. Steam interprets this inconsistency as low intent traffic. Discovery Queue testing becomes cautious because previous visitors did not convert into wishlists.",
        },
        {
          id: "post-daily",
          question: "Do I need to post daily to see results?",
          answer:
            "Consistency matters more than frequency. Posting daily without a clear hypothesis about hook, genre framing, or audience segment generates random data. TikTok is most useful when treated as a structured testing environment. Different hooks, gameplay angles, and narrative framings should be tested against measurable outcomes such as outbound CTR and resulting Wishlist Velocity inside Steamworks. Without structure, content becomes noise.",
        },
        {
          id: "pricing-and-launch",
          question: "How does TikTok interact with pricing and launch plans?",
          answer:
            "TikTok traffic behaves differently before and during a Launch Discount. Before release, the goal is wishlist accumulation and stable Conversion Rate. During launch, pricing, Regional Pricing expectations, and discount framing influence how TikTok driven traffic converts into purchases. If your audience expectations are misaligned with price positioning, traffic spikes may not translate into revenue even if Wishlist Velocity looked healthy earlier.",
        },
        {
          id: "viral-growth",
          question: "Should I expect viral growth?",
          answer:
            "Expect learning, not miracles. Viral growth is unpredictable and rarely sustainable. What you should expect is data. TikTok can reveal which gameplay loops drive curiosity, which genre cues resonate, and which audience segments respond. When those insights are reflected in Capsule Art, Metadata, and store page messaging, the Steam Algorithm receives cleaner signals. Growth becomes compounding rather than explosive.",
        },
        {
          id: "stay-sane",
          question: "How do I stay sane while deciding whether to launch TikTok?",
          answer:
            "You stay sane by treating TikTok for game marketing as a measurable acquisition layer, not a cultural obligation. If your Steam fundamentals are strong, TikTok can accelerate Wishlist Velocity, generate qualified TikTok Steam wishlists, and reinforce Discovery Queue learning. If your fundamentals are weak, fix Conversion Rate, Capsule Art clarity, and Metadata positioning first. TikTok amplifies what already exists.\\n\\nThis is where Trap Plan usually supports teams, aligning short form strategy with Steamworks data, pricing logic, Regional Pricing expectations, and launch sequencing so TikTok becomes a structured growth lever instead of a distraction.",
        },
      ],
    },
    content: [],
  },
  {
    slug: "do-shorts-videos-from-tiktok-shorts-and-reels-really-drive-steam-wishlists",
    title:
      "Do Shorts Videos from TikTok, Shorts and Reels Really Drive Steam Wishlists",
    emoji: "🎬",
    date: "2026-02-11",
    excerpt:
      "Short form video on TikTok, YouTube Shorts and Reels can generate massive reach, but does that attention actually convert into Steam Wishlists? This card-style breakdown covers Wishlist Velocity, Conversion Rate, Discovery Queue behavior, viral traps, and how to build a disciplined Shorts strategy.",
    readingMinutes: 9,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/blog4.png",
    cardArticle: {
      title:
        "Do Shorts Videos from TikTok, Shorts and Reels Really Drive Steam Wishlists",
      lead: "You posted a few Shorts, maybe on YouTube, maybe on TikTok or Reels. One of them spikes. Views explode, comments look alive. You open Steamworks expecting Wishlist Velocity to jump. It barely moves. Now you are wondering if short form video is overhyped for PC and Console games or if you executed it wrong.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "You posted a few Shorts, maybe on YouTube, maybe on TikTok or Reels. One of them spikes. Views explode, comments look alive, someone says this looks sick. You open Steamworks expecting Wishlist Velocity to jump. It barely moves. Now you are wondering if short form video is overhyped for PC and Console games or if you executed it wrong.",
        },
        {
          id: "short-form-video-2026",
          question: "What short form video actually means in 2026",
          answer:
            "In 2026, TikTok Steam wishlists and YouTube Shorts for game marketing are not separate tactics, they are acquisition layers feeding the same Steam Algorithm. Short form video is an attention filter, not a conversion engine. TikTok can generate massive reach inside seconds, YouTube Shorts can extend discovery through search and recommendation loops, but neither platform transfers value automatically. They generate curiosity and emotional spikes, which can increase outbound CTR toward your Steam page. Wishlist Velocity depends on what happens after the click. The Steam Algorithm does not care about views on TikTok or YouTube. It evaluates behavior inside Steam, including Conversion Rate from visit to wishlist, interaction with Metadata, and how players respond in Discovery Queue testing.",
        },
        {
          id: "can-shorts-increase-velocity",
          question:
            "Can TikTok and YouTube Shorts increase Wishlist Velocity at all?",
          answer:
            "Yes, but only under specific structural conditions. TikTok Steam wishlists grow when the creative pre qualifies the audience before they ever click. The first seconds must communicate genre, tone, and gameplay fantasy clearly enough that only the right players feel compelled to visit Steam. The same applies to YouTube Shorts for game marketing, where search intent and recommendation signals differ but alignment principles stay identical. When Shorts clearly communicate gameplay fantasy and the Steam page mirrors that clarity through Capsule Art and Metadata, intent survives the jump. In that case, external traffic behaves predictably, Conversion Rate remains stable, and Wishlist Velocity ticks up in small but repeatable waves.",
        },
        {
          id: "viral-vs-steam-growth",
          question:
            "Why do viral videos rarely translate into Steam growth?",
          answer:
            "Virality optimizes for reach, not alignment. A viral Short can reach millions who are not part of your target genre audience. High CTR with low Conversion Rate teaches the Steam Algorithm that your traffic is inconsistent. Discovery Queue tests become cautious because past visitors did not convert. From Steam's perspective, the video created noise, not signal.\n\nYou can see this pattern repeatedly in the market. For example, R.E.P.O., a horror multiplayer title, generated around 3,100,000 short form video views across platforms and converted that spike into roughly 20,000 additional wishlists. On paper this looks impressive, but the deeper insight is efficiency. The conversion from views to wishlist depended heavily on how clearly the gameplay fantasy was communicated and how well the Steam page confirmed it. When traffic aligned with genre expectations, Conversion Rate held steady and Wishlist Velocity reacted.\n\nAnother strong case is Fallen Aces, which accumulated approximately 6,500,000 views through short form distribution and translated that into around 25,600 wishlists. The raw ratio between views and wishlists again shows that views alone are not predictive. What mattered was cohesion between the short form creative, Capsule Art style, Metadata clarity, and store page positioning. In both examples, the Steam Algorithm responded not to virality itself, but to consistent in platform behavior after the click.",
        },
        {
          id: "gameplay-or-emotion",
          question:
            "Should I design Shorts around gameplay or emotion?",
          answer:
            "Emotion without context attracts viewers, gameplay with context attracts buyers. Shorts that show raw mechanics without explaining stakes confuse casual viewers. Shorts that show pure emotion without mechanics confuse core players. The sweet spot is clarity of fantasy, genre cues, and pacing that matches your actual experience. When the promise is precise, Regional Pricing expectations and genre benchmarks feel coherent once players land on the page.",
        },
        {
          id: "shorts-help-algorithm",
          question: "Do Shorts help the Steam Algorithm indirectly?",
          answer:
            "They can, if they create clean behavior patterns. When external traffic from Shorts shows consistent Conversion Rate, reasonable time on page, and healthy wishlist adds relative to impressions, Steamworks data reinforces algorithm confidence. Discovery Queue exposure may expand because Steam sees proof of audience fit. Shorts become useful when they feed the system with disciplined traffic, not chaotic spikes.\n\nThere are also positive market cases. Several simulation and cozy titles have demonstrated steady wishlist accumulation through recurring TikTok and Reels formats that consistently showcased the core gameplay loop. Instead of chasing virality, creators repeated clear value propositions, such as farm progression, decorating systems, or satisfying crafting loops. View counts were moderate rather than explosive, but Wishlist Velocity increased in parallel with each content wave. In these cases, Conversion Rate remained stable during traffic growth, which allowed the Steam Algorithm to scale Discovery Queue impressions gradually.\n\nAnother pattern appeared with action roguelike and sandbox games using YouTube Shorts for game marketing. Developers repurposed tightly edited gameplay clips that highlighted skill expression and replayability. Shorts views were lower than on TikTok, but traffic arriving from YouTube showed higher intent and stronger Conversion Rate. Over time, consistent Shorts uploads correlated with predictable wishlist bumps before major beats such as demos or Launch Discount announcements. The key was alignment between the short form promise, Capsule Art, Metadata clarity, and the actual store page experience.",
        },
        {
          id: "how-many-wishlists",
          question:
            "How many wishlists can Shorts realistically generate?",
          answer:
            "There is no fixed multiplier between views and wishlists. Ten thousand views can generate meaningful Wishlist Velocity if the audience is niche and aligned. One million views can generate almost nothing if intent is weak. Shorts are leverage, not magic. Their value depends on how tightly the creative, the Capsule Art, the Metadata, and the store page Conversion Rate work together.",
        },
        {
          id: "stay-sane",
          question:
            "How do I stay sane while testing TikTok and YouTube Shorts?",
          answer:
            "You stay sane by treating TikTok and YouTube Shorts as structured campaigns, not random uploads. Consistency matters more than one viral spike, which is why structured production frameworks outperform isolated experiments. This is exactly how we approach short form at Trap Plan through our TikTok package built around twenty videos designed to test multiple hooks, gameplay angles, and audience segments in a controlled way. Instead of hoping for viral luck, the goal is to generate comparable data across creatives, measure outbound CTR, track Wishlist Velocity after each wave, and observe how Conversion Rate behaves inside Steamworks.\n\nWhen TikTok Steam wishlists start rising in correlation with stable Discovery Queue behavior and healthy CR, you know the system is learning. When views rise but Steam signals stay flat, the creative is entertaining but not qualifying. The goal is not to go viral, it is to teach the Steam Algorithm who cares about your game. That is where disciplined short form strategy turns attention into signal, and signal into sustainable wishlist growth before launch.",
        },
      ],
    },
    content: [],
  },
  {
    slug: "how-to-know-marketing-for-your-games-works-before-release",
    title: "How To Know Marketing for your games Works Before Release",
    emoji: "📊",
    date: "2026-02-10",
    excerpt:
      "Pre-release marketing success is not about hype or reach — it is about whether the Steam Algorithm is learning who your game is for. This card-style breakdown covers Wishlist Velocity, Discovery Queue behavior, store page signals, regional data, and when to worry.",
    readingMinutes: 7,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/how-to-know-marketing-for-your-games-works-before-release.png",
    cardArticle: {
      title: "How To Know Marketing for your games Works Before Release",
      lead: "Without sales data, marketing feels like faith. One graph goes up, another stays flat, and nobody knows which one actually matters.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "Every team reaches the same quiet panic six to nine months before release. Trailers are live, influencers have touched the build, Steamworks shows activity, but revenue is still imaginary. Without sales data, marketing feels like faith. One graph goes up, another stays flat, and nobody knows which one actually matters. This is where teams either start thrashing or learn how pre release signals really work on PC and Console.",
        },
        {
          id: "pre-release-signal-2026",
          question: "What pre release marketing signal actually means in 2026",
          answer:
            "In 2026, pre release marketing success is not about hype, reach, or vibes. It is about whether the Steam Algorithm is learning who your game is for. Wishlist Velocity, Discovery Queue impressions, CTR on Capsule Art, and Conversion Rate from page visits to wishlists form a closed feedback loop. When these signals move together, Steam is building confidence. When they move in isolation, marketing activity exists but learning does not. Pre release marketing works when Steam understands how to test you.",
        },
        {
          id: "wishlists-no-clarity",
          question: "Am I doing something wrong if I have wishlists but no clarity?",
          answer:
            "Not necessarily, but you are asking the wrong question. Teams fixate on how many wishlists before launch is enough, expecting a universal number. In reality, raw wishlist count is a lagging indicator. What matters is how Wishlist Velocity behaves as release approaches and whether Conversion Rate remains stable as traffic scales. A game with twenty thousand wishlists and collapsing velocity is in worse shape than a game with eight thousand wishlists growing consistently. Marketing starts working when wishlists arrive steadily from similar traffic sources and Steam can predict player intent.",
        },
        {
          id: "velocity-vs-total",
          question: "Should I trust Wishlist Velocity more than total wishlists?",
          answer:
            "Yes, because velocity reflects intent, not memory. Total wishlists reward time, not quality. Wishlist Velocity shows whether new players encountering your Metadata and Capsule Art understand the pitch fast enough to care. When velocity rises after small beats like demos, devlogs, or updates, it means the Steam Algorithm is matching you with the right Discovery Queue audience. When totals rise but velocity stays flat, marketing exposure exists without alignment.",
        },
        {
          id: "discovery-queue-behavior",
          question: "What does healthy Discovery Queue behavior look like?",
          answer:
            "Healthy Discovery Queue performance looks boring at first. Impressions grow gradually, CTR remains stable, and Conversion Rate does not collapse under volume. Spiky impressions with falling CR signal that Steam is guessing. Stable impressions with steady CR signal that Steam is learning. Pre release marketing works when Discovery Queue tests feel controlled instead of explosive.",
        },
        {
          id: "store-page-job",
          question: "How do I know if my store page is doing its job?",
          answer:
            "Your store page works when Capsule Art CTR and page Conversion Rate tell the same story. High CTR with low CR means the art overpromises. Low CTR with high CR means the game is clear but invisible. When both move together, Metadata, visuals, and positioning are aligned. Marketing before release is less about traffic generation and more about reducing friction once traffic arrives.",
        },
        {
          id: "regional-data-early",
          question: "Does regional data matter this early?",
          answer:
            "Yes, because Regional Pricing and regional Conversion Rate reveal audience mismatch early. If certain regions show strong CTR but weak CR, pricing or genre expectations are off. If some regions convert cleanly with low volume, those regions are future growth levers. Steam uses regional behavior to shape broader testing, so ignoring this data delays algorithm confidence.",
        },
        {
          id: "marketing-not-working",
          question: "When should I worry that marketing is not working?",
          answer:
            "You should worry when wishlist math stops making sense. If the question how many wishlists before launch keeps coming up internally, it usually means confidence is missing, not data. Rising impressions with falling Wishlist Velocity, stable traffic with collapsing Conversion Rate, or repeated resets after every beat mean Steam never locks onto a core audience. At that point, chasing a wishlist target number only hides the real problem. Marketing fails pre release not because it is quiet, but because it is incoherent.",
        },
        {
          id: "stay-sane",
          question: "How do I stay sane while reading all this data?",
          answer:
            "You stay sane by replacing superstition with signal. There is no magic answer to how many wishlists before launch guarantees success on PC or Console. Pre release confidence comes from understanding Wishlist Velocity trends, Conversion Rate behavior, and how the Steam Algorithm responds inside Steamworks. This is where Trap Plan usually comes in, helping teams translate wishlist data into decisions instead of myths, so launch expectations stay grounded long before release.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
  {
    slug: "how-important-is-price-in-a-pc-console-game-growth-strategy",
    title: "How Important Is Price In A PC Console Game Growth Strategy",
    emoji: "💰",
    date: "2026-02-10",
    excerpt:
      "Price is not the root cause of a failed launch — it is an amplifier. This card-style breakdown covers what pricing actually means in 2026, how it interacts with Steam Algorithm signals, Regional Pricing, Launch Discount framing, and when price finally becomes the right lever to pull.",
    readingMinutes: 7,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/how-important-is-price-in-a-pc-console-game-growth-strategy.png",
    cardArticle: {
      title: "How Important Is Price In A PC Console Game Growth Strategy",
      lead: "A bad strategy with the right price still fails, and a strong strategy with the wrong price just fails louder. Price is not the root cause — it is an amplifier.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "Every launch postmortem eventually lands on the same argument. Was the price wrong or did everything else fail first. Teams look at flat Wishlist Velocity, weak CTR on Capsule Art, and a Steam Algorithm that never really woke up, and the instinct is to blame the number on the price tag. Pricing becomes the simplest explanation because it is visible, easy to change, and emotionally loaded. But in most PC and Console launches, price is not the root cause. It is an amplifier. A bad strategy with the right price still fails, and a strong strategy with the wrong price just fails louder.",
        },
        {
          id: "pricing-in-2026",
          question: "What pricing actually means in 2026",
          answer:
            "In 2026, price is no longer a single decision. It is a growth signal embedded across Metadata, Regional Pricing logic, Launch Discount framing, and how Steamworks feeds this information into Steam Algorithm testing. Price defines expectation before it defines value, and expectation directly impacts CTR, Wishlist Velocity, and downstream Conversion Rate. A low price increases click curiosity but raises CR expectations. A high price filters clicks but demands stronger proof through reviews, genre benchmarks, and Capsule Art clarity. The Steam Algorithm does not reward cheap games. It rewards games that convert traffic efficiently relative to the audience Steam tests them on through Discovery Queue exposure.",
        },
        {
          id: "game-feels-expensive",
          question: "Am I doing something wrong if my game feels too expensive?",
          answer:
            "Usually no, but something else is misaligned. When developers feel their game is overpriced, what they are really seeing is weak justification. That justification comes from genre benchmarks, review velocity, regional fairness, and how clearly the core fantasy is communicated in the store page. If the Discovery Queue brings traffic and CR collapses, price looks guilty even when the real issue is positioning or mismatched audience targeting.",
        },
        {
          id: "lower-price-fix-wishlists",
          question: "Should I lower the price to fix low wishlists?",
          answer:
            "Lowering the price rarely fixes Wishlist Velocity on its own. Wishlists are driven by perceived future value, not current affordability. Players wishlist games they want to remember, follow, and compare, not games they can afford today. A lower price can slightly increase store page CTR, but if the Metadata, Capsule Art, and genre framing do not clearly explain why the game belongs in the player\u2019s Steam library, the wishlist button remains untouched. Price tweaks without store page clarity usually create noise, not sustainable wishlist growth.",
        },
        {
          id: "higher-price-visibility",
          question: "Does a higher price hurt Steam visibility?",
          answer:
            "Not directly. Steam visibility is tied to engagement loops. CTR, CR, wishlist adds per impression, and early purchase behavior feed back into the Steam Algorithm. A higher price reduces raw conversions, but if those conversions are clean and intentional, the algorithm still learns. Problems appear when high price meets vague Metadata and weak Capsule Art, because Steam cannot confidently match the game to the right audience.",
        },
        {
          id: "launch-discount-vs-base",
          question: "Is launch discount more important than base price?",
          answer:
            "Launch Discount matters because it frames urgency and conversion behavior, not because it compensates for a weak base price. A ten to fifteen percent Launch Discount works when the base price already feels aligned with genre scope, playtime expectations, and comparable PC and Console titles. When the base price feels inflated, even a large discount looks artificial and damages Conversion Rate. Steam users are trained by the platform to read discounts as confidence signals, and the Steam Algorithm reacts accordingly.",
        },
        {
          id: "regional-pricing-growth",
          question: "How does regional pricing actually affect growth?",
          answer:
            "Regional Pricing impacts volume quality. Poor regional logic inflates refund rates and damages Conversion Rate in territories Steam is actively testing. Fair regional pricing increases long term engagement and review density, which indirectly strengthens Discovery Queue performance. Ignoring regions is not neutral, it quietly sabotages algorithm trust.",
        },
        {
          id: "price-main-problem",
          question: "When does price actually become the main problem?",
          answer:
            "Price becomes the core problem only after everything else works. When CTR is healthy, store traffic is relevant, reviews are positive, and Conversion Rate is still underperforming across regions, then price is finally the right lever. At that point, price optimization becomes surgical, not emotional. Small changes can unlock large gains because the system around the price is already stable.",
        },
        {
          id: "stay-sane",
          question: "How do I stay sane while figuring this out?",
          answer:
            "You stay sane by treating price as part of a system, not a moral judgment on your game. Growth becomes predictable when pricing, Metadata, Regional Pricing, Steamworks configuration, Capsule Art testing, and launch sequencing are designed together. This is where Trap Plan usually steps in, not to guess the perfect number, but to build the conditions where the right price reveals itself through Wishlist Velocity, Conversion Rate stability, and Steam Algorithm feedback instead of anxiety.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
  {
    slug: "promote-a-game-without-a-budget-virality-myth",
    title: "Can you actually promote a game without a budget?",
    emoji: "🧪",
    date: "2026-02-09",
    excerpt:
      "A card-style breakdown of the ‘zero budget launch’ myth in 2026: what viral potential actually means, why likes don’t equal intent, what ‘free’ promotion really costs, and how to work with Steam’s algorithm without paid ads.",
    readingMinutes: 9,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/promote-a-game-without-a-budget-cover.png",
    cardArticle: {
      title: "Can you actually promote a game without a budget, relying solely on \"virality\"?",
      lead: "The dream of organic growth is hitting a wall because the Steam and Console markets have reached saturation where quality alone no longer guarantees visibility. This is the myth of the zero-budget launch — and why ‘virality’ is not a strategy.",
      cards: [
        {
          id: "what-happened",
          question: "What happened?",
          answer:
            "The dream of organic growth is hitting a wall because the Steam and Console markets have reached a saturation point where quality alone is no longer a guarantee of visibility. We are specifically discussing the myth of the zero budget launch and why the term virality is often misused as a substitute for a real marketing strategy.\n\nThis matters now more than ever because the Steam Algorithm has become incredibly efficient at filtering out projects that lack professional polish or clear market positioning. Many developers are still operating under the 2018 playbook, believing a lucky tweet will be enough, but if you don't understand how Metadata affects your standing in the Discovery Queue, you are effectively invisible.",
        },
        {
          id: "viral-potential-2026",
          question: "First, explain what \"viral potential\" actually means in 2026",
          answer:
            "In the current market, viral potential is not about luck but about the mathematical probability of your content being shared and acted upon. It is the specific combination of a unique Hook, high quality visual assets, and a frictionless path to the Steam store page.\n\nReal virality happens when your Core Gameplay Loop is so clearly communicated in a five second clip that a viewer feels compelled to hit the wishlist button immediately. We are moving away from shouting into the void of social media and focusing instead on the technical and psychological triggers that turn a random browser into a long term follower.",
        },
        {
          id: "not-trending-naturally",
          question: "Am I doing something wrong if my game isn't trending naturally?",
          answer:
            "Not necessarily, but you are likely relying on a passive discovery model in an era of active algorithmic competition. If you are waiting for the world to discover your masterpiece without providing the Steam Algorithm with the right signals, such as consistent Wishlist Velocity and a high Conversion Rate (CR), the store will simply stop showing your game to new people.\n\nHigh social media engagement that does not translate into store traffic is a major red flag that your positioning is misaligned. You aren't failing at game design; you are failing at packaging your game for the robots that control the digital shelves.",
        },
        {
          id: "likes-vs-wishlists",
          question: "Why do my social media posts get likes while my Steam wishlists stay flat?",
          answer:
            "The problem is that you are confusing social approval with purchasing intent, and this is a classic trap for indie developers. People might like a pretty GIF of a water shader, but if that post lacks a direct Steam link or clear gameplay context, they won't even realize the product is for sale.\n\nVirality must convert a viewer into a user, and for that to happen, your content must demonstrate the Core Gameplay Loop rather than just an attractive image. If your Conversion Rate from social media to the store is near zero, it means you are selling a beautiful screenshot instead of a compelling gaming experience.",
        },
        {
          id: "free-promotion-cost",
          question: "How much does \"free\" promotion actually cost?",
          answer:
            "When you claim to promote a game without a budget, you are simply spending your most expensive resource: your time, which costs thousands of dollars when calculated in development hours. Instead of spending two weeks manually emailing a list of dead gaming outlets, it is more effective to spend a few hundred dollars on a high quality Capsule Art that will boost your Click Through Rate (CTR) on the Steam home page.\n\nRemember that every hour spent on ineffective guerrilla marketing is an hour stolen from polishing the build, which was supposed to trigger that very virality through the reviews of early players.",
        },
        {
          id: "steam-algorithm-without-ads",
          question: "How can I make Steam algorithms work for me if I have no money for ads?",
          answer:
            "The only legitimate way to hack the system without a budget is to work with tags and maintain high Wishlist Velocity within short timeframes. The Steam Algorithm does not see your social media posts; it only sees incoming traffic and how that traffic behaves on your page, whether they add to cart or leave after three seconds.\n\nIf you can synchronize a major demo update announcement with a thematic festival appearance, you will create an artificial spike in activity that pushes you into the More Like This blocks of major competitors. This is the real virality within the store, built on Steamworks knowledge rather than luck.",
        },
        {
          id: "diy-trailer",
          question: "Is a DIY trailer a death sentence or a viable tool?",
          answer:
            "PC and console audiences are spoiled by high quality editing, and your trailer is literally the face of your product, which a player judges for ten seconds before making a decision. If you cannot hire a professional editor, focus on honest gameplay without long logos and black screens at the start.\n\nPoor sound and shaky camera work will kill interest even in a brilliant mechanic, so a budget for audio cleaning and high quality capture is a basic survival requirement in the store. A player subconsciously projects the trailer quality onto the code quality: if the video stutters, they will assume the game will perform the same way.",
        },
        {
          id: "word-of-mouth",
          question: "Why isn't word of mouth working even though my friends say the game is great?",
          answer:
            "Real word of mouth only starts when a complete stranger is willing to risk their time and money to recommend a game to another stranger. For this to happen, the game must have a clear Hook, that specific unique feature that can be described in a single sentence.\n\nIf you cannot articulate how your game differs from a hundred similar ones on Steam, a random player won't be able to sell it to their acquaintances either. Your job as a marketer is to give people this short and concise thesis rather than hoping they will figure out how to praise your project on their own.",
        },
        {
          id: "stay-sane",
          question: "How do I stay sane while trying to control all metrics and feedback alone?",
          answer:
            "Game marketing in 2026 has become a full scale operational data job where it is easy to get buried in spreadsheets and lose sight of the game itself. This is exactly why Trap Plan exists: it is your navigator in the world of Steam marketing that translates dry Steamworks figures into human language.\n\nInstead of intuitively changing tags or guessing why your CTR dropped, you get a clear roadmap from page audits and Metadata optimization to festival release strategies. We at Trap Plan have already made every possible mistake while working with algorithms, so we help you focus on the most important part, development, while we handle the growth of your Wishlist Velocity.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
  {
    slug: "make-a-great-game-avoid-a-flop-on-steam",
    title:
      "Developers say the most important thing is to make a great game. But how do you avoid a total flop on Steam?",
    emoji: "🚀",
    date: "2026-02-09",
    excerpt:
      "A practical card-style guide to building a Steam marketing strategy: tags/metadata, weekly beats, organic traffic, influencer leverage, events, pricing, PR, curators, console pivots, and wishlist targets.",
    readingMinutes: 10,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/make-a-great-game-avoid-a-flop-cover.png",
    cardArticle: {
      title:
        "Developers say the most important thing is to make a great game. But how do you avoid a total flop on Steam?",
      lead: "And how many wishlists are actually enough? We explain how to build a proper marketing strategy for your project.",
      cards: [
        {
          id: "masterpiece-invisible",
          question:
            "The hard truth is that even a masterpiece remains invisible without external signals for the platform",
          answer:
            "Quality is a prerequisite for success but it is never a guarantee of visibility because the Steam Algorithm operates on cold data rather than artistic merit. Think of the storefront as a high frequency trading floor where the platform only bets on winners who have already proven their Wishlist Velocity.\n\nIf you ignore marketing for games you are essentially launching into a vacuum and hoping that a player will stumble upon your app ID among fourteen thousand other releases this year without any external signals telling the system that your project is worth a slot in the Discovery Queue.",
        },
        {
          id: "where-to-start",
          question: "I understand the importance of promotion but where exactly should I start right now",
          answer:
            "Before you drive a single click of traffic you must ensure that your Metadata and tags in Steamworks are tuned for your target player rather than an abstract audience. Marketing for games begins with the technical optimization of the store page where every screenshot and every line of text works to increase your Conversion Rate.\n\nIf your tags conflict with the actual gameplay even a massive influx of users will lead to bounces which tells the system that your game is low quality and subsequently kills your organic reach.",
        },
        {
          id: "keep-people-coming-back",
          question: "Okay the page is a conversion funnel but how do I keep people coming back to it",
          answer:
            "You cannot simply announce a game once and go silent until launch because player attention is incredibly short lived and easily captured by competitors. A professional strategy involves scheduled marketing beats that force the wishlist counter to move upward every single week throughout the development cycle.\n\nEvery trailer update or mechanic reveal must function as a hook to rebuild awareness so that by the time you hit the release button you have a massive pool of primed users ready to buy.",
        },
        {
          id: "no-ad-budget",
          question: "That makes sense but where do I find this traffic if I have no ad budget",
          answer:
            "Platforms like Reddit or TikTok can generate thousands of wishlists overnight but they are notoriously toxic toward traditional advertising and require an organic approach. Marketing for games on these platforms is built on showing the development process or unique technical breakthroughs that provoke genuine discussion.\n\nIf a post hits the top of a subreddit the momentum carries over to your Steam page which dramatically increases your chances of being picked up by the platform's internal recommendation engines without spending a cent.",
        },
        {
          id: "break-out-of-bubble",
          question: "I am posting on social media but how do I break out of my existing bubble",
          answer:
            "A single YouTube video from a creator who specializes in your genre can provide a more powerful boost to your Conversion Rate than any solo social media effort. Marketing for games in this context is about identifying influencers whose viewers already love your specific mechanics and visual style.\n\nPartnering with creators allows you to verify your project in the eyes of the mass market and secure the explosive Wishlist Velocity needed to land on the New and Trending list on day one.",
        },
        {
          id: "stress-test-before-launch",
          question: "Is there a way to stress test all of this before I actually commit to a launch date",
          answer:
            "Participation in events like Steam Next Fest is not just a way to entertain fans but a brutal audit of your entire marketing strategy. At this stage marketing for games becomes a data game where you track engagement and player retention within your demo.\n\nIf the build shows high average playtime Steam interprets this as a signal of high potential and begins to aggressively promote the full version of your game in the Discovery Queue before you even go live.",
        },
        {
          id: "regional-pricing",
          question: "I have the wishlists but what if people are hesitant to pay the full price",
          answer:
            "You are leaving a significant amount of revenue on the table if you ignore Regional Pricing and simply convert your base currency without considering local market realities. Smart marketing for games includes fine tuning prices through Steamworks for regions like China or Latin America to exponentially increase unit volume.\n\nThis creates the necessary sales velocity for the algorithm to lock your game into the Global Top Sellers list which sustains organic traffic for weeks after the initial launch window.",
        },
        {
          id: "press-and-curators",
          question: "Everything is ready for release but how do I get the press and curators to notice me",
          answer:
            "Professional marketing for games requires moving away from mass emails toward surgical outreach targeting people who actually influence your specific subgenre. You need a Press Kit where screenshots and gifs are optimized for immediate use in articles without any extra editing required by the journalist.\n\nInstead of asking for a generic review you should pitch a unique angle like a technical innovation or how your game fills a specific void in the current market.",
        },
        {
          id: "steam-curators-worth-it",
          question: "Speaking of curators is it worth spending any time on the Steam Curator system",
          answer:
            "The majority of curators on Steam hold no real power but top tier groups can provide a measurable boost if your game fits their specific niche perfectly. Marketing for games here involves filtering through the noise to find groups that maintain active discussions and have a demonstrably loyal following.\n\nUse the Curator Connect tool in Steamworks with extreme caution and avoid sending keys to every requester as this often dilutes your stats without providing any high quality wishlist traffic.",
        },
        {
          id: "console-marketing",
          question: "If I plan on moving to consoles does the marketing change significantly",
          answer:
            "On PlayStation and Xbox you are operating in a much more closed ecosystem where success is often dictated by your ability to secure featuring from the platform holder itself. Marketing for games on consoles is built on long term relationship management and providing high quality trailers for the platform's official channels.\n\nUnlike Steam where algorithms dominate the consoles still rely heavily on human curators and your ability to participate in major promotional cycles or subscription services like Game Pass.",
        },
        {
          id: "wishlists-break-even",
          question: "Everyone mentions wishlists but what is the actual number needed to break even",
          answer:
            "In the current PC market a safe threshold for a successful launch that triggers the algorithm is generally between seven thousand and ten thousand wishlists. Marketing for games is a game of probability where you calculate your expected Conversion Rate to understand exactly how many people will buy the game in the first twenty four hours.\n\nIf your wishlist base is too small even a generous Launch Discount will fail to generate the critical mass of sales required to keep you on the front page.",
        },
        {
          id: "reviews-impact",
          question: "The sales are coming in but my reviews are dropping. How does this impact my growth",
          answer:
            "Your Steam review score is your most valuable marketing asset and it directly dictates your visibility in the Discovery Queue and the trust level of new visitors. If your rating drops below eighty percent positive the algorithm begins to throttle your impressions because it views the project as a risk to the user experience.\n\nIn this scenario marketing for games shifts into crisis management where you must use the Community Hub to address grievances and ship patches that prove to the audience you are committed to the long term.",
        },
        {
          id: "ignore-marketing",
          question: "What happens if I ignore all of this and just let the game speak for itself",
          answer:
            "The most likely outcome of launching without a marketing strategy is the Flatline where you see a tiny spike on day one followed by near zero daily sales. Without the momentum generated by pre launch beats you will never clear the threshold for the New and Trending list and your game will be buried at the bottom of the store.\n\nYour masterpiece becomes a commercial failure not because the code was bad but because you failed to give the platform's robots a reason to care about your success.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
  {
    slug: "driving-traffic-but-wishlists-standing-still",
    title: "I am driving traffic but my wishlists are standing still",
    emoji: "🧯",
    date: "2026-02-09",
    excerpt:
      "If you’re driving traffic but wishlists aren’t moving, you likely have a conversion leak: cold audience, tag mismatch, weak store page, or low-intent channels. This card-style Q&A breaks down where the funnel fails and how to fix it.",
    readingMinutes: 7,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/driving-traffic-but-wishlists-cover.png",
    cardArticle: {
      title: "I am driving traffic but my wishlists are standing still",
      lead: "There is a leak in the funnel somewhere — but where exactly? And how do you properly \"warm up\" a cold audience so the Steam algorithm doesn't decide your game is a lost cause?",
      cards: [
        {
          id: "pumping-money-into-ads",
          question: "I am pumping money into ads but the wishlist counter is barely moving",
          answer:
            "Most likely you are driving cold traffic to a page that is not ready for conversion or your Conversion Rate is being destroyed by a mismatch in expectations. Effective marketing for games in the PC segment is built on precise alignment with genre tags because the Steam Algorithm analyzes user behavior to decide if your project deserves more impressions.\n\nIf people arrive from an external link but do not hit the wishlist button it sends a massive negative signal to the system that the project is not interesting which actually hurts your organic reach more than having no ads at all.",
        },
        {
          id: "thousands-of-visitors",
          question: "If I am bringing thousands of visitors why does Steam think my game is a failure",
          answer:
            "The platform does not care about raw traffic numbers but it cares deeply about the quality of those visitors and their intent to buy. When you run broad ads without a filtered audience you end up with a high bounce rate which ruins your internal metrics in Steamworks.\n\nThe algorithm interprets this low engagement as a sign that your game is poorly made or misleadingly marketed and it will quickly bury your project in the search results to protect the user experience of its shoppers.",
        },
        {
          id: "reddit-bans",
          question: "Reddit remains the gold standard for external traffic but how do I avoid getting banned",
          answer:
            "This platform is one of the few places where you can gain thousands of high quality wishlists overnight without spending a cent on an ad manager. Marketing for games here is about finding hyper specific subreddits where your direct target audience lives and understands your niche mechanics.\n\nThe mistake most developers make is dumping a cold ad into a massive board like r/gaming only to get banned whereas a transparent post about a technical breakthrough in a niche community yields a conversion rate several times higher.",
        },
        {
          id: "twitter-viability",
          question: "Twitter has been highly unstable lately so is it still a viable channel for growth",
          answer:
            "The effectiveness of this platform currently depends entirely on your project's visual style and your ability to trend within a very specific developer and publisher circle. In marketing for games Twitter often becomes an echo chamber where you are seen only by your peers which results in almost zero wishlist growth from actual players.\n\nHowever it remains indispensable for networking and catching the eye of platform scouts or major influencers who are constantly looking for fresh content for their upcoming showcases.",
        },
        {
          id: "youtube-budget",
          question: "YouTube is where the heavy hitters play but does budget always dictate success",
          answer:
            "If you have the resources for high quality integrations YouTube can be your primary source of high intent traffic because long form video allows for a deep dive into gameplay loops. Marketing for games through video platforms requires surgical selection of creators who specialize in your exact genre since a random shoutout from a massive generic channel might give you views but no sales.\n\nYour goal is to secure placements with creators who truly understand mechanics and can articulate to their audience why your project belongs on their wishlist.",
        },
        {
          id: "tiktok-influencers",
          question: "Short form video on TikTok works on volume but is it better to buy influencers instead",
          answer:
            "Attempting to grow a studio account on TikTok can be a long and fruitless journey unless you have a viral visual hook that can be understood in under two seconds. It is far more effective in marketing for games to leverage short form video through established influencers who already know how to craft engaging hooks for their loyal base.\n\nThese dynamic clips are great for awareness but remember that this traffic is often the coldest so your Steam page must be flawless to prevent these users from bouncing immediately.",
        },
        {
          id: "influencer-waste",
          question: "How do I stop influencer integrations from becoming a complete waste of my budget",
          answer:
            "The most common mistake is chasing follower counts while ignoring actual engagement and the overlap between the creator's audience and your genre. Professional marketing for games through influencers requires a deep dive into their comment sections and previous reviews to see if their recommendations actually carry weight with their viewers.\n\nYou do not just need views you need creators who can sell the idea of the game and generate genuine hype for your participation in festivals or your upcoming launch date.",
        },
        {
          id: "what-is-working",
          question: "If traffic is coming from five different places how do I know what is actually working",
          answer:
            "Steamworks provides tools for tracking external links through UTM tags but they often only provide a partial view of the customer journey. A sophisticated approach to marketing for games involves using the platform's native analytics in tandem with daily monitoring of wishlist dynamics after every major post or integration.\n\nThis is the only way to identify your most efficient channel and pivot your budget away from an underperforming Twitter thread toward a high performing Reddit post or YouTube video.",
        },
        {
          id: "stop-spending-on-ads",
          question: "Should I stop spending money on ads until I fix my internal conversion rate",
          answer:
            "If your conversion from a visit to a wishlist on external traffic drops below a critical threshold then no amount of budget will save your launch. In the world of PC marketing this is a clear signal that you have either picked the wrong audience or your store page is creating friction for the target player.\n\nStop and reevaluate your ad creatives and your tags because every ineffective click further convinces the Steam Algorithm that your game does not deserve a spot in the Discovery Queue.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
  {
    slug: "steam-next-fest-the-masterclass-in-discovery",
    title: "Steam Next Fest: The Masterclass in Discovery",
    emoji: "🎪",
    date: "2026-01-28",
    excerpt:
      "A 2026 deep-dive on Steam Next Fest: what matters now, the first 48 hours, conversion signals, demo page strategy, influencer timing, and how to turn guidance into execution.",
    readingMinutes: 8,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/steam-next-fest-the-masterclass-in-discovery.png",
    content: [
      {
        type: "p",
        text: "This article is rendered as a dedicated editorial page.",
      },
    ],
  },
  {
    slug: "steam-next-fest-2026-the-ultimate-strategy-guide",
    title: "Steam Next Fest 2026: The Ultimate Strategy Guide",
    emoji: "🎪",
    date: "2026-01-29",
    excerpt:
      "A high-performance, Q&A card format guide on how to win Steam Next Fest 2026: wishlist velocity, tags, demo retention, livestream strategy, curator scams, and post-fest follow-up.",
    readingMinutes: 7,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cover: "/images/steam-next-fest-2026-the-ultimate-strategy-guide.png",
    cardArticle: {
      title: "Steam Next Fest 2026: The Ultimate Strategy Guide",
      lead: "Participating in the February Steam Next Fest is a high-stakes move. In 2026, the sheer volume of high-quality demos means that just \"being there\" isn't enough. You have to understand that Steam isn't just a store. It’s a massive algorithm that rewards specific player behaviors. This guide covers how to prepare your demo and your page to ensure you don't get lost in the noise.",
      cards: [
        {
          id: "wishlist-velocity",
          question:
            'Why is your "Wishlist Velocity" the only metric that matters before day one?',
          answer:
            "The Steam Algorithm doesn't start working when the festival begins; it starts tracking your game weeks in advance. Steam looks at your Wishlist Velocity, which is simply how fast you are gaining new followers compared to other games.\n\nIf you enter the festival with a \"cold\" page and zero momentum, the algorithm will bury you on page 50 of your category. You need to spend the month of January driving people to your page through devlogs, GIFs, or social media.\n\nIf Steam sees a spike in interest before the event even starts, it \"flags\" your game as a potential hit and gives you a much better starting position on the festival’s front page.",
          proTip:
            'Set up a "Steam Playtest" a month before the fest to get people playing. This activity builds a foundation of active users that the algorithm loves to see.',
        },
        {
          id: "tags-and-page-design",
          question: "How do Steam Tags and page design decide who sees your game?",
          answer:
            "Steam organizes the festival based on tags, and these tags act like the GPS for your game. If your Metadata Optimization is wrong, Steam will show your game to the wrong crowd.\n\nFor example, if you are tagged as \"Survival\" but you are actually a slow \"Crafting Sim,\" people will download your demo, realize it’s not what they wanted, and quit immediately. This high \"bounce rate\" tells the Steam Algorithm that your game isn't satisfying players, and it will stop recommending you.\n\nYou must audit your top five tags to ensure they match your gameplay perfectly. Also, keep your \"About This Game\" section simple: use short sentences and high-quality GIFs instead of long walls of text.",
          proTip:
            "Look at the \"More Like This\" section on your store page; if those games don't look like yours, your tags are wrong and need to be fixed before the fest starts.",
        },
        {
          id: "demo-success",
          question: 'What makes a demo "successful" in the eyes of the algorithm?',
          answer:
            "The most important signal for Steam during Next Fest is \"Median Playtime.\" It isn't just about how many people download your demo; it’s about how long they stay inside it.\n\nIf thousands of people download the game but only play for two minutes, Steam assumes the game is broken or boring and will lower your visibility. You need to make sure your demo is \"sticky\" by putting your most exciting mechanics in the first ten minutes.\n\nAvoid long, boring tutorials. The longer people play, the more the algorithm believes your game is high-quality, which leads to your game being featured in more Discovery Queues across the entire platform.",
          proTip:
            "Add a \"Wishlist Now\" button directly on the main menu of your demo and on the \"Quit\" screen so players don't forget to follow you.",
        },
        {
          id: "livestream",
          question: "How do you use a Livestream to stay at the top of the charts?",
          answer:
            "During Next Fest, Steam features a \"Live Now\" bar at the top of the event page, and this is the most valuable real estate on the site. To stay there, you need a high number of concurrent viewers on your store page.\n\nThe best way to handle this in 2026 is to run a high-quality, pre-recorded loop of your best gameplay, but you must have someone active in the chat to answer questions. This keeps people on the page longer, increasing your \"dwell time.\"\n\nThe longer a person stays on your page to watch the stream, the more likely they are to hit the wishlist button, and Steam rewards this engagement by keeping you at the top of the list.",
          proTip:
            "Make sure your stream bitrate is set correctly in Steamworks; a laggy or low-resolution stream will drive potential wishlisters away instantly.",
        },
        {
          id: "curators",
          question: 'Why should you ignore almost every email from a "Steam Curator"?',
          answer:
            "As soon as your demo gains traction, your inbox will be flooded with emails from \"Steam Curators\" asking for keys in exchange for a review. You need to know that 99% of these are a scam.\n\nThese are scammers who use bots to inflate their follower counts so they can trick developers into giving them keys, which they then sell on grey market sites like G2A.\n\nReal influencers and curators rarely reach out with a generic \"give me keys\" email. If you send them keys, you aren't getting marketing. You are just losing potential revenue to resellers.",
          proTip:
            "Only send keys through the official \"Curator Connect\" tool inside Steam. This ensures the key goes directly to the curator's account and cannot be stolen or sold.",
        },
        {
          id: "regional-pricing",
          question:
            "How does Regional Pricing help you grow even if you aren't selling yet?",
          answer:
            "A lot of developers think pricing doesn't matter until the game is actually for sale, but that's a mistake. Steam’s popularity rankings are global.\n\nIf you haven't localized your store page and signaled that you will support fair Regional Pricing for major markets like China, Brazil, or Turkey, you are losing out on a massive number of wishlists.\n\nEven though these wishlists might come from regions with lower purchasing power, they count exactly the same as a US wishlist in the eyes of the algorithm. Having a global appeal helps push your game higher on the overall \"Trending\" charts, which in turn brings in more high-value traffic from everywhere else.",
          proTip:
            "At a minimum, localize your demo’s UI and Steam page into Simplified Chinese, as this is currently the most active audience for finding new demos.",
        },
        {
          id: "after-fest",
          question:
            "How do you prevent people from forgetting your game after the fest ends?",
          answer:
            "The week after Next Fest is usually when you see a \"wishlist hangover,\" where people start clearing out games they aren't actually interested in.\n\nTo prevent this, you need to stay active in the Steam News Hub. Don't just say \"thanks for playing.\" Share actual data, like how many levels were completed or what the most popular character was.\n\nThis keeps your game in the players' notification feeds and transforms them from \"casual demo players\" into a loyal community. The goal is to keep the conversation going so that when you finally launch with your discount, they are already primed to buy.",
          proTip:
            "Leave your demo live for 48 hours after the festival officially ends to catch the \"last-minute\" crowd who bookmarked your game but didn't have time to play during the busy week.",
        },
      ],
    },
    content: [
      {
        type: "p",
        text: "This article is presented in a card format. If you are seeing this text only, please open it in the updated blog template.",
      },
    ],
  },
];

function dedupePostsBySlug(posts: BlogPost[]) {
  const seen = new Set<string>();
  return posts.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

function toDateMs(date: string) {
  const ms = new Date(date).getTime();
  return Number.isFinite(ms) ? ms : 0;
}

export const BLOG_POSTS: BlogPost[] = dedupePostsBySlug([
  ...MANUAL_BLOG_POSTS,
  ...BLOG_IMPORTED_POSTS,
]).sort((a, b) => toDateMs(b.date) - toDateMs(a.date));
