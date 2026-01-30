import type { Metadata } from "next";
import CardArticle, { type CardArticleData } from "@/components/ui/CardArticle";

export const metadata: Metadata = {
  title: "Card Article Demo",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const DATA: CardArticleData = {
  title: "Steam Next Fest 2026: The Ultimate Strategy Guide",
  lead: "Participating in the February Steam Next Fest is a high-stakes move. In 2026, the sheer volume of high-quality demos means that just \"being there\" isn't enough. You have to understand that Steam isn't just a store. It’s a massive algorithm that rewards specific player behaviors. This guide covers how to prepare your demo and your page to ensure you don't get lost in the noise.",
  cards: [
    {
      id: "wishlist-velocity",
      question:
        'Why is your "Wishlist Velocity" the only metric that matters before day one?',
      answer:
        "The Steam Algorithm doesn't start working when the festival begins; it starts tracking your game weeks in advance. Steam looks at your Wishlist Velocity—which is simply how fast you are gaining new followers compared to other games.\n\nIf you enter the festival with a \"cold\" page and zero momentum, the algorithm will bury you on page 50 of your category. You need to spend the month of January driving people to your page through devlogs, GIFs, or social media.\n\nIf Steam sees a spike in interest before the event even starts, it \"flags\" your game as a potential hit and gives you a much better starting position on the festival’s front page.",
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
};

export default function CardArticleDemoPage() {
  return <CardArticle data={DATA} />;
}
