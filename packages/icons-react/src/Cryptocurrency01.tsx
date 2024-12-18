import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Cryptocurrency01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="cryptocurrency-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.8779 20.0899a10 10 0 0 1-11.7557 0m10.2615-17.078a10 10 0 0 1 5.519 10.3796m-19.8053-.0001a10 10 0 0 1 5.519-10.3797M17.5 11.9998c0 3.0375-2.4624 5.5-5.5 5.5s-5.5-2.4625-5.5-5.5 2.4624-5.5 5.5-5.5 5.5 2.4624 5.5 5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Cryptocurrency01);
const Memo = memo(ForwardRef);
export default Memo;
