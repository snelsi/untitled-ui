import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const IntersectCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="intersect-circle"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.3 14.6c3.4794 0 6.3-2.8206 6.3-6.3S12.7794 2 9.3 2 3 4.8206 3 8.3s2.8206 6.3 6.3 6.3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.7 20c3.4794 0 6.3-2.8206 6.3-6.3s-2.8206-6.3-6.3-6.3-6.3 2.8206-6.3 6.3 2.8206 6.3 6.3 6.3"
    />
  </svg>
);
const ForwardRef = forwardRef(IntersectCircle);
const Memo = memo(ForwardRef);
export default Memo;
