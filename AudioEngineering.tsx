import React, { useState, useRef, useEffect } from 'react';
import { playSound, stopAllNeuralSounds } from '../services/audioService';
import { MANIFESTATION_GOALS } from '../constants';

/**
 * 🔥 GDE DA UBACIŠ SVOJE AUDIO FAJLOVE 🔥
 * ---------------------------------------
 * Zameni prazne stringove ('') u 'audioUrl' poljima sa tvojim linkovima ka zvukovima.
 * Npr. audioUrl: './audio/wealth_master.mp3'
 */
const AUDIO_SAMPLES = [
  { 
    id: 'wealth', 
    title: 'Wealth Expansion', 
    frequency: '4.5Hz Theta', 
    description: 'Engineered for financial abundance and opportunity detection through neural priming.',
    audioUrl: '', // <-- UBACI AUDIO ZA WEALTH OVDE
    goalId: 'success'
  },
  { 
    id: 'love', 
    title: 'Romantic Resonance', 
    frequency: '6.3Hz Alpha', 
    description: 'Calibrated for deep emotional connection and heart-center alignment protocols.',
    audioUrl: '', // <-- UBACI AUDIO ZA LOVE OVDE
    goalId: 'love'
  },
  { 
    id: 'health', 
    title: 'Cellular Vitality', 
    frequency: '528Hz Solfeggio', 
    description: 'Designed for physical recovery and biological energy optimization sequences.',
    audioUrl: '', // <-- UBACI AUDIO ZA HEALTH OVDE
    goalId: 'health'
  },
  { 
    id: 'success', 
    title: 'Peak Performance', 
    frequency: '12Hz Beta', 
    description: 'Activates high-level cognitive focus and professional dominance via beta waves.',
    audioUrl: '', // <-- UBACI AUDIO ZA SUCCESS OVDE
    goalId: 'confidence'
  },
  { 
    id: 'peace', 
    title: 'Deep Soul Peace', 
    frequency: '2.5Hz Delta', 
    description: 'Dissolves anxiety and induces profound meditative stillness and neural rest.',
    audioUrl: '', // <-- UBACI AUDIO ZA PEACE OVDE
    goalId: 'weight-loss'
  },
  { 
    id: 'custom', 
    title: 'Custom Blueprint', 
    frequency: 'Variable Multi-Phase', 
    description: 'A unique frequency code engineered strictly for your specific personalized intent.',
    audioUrl: '', // <-- UBACI AUDIO ZA CUSTOM OVDE
    goalId: 'custom'
  },
];

