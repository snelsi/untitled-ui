import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const UserDown02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="user-down-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.6 6.7 2.7 2.7m0 0L21 6.7m-2.7 2.7V4m-2.7 15.3v-1.08c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.1799C13.5482 13.9 12.7921 13.9 11.28 13.9H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.1799C3 15.9518 3 16.7079 3 18.22v1.08m9.45-12.15c0 1.7397-1.4103 3.15-3.15 3.15S6.15 8.8897 6.15 7.15 7.5603 4 9.3 4s3.15 1.4103 3.15 3.15"
    />
  </svg>
);
const ForwardRef = forwardRef(UserDown02);
const Memo = memo(ForwardRef);
export default Memo;
