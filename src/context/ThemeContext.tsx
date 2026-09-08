import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemePreset, ThemeConfig } from './themeTypes';
import { THEME_PRESETS, DEFAULT_THEME } from './themeTypes';

export { THEME_PRESETS, DEFAULT_THEME };
export type { ThemePreset, ThemeConfig };

interface ThemeContextType {
  theme: ThemeConfig;
  applyPreset: (presetId: string) => void;
  updateTheme: (partial: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  saveTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Calculate contrast text color (black or white) based on background hex
export const getReadableTextColor = (bgHex: string): string => {
  const hex = bgHex.replace('#', '');
  if (hex.length < 6) return '#FFFFFF';
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#0B1E36' : '#FFFFFF';
};

// Helper function to inject global dynamic styles into document head
export const injectDynamicStyles = (t: ThemeConfig) => {
  if (typeof document === 'undefined') return;

  let styleEl = document.getElementById('ssvehs-dynamic-theme-stylesheet') as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'ssvehs-dynamic-theme-stylesheet';
    document.head.appendChild(styleEl);
  }

  const accentContrast = getReadableTextColor(t.accentColor);

  styleEl.innerHTML = `
    /* === SSVEHS GLOBAL DYNAMIC THEME ENGINE === */
    :root {
      --color-navy: ${t.primaryColor} !important;
      --color-navy-dark: ${t.headerBg} !important;
      --color-navy-light: ${t.primaryColor} !important;
      --color-gold: ${t.accentColor} !important;
      --color-surface: ${t.surfaceBg} !important;
      --theme-primary: ${t.primaryColor} !important;
      --theme-accent: ${t.accentColor} !important;
      --theme-header: ${t.headerBg} !important;
      --theme-surface: ${t.surfaceBg} !important;
    }

    body {
      background-color: ${t.surfaceBg} !important;
    }

    /* Selection highlight */
    ::selection {
      background-color: ${t.accentColor} !important;
      color: ${accentContrast} !important;
    }

    /* Headings default color for light backgrounds */
    h1, h2, h3, h4, h5, h6 {
      color: ${t.primaryColor};
    }

    /* CRITICAL: Guarantee 100% text readability across dark backgrounds without affecting light headers */
    .hero-heading-white,
    .hero-heading-white > span:first-child,
    .hero-title,
    nav h1, nav h2, nav h3, nav h4, nav h5, nav h6,
    nav a, nav button, nav button span, nav span,
    footer h1, footer h2, footer h3, footer h4, footer h5, footer h6,
    footer a, footer p,
    .cta-banner h1, .cta-banner h2, .cta-banner h3, .cta-banner h4,
    .page-banner h1, .page-banner h2, .page-banner h3, .page-banner h4 {
      color: #ffffff !important;
    }

    nav a.text-amber-400,
    nav button.text-amber-400,
    nav [class*="text-amber-400"],
    nav .text-amber-400 {
      color: ${t.accentColor} !important;
    }

    /* Primary Navy & Admin Dark Bar Backgrounds */
    .bg-\\[\\#0B1E36\\], 
    [class*="bg-[#0B1E36]"] {
      background-color: ${t.primaryColor} !important;
    }
    .bg-\\[\\#071526\\], 
    [class*="bg-[#071526]"] {
      background-color: ${t.headerBg} !important;
    }
    .bg-\\[\\#16325B\\], 
    [class*="bg-[#16325B]"] {
      background-color: ${t.primaryColor} !important;
    }
    .bg-\\[\\#00394f\\], 
    [class*="bg-[#00394f]"] {
      background-color: ${t.primaryColor} !important;
    }
    .bg-\\[\\#002147\\], 
    [class*="bg-[#002147]"] {
      background-color: ${t.primaryColor} !important;
    }

    /* Dark hover states */
    [class*="hover:bg-[#002838]"]:hover,
    [class*="hover:bg-slate-800"]:hover {
      background-color: ${t.headerBg} !important;
    }

    /* Dynamic Gradients (Only applied to standalone banners, never covering images or videos) */
    .navy-gradient,
    .page-banner,
    .cta-banner {
      background-image: linear-gradient(135deg, ${t.headerBg} 0%, ${t.primaryColor} 60%, ${t.headerBg} 100%) !important;
    }

    /* Text Color Overrides for Light Containers */
    .text-\\[\\#0B1E36\\], 
    [class*="text-[#0B1E36]"] {
      color: ${t.primaryColor} !important;
    }
    .text-\\[\\#002147\\], 
    [class*="text-[#002147]"] {
      color: ${t.primaryColor} !important;
    }
    .text-\\[\\#00394f\\], 
    [class*="text-[#00394f]"] {
      color: ${t.primaryColor} !important;
    }

    /* Accent & Gold Color Overrides */
    .bg-amber-500, 
    [class*="bg-amber-500"] {
      background-color: ${t.accentColor} !important;
      color: ${accentContrast} !important;
    }
    .bg-amber-500 *, 
    [class*="bg-amber-500"] * {
      color: ${accentContrast} !important;
    }

    [class*="hover:bg-amber-600"]:hover,
    [class*="hover:bg-amber-500"]:hover {
      filter: brightness(0.92) !important;
    }
    .text-amber-400, 
    [class*="text-amber-400"] {
      color: ${t.accentColor} !important;
    }
    .text-amber-500, 
    [class*="text-amber-500"] {
      color: ${t.accentColor} !important;
    }
    .text-amber-600, 
    [class*="text-amber-600"] {
      color: ${t.accentColor} !important;
    }
    .text-amber-700, 
    [class*="text-amber-700"] {
      color: ${t.accentColor} !important;
    }
    .border-amber-400, 
    [class*="border-amber-400"], 
    .border-amber-500, 
    [class*="border-amber-500"] {
      border-color: ${t.accentColor} !important;
    }
    .border-b-amber-500, 
    [class*="border-b-amber-500"] {
      border-bottom-color: ${t.accentColor} !important;
    }

    /* Rings and focus borders */
    [class*="ring-[#00394f]"] {
      --tw-ring-color: ${t.primaryColor} !important;
    }
    [class*="border-[#00394f]"] {
      border-color: ${t.primaryColor} !important;
    }

    /* Gold gradients on dark hero */
    .gold-gradient-text {
      background: linear-gradient(135deg, #ffffff 15%, ${t.accentColor} 85%) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      display: inline-block;
    }
    .section-badge {
      background: ${t.accentColor}18 !important;
      color: ${t.accentColor} !important;
      border-color: ${t.accentColor}40 !important;
    }

    /* === HIGHEST SPECIFICITY: WHITE TEXT ON DARK SECTIONS ALWAYS WINS === */
    header .bg-\\[\\#071526\\],
    header .bg-\\[\\#071526\\] a,
    header .bg-\\[\\#071526\\] span,
    nav,
    nav a:not([class*="text-amber-400"]):not(.text-amber-400),
    nav button:not([class*="text-amber-400"]):not(.text-amber-400),
    nav span:not([class*="text-amber-400"]):not(.text-amber-400),
    nav div[class*="truncate"]:not([class*="text-slate-200"]):not([class*="text-slate-300"]):not([class*="text-slate-400"]),
    .hero-heading-white,
    .hero-heading-white > span:first-child,
    .hero-heading-white *,
    .hero-subtitle,
    .hero-subtitle *,
    .hero-btn-outline,
    .hero-btn-outline *,
    .hero-btn-outline span,
    .ticker-move a,
    .ticker-move span,
    .cta-banner h1, .cta-banner h2, .cta-banner h3, .cta-banner h4, .cta-banner p,
    footer h1, footer h2, footer h3, footer h4, footer h5, footer h6,
    footer p, footer a:not(:hover), footer span {
      color: #ffffff !important;
    }

    /* Hero subtitle crystal-clear contrast over 100% video */
    .hero-subtitle {
      color: #f8fafc !important;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9) !important;
    }

    /* Navbar Dropdown menu items contrast across all themes */
    .nav-item-title,
    nav .nav-item-title,
    nav [class*="nav-item-title"] {
      color: #ffffff !important;
    }
    .nav-item-description,
    nav .nav-item-description,
    nav [class*="nav-item-description"] {
      color: #f1f5f9 !important;
      opacity: 0.88 !important;
    }

    /* Active pills and badges in gold */
    nav .text-amber-400,
    nav [class*="text-amber-400"],
    .text-amber-400,
    [class*="text-amber-400"] {
      color: ${t.accentColor} !important;
    }
  `;
};

// Immediately execute once to style initial load from localStorage
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('ssvehs_theme_config');
    if (saved) {
      injectDynamicStyles({ ...DEFAULT_THEME, ...JSON.parse(saved) });
    } else {
      injectDynamicStyles(DEFAULT_THEME);
    }
  } catch (e) {}
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ssvehs_theme_config');
      if (saved) {
        try {
          return { ...DEFAULT_THEME, ...JSON.parse(saved) };
        } catch (e) {}
      }
    }
    return DEFAULT_THEME;
  });

  // Inject dynamic styles immediately and on theme change
  useEffect(() => {
    injectDynamicStyles(theme);
    localStorage.setItem('ssvehs_theme_config', JSON.stringify(theme));
  }, [theme]);

  // Synchronize across multiple browser tabs in real-time
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'ssvehs_theme_config' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setTheme(parsed);
          injectDynamicStyles(parsed);
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const applyPreset = (presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;

    const newTheme: ThemeConfig = {
      ...theme,
      presetId,
      primaryColor: preset.primaryColor,
      accentColor: preset.accentColor,
      headerBg: preset.headerBg,
      surfaceBg: preset.surfaceBg
    };

    setTheme(newTheme);
    injectDynamicStyles(newTheme);
    localStorage.setItem('ssvehs_theme_config', JSON.stringify(newTheme));
  };

  const updateTheme = (partial: Partial<ThemeConfig>) => {
    const newTheme: ThemeConfig = { ...theme, ...partial };
    setTheme(newTheme);
    injectDynamicStyles(newTheme);
    localStorage.setItem('ssvehs_theme_config', JSON.stringify(newTheme));
  };

  const resetTheme = () => {
    setTheme(DEFAULT_THEME);
    injectDynamicStyles(DEFAULT_THEME);
    localStorage.setItem('ssvehs_theme_config', JSON.stringify(DEFAULT_THEME));
  };

  const saveTheme = () => {
    injectDynamicStyles(theme);
    localStorage.setItem('ssvehs_theme_config', JSON.stringify(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, applyPreset, updateTheme, resetTheme, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
