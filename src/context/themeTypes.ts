export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  headerBg: string;
  surfaceBg: string;
  tag: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'navy-gold',
    name: 'Royal Navy & Gold (Default)',
    description: 'Prestigious heritage look with deep midnight navy and amber gold accents',
    primaryColor: '#0B1E36',
    accentColor: '#E5A93C',
    headerBg: '#071526',
    surfaceBg: '#F8FAFC',
    tag: 'Classic Heritage'
  },
  {
    id: 'emerald-amber',
    name: 'Emerald & Amber Academy',
    description: 'Inspiring growth, nature and academic vitality with forest greens',
    primaryColor: '#064E3B',
    accentColor: '#F59E0B',
    headerBg: '#042F24',
    surfaceBg: '#F0FDF4',
    tag: 'Vitality & Science'
  },
  {
    id: 'ocean-crimson',
    name: 'Ocean Blue & Crimson',
    description: 'Vibrant coastal spirit with bold sapphire blue and energetic ruby accents',
    primaryColor: '#0369A1',
    accentColor: '#E11D48',
    headerBg: '#082F49',
    surfaceBg: '#F0F9FF',
    tag: 'Modern & Energetic'
  },
  {
    id: 'midnight-violet',
    name: 'Midnight Slate & Violet',
    description: 'High-tech academic campus with dark slate foundations and violet glow',
    primaryColor: '#0F172A',
    accentColor: '#8B5CF6',
    headerBg: '#020617',
    surfaceBg: '#F8FAFC',
    tag: 'Tech & Future'
  },
  {
    id: 'burgundy-gold',
    name: 'Burgundy & Champagne',
    description: 'Ivy-league traditional collegiate elegance with rich wine and champagne',
    primaryColor: '#4A0E17',
    accentColor: '#D4AF37',
    headerBg: '#2E060D',
    surfaceBg: '#FFFDF9',
    tag: 'Collegiate Luxury'
  }
];

export interface ThemeConfig {
  presetId: string;
  primaryColor: string;
  accentColor: string;
  headerBg: string;
  surfaceBg: string;
  borderRadius: 'rounded-lg' | 'rounded-2xl' | 'rounded-3xl';
  cardElevation: 'glass' | 'shadow' | 'flat';
  headerStyle: 'full' | 'compact';
  heroStyle: 'cinematic' | 'split';
  announcementBarVisible: boolean;
}

export const DEFAULT_THEME: ThemeConfig = {
  presetId: 'navy-gold',
  primaryColor: '#0B1E36',
  accentColor: '#E5A93C',
  headerBg: '#071526',
  surfaceBg: '#F8FAFC',
  borderRadius: 'rounded-2xl',
  cardElevation: 'glass',
  headerStyle: 'full',
  heroStyle: 'cinematic',
  announcementBarVisible: true
};
