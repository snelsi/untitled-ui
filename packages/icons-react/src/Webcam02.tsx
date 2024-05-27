import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Webcam02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.55 21h7.2m4.05-10.35c0 4.225-3.425 7.65-7.65 7.65S3.5 14.875 3.5 10.65 6.925 3 11.15 3s7.65 3.425 7.65 7.65m-4.7812 0c0 1.5844-1.2844 2.8687-2.8688 2.8687S8.2812 12.2344 8.2812 10.65 9.5657 7.7812 11.15 7.7812s2.8688 1.2844 2.8688 2.8688"
    />
  </svg>
);
const ForwardRef = forwardRef(Webcam02);
const Memo = memo(ForwardRef);
export default Memo;
