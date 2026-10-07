import React, { useState } from 'react';

export const REJOY_LOGO_URL = 'https://erp.rejoysolarpower.com/logo-dark.png';
const LOCAL_FALLBACK_URL = '/logo-dark.png';

interface RejoyLogoProps {
  /**
   * 'dark': Logo for light backgrounds (default)
   * 'light': Inverted/white logo for dark backgrounds
   * 'auto': Default behavior
   */
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
  alt?: string;
}

export const RejoyLogo: React.FC<RejoyLogoProps> = ({
  variant = 'auto',
  className = 'h-10 sm:h-12 w-auto',
  alt = 'Rejoy Solar Power',
}) => {
  const [imgSrc, setImgSrc] = useState(REJOY_LOGO_URL);

  const filterStyle: React.CSSProperties | undefined =
    variant === 'light'
      ? { filter: 'brightness(0) invert(1)' }
      : undefined;

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => {
        if (imgSrc !== LOCAL_FALLBACK_URL) {
          setImgSrc(LOCAL_FALLBACK_URL);
        }
      }}
      className={`${className} object-contain shrink-0 transition-opacity duration-200`}
      style={filterStyle}
    />
  );
};
