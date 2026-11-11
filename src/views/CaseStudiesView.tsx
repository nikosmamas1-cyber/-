import React from 'react';
import { Trophy, ArrowRight } from 'lucide-react';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ContactFormSection } from '../components/ContactFormSection';

interface Props {
  onNavigate: (path: string) => void;
}

export const CaseStudiesView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-12 bg-white">
      <CaseStudiesSection onNavigate={onNavigate} showAll={true} />
      <div className="mt-12">
        <ContactFormSection />
      </div>
    </div>
  );
};
