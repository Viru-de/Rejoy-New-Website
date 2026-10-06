import React from 'react';

interface RejoyLogoProps {
  /**
   * 'dark': Deep navy logo for light backgrounds (default)
   * 'light': Pure white text logo for dark backgrounds
   * 'auto': Uses current color scheme
   */
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
}

export const RejoyLogo: React.FC<RejoyLogoProps> = ({
  variant = 'dark',
  className = 'h-10 sm:h-12 w-auto',
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#082C43';

  return (
    <svg
      viewBox="0 0 320 100"
      className={`${className} object-contain shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Rejoy Solar Power Pvt. Ltd."
    >
      <defs>
        <clipPath id={`rejoy-bolt-clip-${variant}`}>
          <polygon points="214,3 154,45 186,45 128,98 160,52 134,52 194,3" />
        </clipPath>
      </defs>

      <g id="rejoy-brand-official-logo">
        {/* REJ */}
        <text
          x="2"
          y="60"
          fill={textColor}
          style={{
            fontFamily: "'Montserrat', 'Poppins', 'Arial Black', -apple-system, sans-serif",
            fontWeight: 900,
            fontSize: '64px',
            letterSpacing: '-1.5px',
          }}
        >
          REJ
        </text>

        {/* Sun Circle */}
        <circle cx="168" cy="38" r="32" fill="#FCB813" />

        {/* Bolt Base (Solar Panel Background) */}
        <polygon points="214,3 154,45 186,45 128,98 160,52 134,52 194,3" fill="#082C43" />

        {/* Solar Panel Grid Cells */}
        <g clipPath={`url(#rejoy-bolt-clip-${variant})`}>
          {/* Longitudinal lines along bolt slant */}
          <line x1="200" y1="3" x2="142" y2="98" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="186" y1="3" x2="128" y2="98" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />

          {/* Transverse cell cross lines */}
          <line x1="110" y1="12" x2="230" y2="12" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="21" x2="230" y2="21" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="30" x2="230" y2="30" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="39" x2="230" y2="39" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="52" x2="230" y2="52" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="62" x2="230" y2="62" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="72" x2="230" y2="72" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
          <line x1="110" y1="82" x2="230" y2="82" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
        </g>

        {/* Border stroke around bolt for crisp edge definition */}
        <polygon
          points="214,3 154,45 186,45 128,98 160,52 134,52 194,3"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Y */}
        <text
          x="210"
          y="60"
          fill={textColor}
          style={{
            fontFamily: "'Montserrat', 'Poppins', 'Arial Black', -apple-system, sans-serif",
            fontWeight: 900,
            fontSize: '64px',
          }}
        >
          Y
        </text>

        {/* SOLAR POWER PVT.LTD */}
        <text
          x="3"
          y="80"
          fill={textColor}
          style={{
            fontFamily: "'Montserrat', 'Poppins', 'Arial Black', -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: '13.5px',
            letterSpacing: '0.6px',
          }}
        >
          SOLAR POWER PVT.LTD
        </text>
      </g>
    </svg>
  );
};
