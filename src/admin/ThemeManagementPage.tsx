import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  RotateCcw, 
  Save, 
  Check, 
  CheckCircle2, 
  Layout, 
  Eye, 
  Sliders, 
  ArrowRight,
  Star,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { THEME_PRESETS } from '../context/themeTypes';

export const ThemeManagementPage: React.FC = () => {
  const { theme, applyPreset, updateTheme, resetTheme, saveTheme } = useTheme();
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handlePresetClick = (presetId: string, presetName: string) => {
    applyPreset(presetId);
    triggerToast(`Applied "${presetName}" theme instantly across entire website!`);
  };

  const handleSave = () => {
    saveTheme();
    triggerToast('Theme settings saved and applied to entire website!');
  };

  const handleReset = () => {
    if (window.confirm('Reset all theme and color customizations to default?')) {
      resetTheme();
      triggerToast('Reset to default Royal Navy & Gold theme.');
    }
  };

  const currentPreset = THEME_PRESETS.find(p => p.id === theme.presetId) || {
    name: 'Custom Theme',
    tag: 'Custom Colors'
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 bg-[#00394f] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm z-50 animate-in fade-in slide-in-from-top-4 border border-white/20">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="font-semibold">{toastMsg}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2.5">
            <Palette className="w-7 h-7 text-[#00394f]" />
            <span>Theme & Layout Management</span>
          </h1>
          <div className="text-xs text-slate-400 font-medium mt-0.5">
            <span>Admin</span> <span className="mx-1">/</span> <span>Administration</span> <span className="mx-1">/</span> <strong className="text-slate-700">Theme Management</strong>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-[#00394f] hover:bg-[#002838] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Save className="w-4 h-4 text-amber-400" />
            <span>Save & Publish Theme</span>
          </button>
        </div>
      </div>

      {/* Active Theme Status Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-lg border border-slate-700/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 shadow-inner shrink-0"
            style={{ backgroundColor: theme.primaryColor }}
          >
            <Sparkles className="w-6 h-6" style={{ color: theme.accentColor }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                Current Active Theme
              </span>
              <span className="text-xs text-slate-400">• Real-Time Synchronized</span>
            </div>
            <h3 className="text-lg font-extrabold text-white mt-0.5">
              {currentPreset.name}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border border-white/40 inline-block" style={{ backgroundColor: theme.primaryColor }} />
                Primary: <strong className="text-white font-mono text-[11px]">{theme.primaryColor}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border border-white/40 inline-block" style={{ backgroundColor: theme.accentColor }} />
                Accent: <strong className="text-white font-mono text-[11px]">{theme.accentColor}</strong>
              </span>
              <span className="flex items-center gap-1.5 hidden sm:inline-flex">
                <span className="w-3 h-3 rounded-full border border-white/40 inline-block" style={{ backgroundColor: theme.headerBg }} />
                Top/Footer: <strong className="text-white font-mono text-[11px]">{theme.headerBg}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open Public Website</span>
          </a>
        </div>
      </div>

      {/* 1. Theme Presets Grid */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>1-Click Theme Presets</span>
            </h3>
            <p className="text-xs text-slate-400">Click any preset below to change all colors across the entire website instantly.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {THEME_PRESETS.map((preset) => {
            const isSelected = theme.presetId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handlePresetClick(preset.id, preset.name)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
                  isSelected 
                    ? 'border-[#00394f] ring-2 ring-[#00394f] bg-slate-50 shadow-md scale-[1.02]' 
                    : 'border-slate-200 hover:border-slate-400 hover:bg-slate-50/70 hover:shadow-sm'
                }`}
              >
                {/* Active Check Icon */}
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-[#00394f] text-white p-1 rounded-full shadow">
                    <Check className="w-3 h-3 text-amber-400" />
                  </div>
                )}

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {preset.tag}
                  </span>
                  <div className="font-extrabold text-xs text-slate-900 leading-tight mb-2">
                    {preset.name}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                    {preset.description}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <span 
                    className="w-5 h-5 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: preset.primaryColor }} 
                    title="Primary Brand" 
                  />
                  <span 
                    className="w-5 h-5 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: preset.accentColor }} 
                    title="Accent / Gold" 
                  />
                  <span 
                    className="w-5 h-5 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: preset.headerBg }} 
                    title="Header Background" 
                  />
                  <span 
                    className="w-5 h-5 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: preset.surfaceBg }} 
                    title="Surface Background" 
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Custom Color Customizer & Pattern Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left (7 cols): Detailed Color Controls */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#00394f]" />
              <span>Custom Color Palette Controls</span>
            </h3>
            <p className="text-xs text-slate-400">Fine-tune individual brand colors to match your school identity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Primary Color */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">Primary Brand Color</label>
                <span className="text-[10px] font-mono text-slate-400">{theme.primaryColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.primaryColor}
                  onChange={(e) => updateTheme({ primaryColor: e.target.value, presetId: 'custom' })}
                  className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={theme.primaryColor}
                  onChange={(e) => updateTheme({ primaryColor: e.target.value, presetId: 'custom' })}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-[#00394f]"
                />
              </div>
              <span className="text-[10px] text-slate-500 block">Main navbar, primary headings, buttons</span>
            </div>

            {/* Accent Color */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">Accent / Gold Color</label>
                <span className="text-[10px] font-mono text-slate-400">{theme.accentColor}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.accentColor}
                  onChange={(e) => updateTheme({ accentColor: e.target.value, presetId: 'custom' })}
                  className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={theme.accentColor}
                  onChange={(e) => updateTheme({ accentColor: e.target.value, presetId: 'custom' })}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-[#00394f]"
                />
              </div>
              <span className="text-[10px] text-slate-500 block">CTA highlights, golden badges, active pills</span>
            </div>

            {/* Header/Footer Dark BG */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">Top Header & Footer Shade</label>
                <span className="text-[10px] font-mono text-slate-400">{theme.headerBg}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.headerBg}
                  onChange={(e) => updateTheme({ headerBg: e.target.value, presetId: 'custom' })}
                  className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={theme.headerBg}
                  onChange={(e) => updateTheme({ headerBg: e.target.value, presetId: 'custom' })}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-[#00394f]"
                />
              </div>
              <span className="text-[10px] text-slate-500 block">Top contact strip and footer backdrop</span>
            </div>

            {/* Surface BG */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-800">Page Surface Shade</label>
                <span className="text-[10px] font-mono text-slate-400">{theme.surfaceBg}</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={theme.surfaceBg}
                  onChange={(e) => updateTheme({ surfaceBg: e.target.value, presetId: 'custom' })}
                  className="w-10 h-10 rounded-xl cursor-pointer border border-slate-300 p-0.5 bg-white"
                />
                <input
                  type="text"
                  value={theme.surfaceBg}
                  onChange={(e) => updateTheme({ surfaceBg: e.target.value, presetId: 'custom' })}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono uppercase bg-white focus:outline-none focus:ring-2 focus:ring-[#00394f]"
                />
              </div>
              <span className="text-[10px] text-slate-500 block">Overall body backdrop and alternating rows</span>
            </div>

          </div>

          {/* Layout & Corner Style Options */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Layout & Corner Patterns
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Corner Radius */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Card Corner Radius</label>
                <select
                  value={theme.borderRadius}
                  onChange={(e) => updateTheme({ borderRadius: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#00394f]"
                >
                  <option value="rounded-lg">Subtle (8px)</option>
                  <option value="rounded-2xl">Modern (16px)</option>
                  <option value="rounded-3xl">Curved / Pill (24px)</option>
                </select>
              </div>

              {/* Card Elevation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Card Elevation</label>
                <select
                  value={theme.cardElevation}
                  onChange={(e) => updateTheme({ cardElevation: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#00394f]"
                >
                  <option value="glass">Glassmorphism & Border</option>
                  <option value="shadow">Deep Soft Shadow</option>
                  <option value="flat">Minimalist Flat</option>
                </select>
              </div>

              {/* Header Style */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Header Pattern</label>
                <select
                  value={theme.headerStyle}
                  onChange={(e) => updateTheme({ headerStyle: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#00394f]"
                >
                  <option value="full">Full Micro-Utility Bar</option>
                  <option value="compact">Compact Single Bar</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Right (5 cols): Real-Time Interactive Preview Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-600" />
                <span>Live Interactive Preview</span>
              </h3>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                Active State
              </span>
            </div>

            {/* Preview Box */}
            <div 
              className="p-5 rounded-2xl border border-slate-200 space-y-4 transition-all duration-300 shadow-inner"
              style={{ backgroundColor: theme.surfaceBg }}
            >
              
              {/* Mini Header Preview */}
              <div 
                className="p-3 rounded-xl text-white shadow flex items-center justify-between"
                style={{ backgroundColor: theme.headerBg }}
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px]"
                    style={{ backgroundColor: theme.accentColor, color: '#071526' }}
                  >
                    S
                  </div>
                  <span className="font-extrabold text-xs">SSVEHS Mumbai</span>
                </div>
                <div 
                  className="px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{ backgroundColor: theme.primaryColor, color: '#fff' }}
                >
                  ESTD 1981
                </div>
              </div>

              {/* Mini Navbar Preview */}
              <div 
                className="px-3 py-2 rounded-xl text-white text-xs font-bold flex items-center justify-between shadow"
                style={{ backgroundColor: theme.primaryColor }}
              >
                <div className="flex items-center gap-3">
                  <span className="pb-0.5 border-b-2" style={{ borderColor: theme.accentColor, color: theme.accentColor }}>
                    Home
                  </span>
                  <span className="opacity-80">About Us</span>
                  <span className="opacity-80">Academics</span>
                  <span className="opacity-80">Admissions</span>
                </div>
                <span 
                  className="text-[10px] px-2 py-0.5 rounded-md font-extrabold"
                  style={{ backgroundColor: theme.accentColor, color: '#0B1E36' }}
                >
                  Apply
                </span>
              </div>

              {/* Sample Card */}
              <div 
                className={`p-4 bg-white border border-slate-200 transition-all ${theme.borderRadius} ${
                  theme.cardElevation === 'shadow' ? 'shadow-xl' : theme.cardElevation === 'glass' ? 'shadow-md backdrop-blur-md' : 'shadow-none'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${theme.accentColor}25`, color: theme.accentColor }}
                  >
                    Admissions 2026–27
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <h5 
                  className="font-extrabold text-sm mb-1 leading-tight"
                  style={{ color: theme.primaryColor }}
                >
                  Shree Siddhi Vinayagar English High School
                </h5>
                <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                  Empowering scholarly youth with values, sports, and science excellence in Vikhroli, Mumbai.
                </p>

                {/* Sample Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1 shadow transition-transform cursor-pointer"
                    style={{ backgroundColor: theme.accentColor, color: '#071526' }}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-opacity cursor-pointer"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    <span>View Curriculum</span>
                  </button>
                </div>
              </div>

              {/* Preview Indicator */}
              <div className="text-center pt-1">
                <span className="text-[11px] text-slate-400 font-medium">
                  Settings reflect across all 26+ pages instantly without page reload.
                </span>
              </div>

            </div>

            {/* Quick Link to View Live Site */}
            <div className="pt-2">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Open Public School Site in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
export default ThemeManagementPage;
