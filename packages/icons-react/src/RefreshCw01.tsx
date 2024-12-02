import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const RefreshCw01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="refresh-cw-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10s-2.005-2.7318-3.6338-4.3618S13.4864 3 11 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9c4.1031 0 7.5649-2.7457 8.6482-6.5M21 10V4m0 6h-6"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCw01);
const Memo = memo(ForwardRef);
export default Memo;
