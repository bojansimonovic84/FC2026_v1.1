
import React from 'react';
import type { PricingPlan, ManifestationGoal, Testimonial } from './types';

const TargetIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="origin-center group-[.is-active]:animate-[pulse_1.5s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 016.38 5.84h-4.82m-1.56-11.64a6 6 0 015.84-7.38v4.82m-5.84 2.56a6 6 0 01-6.38-5.84h4.82m1.56 11.64l-5.84-5.84m5.84 5.84l5.84 5.84m-5.84-5.84l-5.84 5.84m5.84-5.84l5.84-5.84" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500 group-[.is-active]:scale-110`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[heartbeat_1s_ease-in-out_infinite] group-[.is-active]:fill-current" strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[vibrate_0.2s_linear_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75" />
    <g className="origin-center group-[.is-active]:animate-[balance_2s_ease-in-out_infinite]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.624 17.247 2.62-10.726" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 6.52 2.62 10.726" />
    </g>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} transition-all duration-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path className="group-[.is-active]:animate-[twinkle_1s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    <path className="group-[.is-active]:animate-[twinkle_1.5s_ease-in-out_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const UserPlusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${className} transition-all duration-500`}>
        <path className="group-[.is-active]:animate-[spin_4s_linear_infinite]" strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
);

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic Blueprint',
    price: 97,
    priceId: 'basic',
    features: [
      'Personalized Audio Meditation (15 min)',
      'Specific Intent Subliminal Programming',
      'Advanced Binaural Beats Integration',
      'Digital 21-Day Ritual Guide'
    ],
    isPopular: false,
  },
  {
    name: 'Premium Resonance',
    price: 197,
    priceId: 'premium',
    features: [
      'Everything in Basic Blueprint',
      'Full 10-Minute Visualization Video',
      'Visual Imprint Neural Protocols',
      'High-Fidelity Neural Voice Integration'
    ],
    isPopular: true,
  },
  {
    name: 'Ultimate Quantum Experience',
    price: 997,
    priceId: 'ultimate',
    features: [
      '10x Custom Made Visual & Audio Tracks',
      'Multi-Phase Sub-goal Neural Mapping',
      'Master Vision Core Integration',
      'Direct White-Glove Studio Support'
    ],
    isPopular: false,
  },
];

export const MANIFESTATION_GOALS: ManifestationGoal[] = [
  {
    id: 'weight-loss',
    title: 'Perfect Body Alignment',
    description: 'Reprogram your subconscious for healthy habits, motivation, and body confidence.',
    icon: ScaleIcon,
  },
  {
    id: 'confidence',
    title: 'Unshakeable Confidence',
    description: 'Dissolve self-doubt and activate your innate charisma and self-worth.',
    icon: SparklesIcon,
  },
  {
    id: 'success',
    title: 'Financial Abundance',
    description: 'Align your frequency with wealth, opportunity, and career success.',
    icon: TargetIcon,
  },
  {
    id: 'health',
    title: 'Vital Health & Energy',
    description: 'Tune into cellular vitality, deep rest, and inexhaustible energy.',
    icon: BoltIcon,
  },
  {
    id: 'love',
    title: 'Love & Relationship Harmony',
    description: 'Attract your ideal partner or deepen existing connection.',
    icon: HeartIcon,
  },
   {
    id: 'custom',
    title: 'Custom Blueprint',
    description: 'Design your unique reality. Our designers engineer your personal code.',
    icon: UserPlusIcon,
  },
];

export const FAQ_DATA = [
    {
        question: "How is my code engineered?",
        answer: "Unlike mass-market AI tools, THE FREQUENCY CODE™ uses a hybrid approach. We use AI to analyze your linguistic data and goals, then our senior audio and visual designers hand-master your meditation tracks and visualization videos to ensure perfect frequency alignment."
    },
    {
        question: "Is this based on science?",
        answer: "Absolutely. The methodology is rooted in neuroscience and psychology. We utilize theta-wave induction and binaural beats, precision-engineered in our studio to ensure the frequencies are accurate and effective for subconscious reprogramming."
    },
    {
        question: "How long until I receive my order?",
        answer: "Because each order is custom-crafted by our design team, delivery typically takes 2 to 4 business days. This ensures the highest level of artistic and audio fidelity."
    },
    {
        question: "What's the difference between plans?",
        answer: "The Basic Blueprint provides the core audio experience. Premium Resonance includes a custom visualization video mastered by our film team. The Ultimate experience is a full white-glove service with direct consultation."
    },
];

export const GENERATION_MESSAGES = [
    "Analyzing Linguistic Intent with AI...",
    "Assigning Senior Audio Designer...",
    "Drafting Neural Manifestation Blueprint...",
    "Calibrating 432Hz Binaural Layers...",
    "Initializing Custom Visual Geometry...",
    "Syncing Code with Design Studio...",
    "Assigning Post-Production Team...",
    "Securing Project Lead...",
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "I was skeptical, but after 21 days, my entire financial situation shifted. The quality of the audio is unlike anything I've heard before.",
        name: "Jelena L.",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
        quote: "The visualization video was key. You can tell it was made by professionals. It feels like a high-end cinematic experience in my mind.",
        name: "Marko T.",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    {
        quote: "I've struggled with self-worth my whole life. The custom blueprint changed everything. It's a truly personalized service.",
        name: "Milica R.",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
];
