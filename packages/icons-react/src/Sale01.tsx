import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Sale01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="sale-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.3 8.3h.009m5.391 5.4h.009m.891-6.3-7.2 7.2M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9M9.75 8.3a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m5.4 5.4a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Sale01);
const Memo = memo(ForwardRef);
export default Memo;
