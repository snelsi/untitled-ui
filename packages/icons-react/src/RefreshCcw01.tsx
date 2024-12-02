import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const RefreshCcw01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="refresh-ccw-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 10s2.005-2.7318 3.6338-4.3618S9.5136 3 12 3c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9c-4.103 0-7.5649-2.7457-8.6482-6.5M2 10V4m0 6h6"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCcw01);
const Memo = memo(ForwardRef);
export default Memo;
