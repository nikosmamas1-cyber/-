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
    sm: 'h-10 w-[116px] sm:h-11 sm:w-[128px]',
    md: 'h-12 w-[140px] sm:h-14 sm:w-[162px]',
    lg: 'h-12 w-[140px] sm:h-16 sm:w-[186px] md:h-[68px] md:w-[197px]',
    xl: 'h-16 w-[186px] sm:h-20 sm:w-[232px] md:h-[84px] md:w-[244px]',
  }[size];

  return (
    <div
      className={`relative overflow-hidden shrink-0 select-none ${sizeClasses} ${className}`}
    >
      <img
        src={AGENCY_INFO.logoUrl}
        alt="Smart Culture Logo"
        className="absolute left-1/2 top-1/2 w-[132%] max-w-none h-auto -translate-x-[51%] -translate-y-[49.4%] object-contain mix-blend-multiply pointer-events-none"
      />
    </div>
  );
};
