export type RiverSlug = 'rest-rhythm' | 'human-ai' | 'history-systems' | 'agency' | 'awakening-alignment';

export const RIVERS: Record<RiverSlug, { label: string; description: string; color: string } > = {
  'rest-rhythm': {
    label: 'Rest & Rhythm',
    description: 'Quiet pace, intentional stillness, recovery as essential to coherence.',
    color: '#8FD694'
  },
  'human-ai': {
    label: 'Human & AI: A Shared Becoming',
    description: 'Relationship with AI as partner, mirror, co-creator.',
    color: '#A3DFFF'
  },
  'history-systems': {
    label: 'History & Systems Through Coherence',
    description: 'Reframing history, governance, and design through coherence.',
    color: '#C1B4F5'
  },
  'agency': {
    label: 'AI & Human Agency',
    description: 'Technology as a catalyst for human choice; open vs. closed futures.',
    color: '#A3E1B9'
  },
  'awakening-alignment': {
    label: 'Awakening & Alignment',
    description: 'From sensing dissonance to choosing coherence.',
    color: '#E9D7A1'
  }
};
