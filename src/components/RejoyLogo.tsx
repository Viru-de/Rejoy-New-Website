import React, { useState } from 'react';

interface RejoyLogoProps {
  /**
   * 'dark': Dark navy logo image for light backgrounds
   * 'light': Inverted/white-filtered or backlit logo for dark backgrounds
   * 'auto': Default behavior
   */
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
  showSubtitle?: boolean;
}

const PRIMARY_LOGO_URL = 'https://crm.rejoysolarpower.com/storage/uploads/logo/logo-dark.png?1785156592';
const LOCAL_FALLBACK_URL = '/rejoy-logo-dark.png';

export const RejoyLogo: React.FC<RejoyLogoProps> = ({
  variant = 'auto',
  className = 'h-10 sm:h-12 w-auto',
}) => {
  const [imgSrc, setImgSrc] = useState(PRIMARY_LOGO_URL);

  const filterStyle: React.CSSProperties | undefined =
    variant === 'light'
      ? { filter: 'brightness(0) invert(1)' }
      : undefined;

  return (
    <img
      src={imgSrc}
      alt="Rejoy Solar Power Pvt. Ltd."
      referrerPolicy="no-referrer"
      onError={() => {
        if (imgSrc !== LOCAL_FALLBACK_URL) {
          setImgSrc(LOCAL_FALLBACK_URL);
        }
      }}
      className={`${className} object-contain transition-all duration-200`}
      style={filterStyle}
    />
  );
};

