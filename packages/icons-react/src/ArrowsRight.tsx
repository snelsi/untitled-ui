import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ArrowsRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="arrows-right"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7h11m0 0-4 4m4-4-4-4M4 17h16m0 0-4 4m4-4-4-4"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowsRight);
const Memo = memo(ForwardRef);
export default Memo;
