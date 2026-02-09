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
    title: "Make a great game. Avoid a flop on Steam.",
    emoji: "🚀",
    date: "2026-02-09",
    excerpt:
      "A practical card-style guide to building a Steam marketing strategy: tags/metadata, weekly beats, organic traffic, influencer leverage, events, pricing, PR, curators, console pivots, and wishlist targets.",
    readingMinutes: 10,
    category: "Steam",
    authorName: "Pavel Beresnev",
    authorRole: "CEO Trap Plan Agency, Marketing Expert",
    cardArticle: {
      title: "Developers say the most important thing is to make a great game. But how do you avoid a total flop on Steam?",
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
