import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Settings04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="settings-04"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8h12m0 0c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3-3 1.3431-3 3m-6 8h12M9 16c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(Settings04);
const Memo = memo(ForwardRef);
export default Memo;
