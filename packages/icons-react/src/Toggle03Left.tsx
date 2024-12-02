import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Toggle03Left = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="toggle-03-left"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11.4C3 8.4177 5.4177 6 8.4 6h7.2c2.9823 0 5.4 2.4177 5.4 5.4s-2.4177 5.4-5.4 5.4H8.4c-2.9823 0-5.4-2.4177-5.4-5.4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 13.65c1.2426 0 2.25-1.0074 2.25-2.25S9.6426 9.15 8.4 9.15s-2.25 1.0074-2.25 2.25 1.0074 2.25 2.25 2.25"
    />
  </svg>
);
const ForwardRef = forwardRef(Toggle03Left);
const Memo = memo(ForwardRef);
export default Memo;
