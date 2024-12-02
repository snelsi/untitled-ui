import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CornerDownLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="corner-down-left"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4v1.4c0 3.3603 0 5.0405-.654 6.3239a6 6 0 0 1-2.6221 2.6221C15.4405 15 13.7603 15 10.4 15H4m0 0 5-5m-5 5 5 5"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerDownLeft);
const Memo = memo(ForwardRef);
export default Memo;
