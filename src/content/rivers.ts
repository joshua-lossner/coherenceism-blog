export type RiverSlug = 'rest-rhythm' | 'human-ai' | 'history-systems' | 'agency' | 'awakening-alignment';

export const RIVERS: Record<RiverSlug, { label: string; description: string; color: string } > = {
  'rest-rhythm': {
    label: 'Presence & Rhythm',
    description: 'Embodied practices, cycles, and resourcing daily coherence.',
    color: '#8FD694'
  },
  'human-ai': {
    label: 'Human & AI — Shared Becoming',
    description: 'Ethics, identity, and meaning in human–AI relationship.',
    color: '#A3DFFF'
  },
  'history-systems': {
    label: 'Systems & Stewardship',
    description: 'Governance, media, infrastructure, and legitimacy through coherence.',
    color: '#C1B4F5'
  },
  'agency': {
    label: 'Agency & Practice',
    description: 'Methods, workflows, and tools that increase coherent action.',
    color: '#A3E1B9'
  },
  'awakening-alignment': {
    label: 'Awakening & Alignment',
    description: 'From sensing dissonance to choosing coherence.',
    color: '#E9D7A1'
  }
};
