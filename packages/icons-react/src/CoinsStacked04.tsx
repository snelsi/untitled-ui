import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CoinsStacked04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="coins-stacked-04"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.4 5.7c0 1.4912-3.2235 2.7-7.2 2.7C7.2236 8.4 4 7.1912 4 5.7m14.4 0c0-1.4912-3.2235-2.7-7.2-2.7C7.2236 3 4 4.2088 4 5.7m14.4 0v12.6c0 1.4912-3.2236 2.7-7.2 2.7S4 19.7912 4 18.3V5.7m14.4 4.2c0 1.4911-3.2236 2.6999-7.2 2.6999S4 11.3911 4 9.8999m14.4 4.1971c0 1.4912-3.2236 2.7-7.2 2.7S4 15.5882 4 14.097"
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsStacked04);
const Memo = memo(ForwardRef);
export default Memo;
