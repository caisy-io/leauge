import * as React from "react";

function SvgPt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pt_svg__a">
          <stop stopColor="#FF2936" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pt_svg__b">
          <stop stopColor="#128415" offset="0%" />
          <stop stopColor="#0A650C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pt_svg__c">
          <stop stopColor="#FAF94F" offset="0%" />
          <stop stopColor="#F8F736" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pt_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pt_svg__e">
          <stop stopColor="#1D50B5" offset="0%" />
          <stop stopColor="#15439D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pt_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#pt_svg__b)" d="M0 0h6v15H0z" />
        <path
          d="M3 5.5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 110-6 3 3 0 010 6z"
          fill="url(#pt_svg__c)"
          fillRule="nonzero"
          transform="translate(3 4)"
        />
        <path
          d="M2 2.256A.25.25 0 012.245 2h1.51A.25.25 0 014 2.256V4a.997.997 0 01-1 1c-.552 0-1-.443-1-.999V2.256z"
          fill="url(#pt_svg__d)"
          transform="translate(3 4)"
        />
        <path
          d="M3 4c.276 0 .5-.724.5-1a.5.5 0 00-1 0c0 .276.224 1 .5 1z"
          fill="url(#pt_svg__e)"
          transform="translate(3 4)"
        />
      </g>
    </svg>
  );
}

export default SvgPt;