const AudioEngineering = () => {
  const [activeSample, setActiveSample] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySample = (sample: typeof AUDIO_SAMPLES[0]) => {
    // Ako je već aktivan, zaustavi ga
    if (activeSample === sample.id) {
      stopPlayback();
      return;
    }

    // Zaustavi prethodne zvukove pre kretanja novog
    stopPlayback();
    setActiveSample(sample.id);

    if (sample.audioUrl) {
      audioRef.current = new Audio(sample.audioUrl);
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser", e));
      audioRef.current.onended = () => setActiveSample(null);
    } else {
      // Fallback na sintetizovani zvuk ako URL nije unet
      playSound('neural_init', sample.id);
      setTimeout(() => {
        if (activeSample === sample.id) setActiveSample(null);
      }, 8000);
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    stopAllNeuralSounds();
    setActiveSample(null);
  };

  useEffect(() => {
    return () => stopPlayback();
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight">
            Neural Audio Initialization
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl md:max-w-3xl mx-auto leading-relaxed tracking-wide">
            Our master audio engineers, in synergy with proprietary AI, architect bespoke auditory landscapes. 
            We precision-calibrate <span className="text-amber-400 font-bold">Theta and Alpha wave induction</span> to ensure your 
            personal code penetrates the subconscious.
          </p>
        </div>

        {/* Audio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AUDIO_SAMPLES.map((sample) => {
            const isActive = activeSample === sample.id;
            const isCustom = sample.id === 'custom';
            const goalData = MANIFESTATION_GOALS.find(g => g.id === sample.goalId);
            const GoalIcon = goalData?.icon || (() => null);
            
            // Highlight stilovi
            const activeStyle = isCustom 
              ? 'bg-gradient-to-br from-teal-400 to-teal-700 border-teal-400 shadow-[0_0_60px_rgba(45,212,191,0.7)] scale-[1.03]' 
              : 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.15)] scale-[1.02]';

            const inactiveStyle = isCustom
              ? 'bg-teal-950/20 border-teal-500/30 hover:border-teal-400 hover:bg-teal-900/40 animate-[custom-subtle-pulse_3s_ease-in-out_infinite]'
              : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-black/60';

            return (
              <div 
                key={sample.id}
                onClick={() => handlePlaySample(sample)}
                className={`relative group cursor-pointer p-8 rounded-3xl border transition-all duration-700 flex flex-col items-start min-h-[220px] overflow-hidden
                  ${isActive ? activeStyle : inactiveStyle}
                `}
              >
                {/* Special Sparkle Layer za Custom Active */}
                {isCustom && isActive && (
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-0 w-full h-full animate-[custom-sparkles_1.5s_linear_infinite] opacity-30 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                  </div>
                )}

                {/* Waveform Background */}
                <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1 px-8 opacity-20 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-full transition-all duration-500 ${isCustom ? 'bg-teal-300' : 'bg-amber-500'} ${isActive ? 'animate-wave-active' : 'h-1'}`}
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: isActive ? `${Math.random() * 40 + 10}px` : '4px'
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative z-10 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg transition-all duration-500 ${isActive ? (isCustom ? 'bg-white text-teal-600' : 'bg-amber-500 text-black') : (isCustom ? 'bg-teal-500/20 text-teal-400' : 'bg-white/5 text-amber-500')}`}>
                      {isActive ? (
                        <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <GoalIcon className="w-6 h-6" />
                      )}
                    </div>
                    <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${isActive ? (isCustom ? 'text-white' : 'text-amber-200') : 'text-white/30'}`}>{sample.frequency}</span>
                  </div>

                  <h3 className={`text-xl font-black uppercase tracking-tight mb-2 transition-colors ${isActive ? (isCustom ? 'text-white' : 'text-amber-400') : (isCustom ? 'text-teal-300' : 'text-white')}`}>
                    {sample.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light mb-4 transition-colors ${isActive ? (isCustom ? 'text-teal-50' : 'text-gray-200') : 'text-gray-400'}`}>
                    {sample.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white animate-pulse' : (isCustom ? 'bg-teal-500/20' : 'bg-amber-500/20')}`}></div>
                    <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${isActive ? (isCustom ? 'text-white' : 'text-teal-400') : (isCustom ? 'text-teal-400/60' : 'text-amber-500/40')}`}>
                      {isActive ? 'Initialization Active' : 'Initialize Neural Audio'}
                    </span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Studio process info */}
        <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-black/60 border border-white/5 backdrop-blur-xl text-center">
            <h4 className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4">The Engineering Process</h4>
            <p className="text-gray-400 text-sm leading-relaxed italic">
              "Your personalized script is programmed into the audio using high-fidelity neural voices. 
              Our audio designers then layer your specific intent over 432Hz harmonic foundations, ensuring your brain shifts 
              into a suggestible Theta state for maximum results."
            </p>
        </div>
      </div>

      <style>{`
        @keyframes wave-active {
          0%, 100% { height: 10px; opacity: 0.3; }
          50% { height: 40px; opacity: 1; }
        }
        .animate-wave-active {
          animation: wave-active 1.5s ease-in-out infinite;
        }
        @keyframes custom-subtle-pulse {
          0%, 100% { border-color: rgba(45, 212, 191, 0.3); box-shadow: 0 0 10px rgba(45, 212, 191, 0.05); transform: scale(1); }
          50% { border-color: rgba(45, 212, 191, 0.6); box-shadow: 0 0 25px rgba(45, 212, 191, 0.15); transform: scale(1.02); }
        }
        @keyframes custom-sparkles {
          0% { background-position: 0px 0px; opacity: 0; }
          50% { opacity: 0.7; }
          100% { background-position: 40px 40px; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default AudioEngineering;