import { BLOG_POSTS } from "@/lib/data/blog";

export async function GET() {
  const siteUrl = "https://www.trapplan.com";

  const items = BLOG_POSTS.slice(0, 20).map((post) => {
    const url = `${siteUrl}/blog/${post.slug}`;
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      ${post.category ? `<category>${post.category}</category>` : ""}
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TrapPlan Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Game marketing tips, case studies, and strategies from TrapPlan.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
