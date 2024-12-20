import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const AlignTopArrow01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="align-top-arrow-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 3H3m9 18V7m0 0-7 7m7-7 7 7"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignTopArrow01);
const Memo = memo(ForwardRef);
export default Memo;
