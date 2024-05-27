import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Bold01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 12h8c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4H6zm0 0h9c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4H6z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bold01);
const Memo = memo(ForwardRef);
export default Memo;
