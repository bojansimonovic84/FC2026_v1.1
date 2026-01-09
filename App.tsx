import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import OrderForm from './components/OrderForm';
import GenerationScreen from './components/GenerationScreen';
import ResultScreen from './components/ResultScreen';
import AudioEngineering from './components/AudioEngineering';
import Testimonials from './components/Testimonials';
import VisualizeSuccess from './components/VisualizeSuccess';
import { generateMeditationScript } from './services/geminiService';
import { logLead } from './services/supabase';
import { playSound } from './services/audioService';
import type { AppState, OrderDetails, PricingPlan } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  // Play transition sound on state changes
  useEffect(() => {
    if (appState !== 'landing') {
      playSound('transition');
    }
  }, [appState]);

  const handleStart = useCallback(() => {
    playSound('click');
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSelectPlan = useCallback((plan: PricingPlan) => {
    setSelectedPlan(plan);
    setAppState('ordering');
  }, []);

  const handleCloseForm = useCallback(() => {
    playSound('click');
    setAppState('landing');
  }, []);

  const handleSubmitOrder = useCallback(async (details: Omit<OrderDetails, 'plan'>) => {
    if (!selectedPlan) return;
    
    const fullDetails = { ...details, plan: selectedPlan };
    setOrderDetails(fullDetails);
    setAppState('generating');

    try {
      await logLead(details.email, selectedPlan.name);
      await generateMeditationScript(fullDetails);
      setTimeout(() => {
        playSound('success');
        setAppState('result');
      }, 4500);
    } catch (error) {
      console.error("Critical submission error:", error);
      setAppState('result');
    }
  }, [selectedPlan]);
  
  const handleReset = useCallback(() => {
    playSound('transition');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAppState('landing');
    setSelectedPlan(null);
    setOrderDetails(null);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white selection:bg-amber-500/50 relative">
      <Header onStart={handleStart} />
      <main className="relative z-10">
        <Hero onStart={handleStart} />
        <HowItWorks />
        <VisualizeSuccess />
        <AudioEngineering />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      
      {appState === 'ordering' && selectedPlan && (
        <OrderForm 
          plan={selectedPlan} 
          onClose={handleCloseForm} 
          onSubmit={handleSubmitOrder} 
        />
      )}

      {appState === 'generating' && <GenerationScreen />}

      {appState === 'result' && orderDetails && (
        <ResultScreen 
          details={orderDetails}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;
