import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <span className="text-base md:text-lg font-semibold text-white/80 group-hover:text-amber-400 transition-colors">{question}</span>
        <span className={`transform transition-all duration-500 ${isOpen ? 'rotate-45 text-white' : 'rotate-0 text-amber-500'}`}>
           <svg className="h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
           </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
            {answer}
            </p>
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
    return (
        <section className="py-8 sm:py-12 bg-transparent relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">De-Coding Your Questions</h2>
                </div>

                <div className="mt-8 max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/5">
                    {FAQ_DATA.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ;