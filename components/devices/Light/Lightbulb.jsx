const Lightbulb = ({
  size = 200,
  isOn = false,
  brightness = 0, 
  color = '#FFE5B4',
}) => {
  const glowOpacity = 0.3 * brightness / 100;
  const innerGlowOpacity = 0.6 * brightness / 100;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity={isOn ? glowOpacity : 0} filter="url(#filter0_f_0_1)">
        <path
          d="M128 320C128 213.961 213.961 128 320 128C426.039 128 512 213.961 512 320C512 426.039 426.039 512 320 512C213.961 512 128 426.039 128 320Z"
          fill={color} />
      </g>

      {/* Bulb top metal part */}
      <path
        d="M288 228C288 224.686 290.686 222 294 222H346C349.314 222 352 224.686 352 228V234H288V228Z"
        fill="url(#paint0_linear_0_1)"
      />
      <mask id="path-3-inside-1_0_1" fill="white">
        <path d="M280 234H360V238H280V234Z" />
      </mask>
      <path d="M280 234H360V238H280V234Z" fill="#364153" />
      <path d="M360 238V237H280V238V239H360V238Z" fill="#4A5565" mask="url(#path-3-inside-1_0_1)" />
      <mask id="path-5-inside-2_0_1" fill="white">
        <path d="M280 238H360V242H280V238Z" />
      </mask>
      <path d="M280 238H360V242H280V238Z" fill="#364153" />
      <path d="M360 242V241H280V242V243H360V242Z" fill="#4A5565" mask="url(#path-5-inside-2_0_1)" />
      <mask id="path-7-inside-3_0_1" fill="white">
        <path d="M280 242H360V246H280V242Z" />
      </mask>
      <path d="M280 242H360V246H280V242Z" fill="#364153" />
      <path d="M360 246V245H280V246V247H360V246Z" fill="#4A5565" mask="url(#path-7-inside-3_0_1)" />
      <mask id="path-9-inside-4_0_1" fill="white">
        <path d="M280 246H360V250H280V246Z" />
      </mask>
      <path d="M280 246H360V250H280V246Z" fill="#364153" />
      <path d="M360 250V249H280V250V251H360V250Z" fill="#4A5565" mask="url(#path-9-inside-4_0_1)" />
      <g opacity={isOn ? innerGlowOpacity : 0} filter="url(#filter1_f_0_1)">
        <path
          d="M224 314C224 260.981 266.981 218 320 218C373.019 218 416 260.981 416 314V362C416 415.019 373.019 458 320 458C266.981 458 224 415.019 224 362V314Z"
          fill={color} />
      </g>
      <g filter="url(#filter2_di_0_1)">
        <path
          d="M256 322C256 286.654 284.654 258 320 258C355.346 258 384 286.654 384 322V354C384 389.346 355.346 418 320 418C284.654 418 256 389.346 256 354V322Z"
          fill={isOn ? "url(#paint1_radial_0_1)" : "url(#paint1_off_radial_0_1)"}
        />
        <g opacity="0.4" filter={"url(#filter3_f_0_1)"}>
          <path
            d="M288 314C288 300.745 298.745 290 312 290C325.255 290 336 300.745 336 314V330C336 343.255 325.255 354 312 354C298.745 354 288 343.255 288 330V314Z"
            fill="url(#paint2_linear_0_1)" />
        </g>
        <g filter="url(#filter4_d_0_1)">
          {isOn &&
            <path
              d="M318 308C318 306.895 318.895 306 320 306C321.105 306 322 306.895 322 308V368C322 369.105 321.105 370 320 370C318.895 370 318 369.105 318 368V308Z"
              fill="url(#paint3_linear_0_1)" />
          }
        </g>
      </g>
      <defs>
        <filter id="filter0_f_0_1" x="0" y="0" width="640" height="640" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="64" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter1_f_0_1" x="176" y="170" width="288" height="336"
          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="24" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter2_di_0_1" x="196" y="198" width="248" height="280" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          {isOn ? (<>
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="30" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.898039 0 0 0 0 0.705882 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.898039 0 0 0 0 0.705882 0 0 0 0.4 0" />
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1" />
          </>)
            :
            (<>
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_289" />
            </>)
          }
        </filter>
        <filter id="filter3_f_0_1" x="272" y="274" width="80" height="96"
          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter4_d_0_1" x="308" y="296" width="24" height="84"
          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.898039 0 0 0 0 0.705882 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_0_1" x1="320" y1="222" x2="320" y2="234"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#4A5565" />
          <stop offset="1" stop-color="#364153" />
        </linearGradient>
        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(294.4 306) rotate(-90) scale(143.43 143.43)">
          <stop stop-color={color} />
          <stop offset="0.5" stop-color={color} stop-opacity="0.867" />
          <stop offset="1" stop-color={color} stop-opacity="0.6" />
        </radialGradient>
        <radialGradient id="paint1_off_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
          gradientTransform="translate(294.4 306) rotate(-90) scale(143.43 143.43)">
          <stop stop-color="#4A5568" />
          <stop offset="0.5" stop-color="#2D3748" />
          <stop offset="1" stop-color="#1A202C" />
        </radialGradient>


        <linearGradient id="paint2_linear_0_1" x1="288" y1="290" x2="349.44" y2="336.08"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.8" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_0_1" x1="320" y1="306" x2="320" y2="370"
          gradientUnits="userSpaceOnUse">
          <stop stop-color={color} />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg >
  );
};

export default Lightbulb;
