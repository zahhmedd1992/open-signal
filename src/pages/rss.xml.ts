import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const deepSignals = await getCollection('deep-signals');
  const briefings = await getCollection('briefings');
  const signalMaps = await getCollection('signal-maps');
  const longView = await getCollection('long-view');
  const openSource = await getCollection('open-source');

  const allArticles = [
    ...deepSignals.map((e) => ({ ...e, collection: 'deep-signals' })),
    ...briefings.map((e) => ({ ...e, collection: 'briefings' })),
    ...signalMaps.map((e) => ({ ...e, collection: 'signal-maps' })),
    ...longView.map((e) => ({ ...e, collection: 'long-view' })),
    ...openSource.map((e) => ({ ...e, collection: 'open-source' })),
  ].sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  return rss({
    title: 'Open Signal',
    description: 'Free AI-powered intelligence and analysis',
    site: context.site ?? 'https://open-signal.vercel.app',
    items: allArticles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishDate,
      description: article.data.description,
      link: `/${article.collection}/${article.id}/`,
    })),
  });
}
