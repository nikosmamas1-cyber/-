import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/siteContent';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Συχνές Ερωτήσεις</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Όλα όσα θέλετε να γνωρίζετε
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Απαντήσεις στις πιο συνηθισμένες απορίες σχετικά με τη συνεργασία, το ROI και την υποστήριξη.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#f26464] transition gap-4"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#f26464]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer.includes('Rayconvertous') ? (
                      <>
                        {faq.answer.split('Rayconvertous')[0]}
                        <a
                          href="https://rayconvertous.gr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#f26464] underline hover:text-[#e04e4e] transition"
                        >
                          Rayconvertous
                        </a>
                        {faq.answer.split('Rayconvertous')[1]}
                      </>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
