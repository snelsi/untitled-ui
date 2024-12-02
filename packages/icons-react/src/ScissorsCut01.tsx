import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ScissorsCut01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="scissors-cut-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4 8.5 15.5m0-7L20 20m-2.5-8h.01M22 12h.01M6 3c1.6569 0 3 1.3431 3 3S7.6569 9 6 9 3 7.6569 3 6s1.3431-3 3-3m0 12c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3 1.3431-3 3-3"
    />
  </svg>
);
const ForwardRef = forwardRef(ScissorsCut01);
const Memo = memo(ForwardRef);
export default Memo;
