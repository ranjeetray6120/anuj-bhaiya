import rawBlogs from "./blogs.json";

export interface BlogContentSection {
  heading: string;
  body: string;
  bullets?: string[];
  callout?: {
    title: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
  gradient: string;
  badge: string;
  stats: string;
  keyTakeaways: string[];
  sections: BlogContentSection[];
}

export const blogPosts: BlogPost[] = rawBlogs as BlogPost[];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getAllBlogPostIds(): string[] {
  return blogPosts.map((p) => p.id);
}
