import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Contrast03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 7.85c0 3.7279-3.0221 6.75-6.75 6.75a6.76 6.76 0 0 1-1.6054-.1921C8.3063 15.8867 10.0406 16.85 12 16.85c3.2309 0 5.85-2.6191 5.85-5.85 0-1.9594-.9633-3.6937-2.4421-4.7554A6.76 6.76 0 0 1 15.6 7.85"
    />
  </svg>
);
const ForwardRef = forwardRef(Contrast03);
const Memo = memo(ForwardRef);
export default Memo;
