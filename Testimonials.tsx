import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import Card from './ui/Card';
import VideoModal from './VideoModal';

const PlayIcon = () => (
    <svg className="h-10 w-10 text-white/70 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
);


const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setPlayingVideo(null);
  };

  return (
    <>
      <section className="py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-700 drop-shadow-sm mb-6 leading-tight tracking-tight whitespace-nowrap">
              Success Frequencies
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed tracking-wide px-4">
              Real transformations from individuals <br className="hidden md:inline" /> who unlocked their Frequency Code.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                  <Card key={index} className="flex flex-col p-8 md:p-10">
                      <div className="flex-grow">
                          <p className="text-gray-200 italic text-base md:text-lg leading-relaxed">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-6">
                          {testimonial.videoUrl ? (
                              <button 
                                  onClick={() => handlePlayVideo(testimonial.videoUrl!)}
                                  className="group block aspect-video w-full bg-gray-800/50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-700 hover:border-amber-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500/40"
                                  aria-label={`Play testimonial video from ${testimonial.name}`}
                              >
                                   <div className="absolute inset-0 bg-black/30"></div>
                                   <PlayIcon />
                                   <span className="absolute bottom-3 right-4 text-[10px] font-black tracking-widest text-white/80 bg-black/50 px-3 py-1 rounded">WATCH</span>
                              </button>
                          ) : (
                              <div className="aspect-video w-full bg-gray-800/50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-700">
                                  <span className="text-gray-500 text-[11px] uppercase tracking-widest">Video Coming Soon</span>
                              </div>
                          )}
                          <h4 className="mt-4 font-bold text-amber-500 text-right uppercase tracking-widest text-xs">- {testimonial.name}</h4>
                      </div>
                  </Card>
              ))}
          </div>
        </div>
      </section>

      {playingVideo && (
        <VideoModal videoUrl={playingVideo} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Testimonials;