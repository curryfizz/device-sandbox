const FanBlade = ({ index }) => {

  return (
    <svg width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_di_19_6)">
        <path d="M142 62L36 62C20.536 62 8 49.464 8 34C8 18.536 20.536 6 36 6L142 5.99999L142 62Z" fill="url(#paint0_linear_19_6)" />
        <g opacity="0.2">
          <path d="M142 62L36 62C20.536 62 8 49.464 8 34C8 18.536 20.536 6 36 6L142 5.99999L142 62Z" fill="url(#paint1_linear_19_6)" />
        </g>
        <g opacity="0.1">
          <path d="M142 62L36 62C20.536 62 8 49.464 8 34C8 18.536 20.536 6 36 6L142 5.99999L142 62Z" fill="url(#paint2_linear_19_6)" />
        </g>
      </g>
      <defs>
        <filter id="filter0_di_19_6" x="0" y="0" width="150" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_6" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_6" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_19_6" />
        </filter>
        <linearGradient id="paint0_linear_19_6" x1="142" y1="34" x2="8" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A5568" />
          <stop offset="0.3" stopColor="#2D3748" />
          <stop offset="0.7" stopColor="#1A202C" />
          <stop offset="1" stopColor="#0F1419" />
        </linearGradient>
        <linearGradient id="paint1_linear_19_6" x1="75" y1="62" x2="75" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.3" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_19_6" x1="142" y1="34" x2="8" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopOpacity="0" />
          <stop offset="0.5" stopColor="#101828" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default FanBlade;