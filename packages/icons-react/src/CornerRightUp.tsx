import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CornerRightUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M3 20h3.4c3.3603 0 5.0405 0 6.3239-.654a6 6 0 0 0 2.6221-2.6221C16 15.4405 16 13.7603 16 10.4V4m0 0-5 5m5-5 5 5"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerRightUp);
const Memo = memo(ForwardRef);
export default Memo;
