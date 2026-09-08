import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Users, 
  BookOpenCheck,
  Sparkles
} from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#071526] text-white">
      {/* Background Video with Cinematic Dark Gradient Scrim */}
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/abt-banner.png"
          className="absolute inset-0 w-full h-full object-cover opacity-100 scale-105 filter saturate-110"
        >
          <source src="/assets/img/school-video.mp4" type="video/mp4" />
          <img
            src="/assets/img/abt-banner.png"
            alt="SSVEHS Campus"
            className="w-full h-full object-cover opacity-100"
          />
        </video>

        {/* Video Scrim & Vignette: leaves video 100% clear and vivid while providing high-contrast backdrop behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

        {/* Hero Content Grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-500/25 border border-amber-400/50 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>45+ Years of Educational Legacy (1981 – 2026)</span>
            </div>

            {/* Main Headline - 100% bright white and gold across all themes */}
            <h1 
              className="hero-heading-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              style={{ color: '#ffffff' }}
            >
              <span style={{ color: '#ffffff' }}>Nurturing Ethical, Confident & </span>
              <span className="gold-gradient-text">Scholarly Leaders</span>
            </h1>

            {/* Subtitle - Always bright white and legible with subtle text shadow */}
            <p 
              className="hero-subtitle text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              style={{ color: '#f8fafc' }}
            >
              Empowering students through holistic education, cutting-edge smart classrooms, vibrant sports programs, and moral values in Vikhroli, Mumbai.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all text-sm uppercase tracking-wider"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="hero-btn-outline inline-flex items-center gap-2 bg-slate-950/70 hover:bg-slate-900/90 text-white font-bold px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/30 hover:border-white/60 shadow-lg transition-all text-sm"
                style={{ color: '#ffffff' }}
              >
                <BookOpenCheck className="w-4 h-4 text-amber-400 shrink-0" style={{ color: '#fbbf24' }} />
                <span className="text-white font-bold" style={{ color: '#ffffff' }}>Our Heritage & Vision</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20 bg-[#0B1E36]/80 backdrop-blur-md p-1.5 rounded-full border border-white/15">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full text-slate-300 hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full text-slate-300 hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Modern Floating Stat Strip Overlap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 text-slate-900">
          
          <div className="flex items-center gap-3.5 p-2 border-r border-slate-100 last:border-0">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B1E36]">45+</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Years of Legacy</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 border-r border-slate-100 last:border-0">
            <div className="p-3 rounded-xl bg-sky-50 text-sky-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B1E36]">100%</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">SSC Pass Results</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2 border-r border-slate-100 last:border-0">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B1E36]">2,500+</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Students Enrolled</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0B1E36]">50+</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Qualified Faculty</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
