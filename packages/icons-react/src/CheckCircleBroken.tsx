import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CheckCircleBroken = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="check-circle-broken"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 11.0857v.92a10 10 0 0 1-1.9907 5.9818 9.999 9.999 0 0 1-11.4748 3.3928A10 10 0 1 1 16.07 2.8657M22 4 12 14.01l-3-3"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckCircleBroken);
const Memo = memo(ForwardRef);
export default Memo;
