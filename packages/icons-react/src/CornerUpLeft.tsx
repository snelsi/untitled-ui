import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CornerUpLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="corner-up-left"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 14 4 9m0 0 5-5M4 9h6.4c3.3603 0 5.0405 0 6.3239.654a6 6 0 0 1 2.6221 2.6221C20 13.5595 20 15.2397 20 18.6V20"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerUpLeft);
const Memo = memo(ForwardRef);
export default Memo;
