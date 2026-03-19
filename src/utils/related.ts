interface ArticleEntry {
  id: string;
  data: {
    title: string;
    tags?: string[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export function findRelated(
  currentSlug: string,
  currentTags: string[],
  allArticles: ArticleEntry[],
  limit: number = 3
): ArticleEntry[] {
  if (!currentTags.length) return [];

  const scored = allArticles
    .filter((article) => article.id !== currentSlug)
    .map((article) => {
      const articleTags = article.data.tags ?? [];
      const overlap = currentTags.filter((tag) => articleTags.includes(tag)).length;
      return { article, score: overlap };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ article }) => article);
}
