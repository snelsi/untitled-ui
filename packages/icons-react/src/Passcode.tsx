import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Passcode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11.5h.0045m4.4955 0h.0045M7.5 11.5h.0045M5.88 7h12.24c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 8.3678 21 8.872 21 9.88v3.24c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C19.6321 16 19.1281 16 18.12 16H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 14.6321 3 14.1281 3 13.12V9.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 7 4.872 7 5.88 7Zm6.345 4.5a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm4.5 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm-9 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Passcode);
const Memo = memo(ForwardRef);
export default Memo;
