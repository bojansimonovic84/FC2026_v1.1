import React from 'react';
import { playSound } from '../../services/audioService';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'pill-gold';
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', isLoading = false, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound('click');
    if (onClick) onClick(e);
  };

  if (variant === 'pill-gold') {
    return (
      <button 
        {...props}
        onClick={handleClick}
        disabled={isLoading || props.disabled}
        className={`relative group inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full transition-all duration-300 ${isLoading ? 'scale-100 opacity-90' : 'hover:scale-[1.03]'} focus:outline-none focus:ring-2 focus:ring-yellow-500/40 w-full sm:w-auto ${className}`}
      >
        {/* Animated Rotating Border Layer */}
        <span className="absolute inset-[-1000%] animate-[rotate-border_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#B45309_20%,#2dd4bf_35%,#F59E0B_50%,#2dd4bf_65%,#B45309_80%,#000000_100%)] opacity-80"></span>
        
        {/* Main Button Surface Layer */}
        <span className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950/98 px-6 py-3 md:px-10 md:py-4 text-[12px] md:text-sm font-black transition-all duration-300 ${isLoading ? 'bg-black text-white' : 'text-yellow-300 group-hover:text-amber-100'} backdrop-blur-3xl`}>
          
          {/* Internal Sheen Effect */}
          {!isLoading && (
            <span className="absolute inset-0 flex h-full w-full justify-center overflow-hidden rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
              <span className="absolute h-[300%] w-[60%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[sheen_2s_infinite] top-[-100%]"></span>
            </span>
          )}

          {/* Button Content */}
          <span className="relative flex items-center gap-2 uppercase tracking-[0.2em] text-shadow-sm whitespace-nowrap">
            {isLoading && (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white/10 border-t-amber-500 rounded-full animate-spin"></div>
              </div>
            )}
            {isLoading ? 'INITIALIZING...' : children}
          </span>
        </span>
        
        {/* Radiant Glow Underlay */}
        <span className={`absolute -inset-1.5 z-[-1] rounded-full bg-amber-500 blur-2xl transition duration-500 ${isLoading ? 'opacity-30 animate-pulse' : 'opacity-0 group-hover:opacity-40 shadow-[0_0_40px_rgba(245,158,11,0.6)]'}`}></span>
      </button>
    );
  }

  const baseStyles = 'px-6 py-3 font-black rounded-lg transition-all duration-300 focus:outline-none uppercase tracking-[0.1em] text-[11px] whitespace-nowrap active:scale-95 disabled:opacity-50';

  const variants = {
    primary: 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:brightness-110 hover:shadow-[0_6px_25px_rgba(251,191,36,0.5)]',
    secondary: 'bg-transparent border border-amber-500/40 text-amber-500 hover:bg-amber-500/10 backdrop-blur-sm',
    'pill-gold': '',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} disabled={isLoading} onClick={handleClick} {...props}>
      <span className="flex items-center gap-2">
        {isLoading && <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>}
        {isLoading ? 'INITIALIZING...' : children}
      </span>
    </button>
  );
};

export default Button;