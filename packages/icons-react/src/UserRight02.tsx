import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const UserRight02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="user-right-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.3 8.4 21 5.7m0 0L18.3 3M21 5.7h-5.4m0 13.5v-1.08c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.1799C13.5482 13.8 12.7921 13.8 11.28 13.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.1799C3 15.8518 3 16.6079 3 18.12v1.08m9.45-12.15c0 1.7397-1.4103 3.15-3.15 3.15S6.15 8.7897 6.15 7.05 7.5603 3.9 9.3 3.9s3.15 1.4103 3.15 3.15"
    />
  </svg>
);
const ForwardRef = forwardRef(UserRight02);
const Memo = memo(ForwardRef);
export default Memo;
