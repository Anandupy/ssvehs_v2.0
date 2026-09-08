import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

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
    <div className="w-full bg-[#002147] mb-8 relative group overflow-hidden shadow-md">
      <div className="relative w-full max-h-[520px] overflow-hidden flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/img/abt-banner.png"
          className="w-full h-auto max-h-[520px] object-cover"
        >
          <source src="/assets/img/school-video.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/assets/img/abt-banner.png"
            alt="SSVEHS Campus"
            className="w-full h-auto object-cover"
          />
        </video>

        {/* Video Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20 opacity-80 hover:opacity-100 transition-opacity">
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-black/60 text-white hover:bg-sky-600 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/60 text-white hover:bg-sky-600 transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
