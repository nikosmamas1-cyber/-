import React from 'react';
import { AGENCY_INFO } from '../data/siteContent';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Renders the Smart Culture logo prominently by cropping out the excess
 * square canvas whitespace around the horizontal wordmark & brain/circuit emblem.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'lg', className = '' }) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14',
    lg: 'h-14 sm:h-16 md:h-[68px]',
    xl: 'h-16 sm:h-20 md:h-[84px]',
  }[size];

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center aspect-[2.9/1] select-none ${sizeClasses} ${className}`}
    >
      <img
        src={AGENCY_INFO.logoUrl}
        alt="Smart Culture Logo"
        className="w-[132%] max-w-none h-auto shrink-0 -translate-x-[1%] translate-y-[0.6%] object-contain mix-blend-multiply"
      />
    </div>
  );
};
