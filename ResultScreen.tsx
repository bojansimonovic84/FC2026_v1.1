
import React, { useState } from 'react';
import type { OrderDetails } from '../types';
import Button from './ui/Button';

interface ResultScreenProps {
  details: OrderDetails;
  onReset: () => void;
}

const LockIcon = () => (
    <svg className="h-12 w-12 text-amber-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25-2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const ResultScreen: React.FC<ResultScreenProps> = ({ details, onReset }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsLoading(true);
    setError(null);
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const mockStripeUrl = `https://checkout.stripe.com/pay/mock_session_${Math.random().toString(36).substr(2, 9)}`;
        window.open(mockStripeUrl, '_blank');
    } catch (err: any) {
        setError("Studio sync failed. Please try again.");
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex items-center justify-center p-4">
      <div className="bg-[#080808] border border-amber-500/20 rounded-3xl p-8 md:p-12 w-full max-w-xl text-center shadow-[0_0_80px_rgba(245,158,11,0.1)]">
        <LockIcon />
        <h2 className="text-xl md:text-2xl font-black text-white mt-6 tracking-tight uppercase">Blueprint Locked & Queued</h2>
        <p className="text-gray-400 mt-4 leading-relaxed text-sm">
          The structural directives for <strong className="text-amber-500">{details.name}</strong> are secured. Your project has been transferred to our <span className="text-white font-bold">Studio Production Team</span> for manual frequency calibration and mastering.
        </p>
        
        <div className="mt-8 bg-black/40 p-6 rounded-2xl border border-white/5 text-left">
           <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] text-amber-500/70 uppercase tracking-widest font-black">STUDIO ASSIGNMENT</p>
                <p className="text-[10px] text-teal-400 uppercase tracking-widest font-black">EST. DELIVERY: 48-72h</p>
           </div>
           <p className="text-base text-white/90 font-medium leading-relaxed italic">
            "{details.detailedGoal}"
          </p>
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] uppercase font-bold tracking-[0.2em]">
             <div>
                <p className="text-gray-500 mb-1">Identity Sync</p>
                <p className="text-amber-500">{details.gender === 'male' ? 'Neural Male' : 'Neural Female'}</p>
             </div>
             <div className="text-right">
                <p className="text-gray-500 mb-1">Guide Protocol</p>
                <p className="text-white">{details.voice === 'male' ? 'Masculine' : 'Feminine'}</p>
             </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onReset} variant="secondary" className="sm:w-1/3">
                Edit Data
            </Button>
            <Button onClick={handlePayment} className="sm:w-2/3" disabled={isLoading}>
                {isLoading ? 'SECURE PAY...' : `Finalize & Transmit • €${details.plan.price}`}
            </Button>
        </div>
        
        {error && <div className="mt-4 text-red-400 text-[10px] uppercase font-bold">{error}</div>}
      </div>
    </div>
  );
};

export default ResultScreen;
