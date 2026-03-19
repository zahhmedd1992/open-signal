export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export function isNew(date: Date): boolean {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const fortyEightHours = 48 * 60 * 60 * 1000;
  return diffMs <= fortyEightHours;
}
