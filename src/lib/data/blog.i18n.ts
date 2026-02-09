import { BLOG_POSTS, type BlogPost, type BlogBlock, type CardArticle } from "@/lib/data/blog";
import type { Locale } from "@/lib/i18n";
import { BLOG_ES_TRANSLATIONS } from "./blog.es";
import { BLOG_FR_TRANSLATIONS } from "./blog.fr";
import { BLOG_IT_TRANSLATIONS } from "./blog.it";
import { BLOG_DE_TRANSLATIONS } from "./blog.de";
import { BLOG_ZH_TRANSLATIONS } from "./blog.zh";

export type BlogPostTranslation = {
  title?: string;
  excerpt?: string;
  category?: string;
  emoji?: string;
  content?: BlogBlock[];
  cardArticle?: CardArticle;
};

export type BlogTranslationsBySlug = Record<string, BlogPostTranslation>;

function translationsForLocale(locale: Locale): BlogTranslationsBySlug {
  if (locale === "es") return BLOG_ES_TRANSLATIONS;
  if (locale === "fr") return BLOG_FR_TRANSLATIONS;
  if (locale === "it") return BLOG_IT_TRANSLATIONS;
  if (locale === "de") return BLOG_DE_TRANSLATIONS;
  if (locale === "zh") return BLOG_ZH_TRANSLATIONS;
  return {};
}

function applyTranslation(post: BlogPost, t?: BlogPostTranslation): BlogPost {
  if (!t) return post;

  return {
    ...post,
    title: t.title ?? post.title,
    excerpt: t.excerpt ?? post.excerpt,
    category: t.category ?? post.category,
    emoji: t.emoji ?? post.emoji,
    content: t.content ?? post.content,
    cardArticle: t.cardArticle ?? post.cardArticle,
  };
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const dict = translationsForLocale(locale);
  return BLOG_POSTS.map((p) => applyTranslation(p, dict[p.slug]));
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  const base = BLOG_POSTS.find((p) => p.slug === slug);
  if (!base) return undefined;
  const dict = translationsForLocale(locale);
  return applyTranslation(base, dict[slug]);
}
