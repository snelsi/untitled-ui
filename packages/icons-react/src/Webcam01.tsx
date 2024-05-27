import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Webcam01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.2 17.4c3.9764 0 7.2-3.2236 7.2-7.2S15.1764 3 11.2 3 4 6.2236 4 10.2s3.2236 7.2 7.2 7.2m0 0V21m0 0H6.7m4.5 0h4.5m-1.8-10.8c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Webcam01);
const Memo = memo(ForwardRef);
export default Memo;
