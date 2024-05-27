import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Camera01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 7.7395c0-.3153 0-.473.0132-.6057C3.14 5.853 4.1532 4.84 5.4338 4.7132 5.5666 4.7 5.7328 4.7 6.065 4.7c.128 0 .192 0 .2464-.0033a1.8 1.8 0 0 0 1.5613-1.1253c.0203-.0505.0393-.1075.0773-.2214s.057-.1709.0773-.2214a1.8 1.8 0 0 1 1.5612-1.1253C9.643 2 9.703 2 9.823 2h4.354c.1201 0 .1801 0 .2344.0033a1.8 1.8 0 0 1 1.5613 1.1253c.0203.0505.0393.1075.0773.2214s.057.1709.0773.2214a1.8 1.8 0 0 0 1.5613 1.1253c.0543.0033.1183.0033.2464.0033.3323 0 .4984 0 .6312.0132 1.2807.1268 2.2938 1.14 2.4206 2.4206.0132.1328.0132.2904.0132.6057V14.78c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C3 17.0482 3 16.2921 3 14.78z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15.05c1.9882 0 3.6-1.6118 3.6-3.6s-1.6118-3.6-3.6-3.6-3.6 1.6118-3.6 3.6 1.6118 3.6 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Camera01);
const Memo = memo(ForwardRef);
export default Memo;
