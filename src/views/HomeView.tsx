import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { TrainingSection } from '../components/TrainingSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { FaqSection } from '../components/FaqSection';
import { ContactFormSection } from '../components/ContactFormSection';

interface Props {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <TrainingSection onNavigate={onNavigate} />
      <CaseStudiesSection onNavigate={onNavigate} />
      <PhilosophySection />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
};
