export function readingTime(text: string | undefined, wpm = 200): string | null {
  if (!text) return null;
  const words = (text.trim().match(/\S+/g) || []).length;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} MIN READ`;
}

export function excerptFrom(text: string | undefined, maxLen = 220): string | null {
  if (!text) return null;
  const firstPara = text.split(/\n\s*\n/)[0] || text;
  const clean = firstPara.replace(/[#>*_`~\[\]]/g, '').trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

