import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Droplets03 = (
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
      d="M12.56 6.08A10.97 10.97 0 0 0 14 2.5c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.9799 6.9799 0 0 1-11.91 4.97M7 15.78c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.23 7 4.78c-.29 1.45-1.14 2.84-2.29 3.76S3 10.58 3 11.73c0 2.22 1.8 4.05 4 4.05"
    />
  </svg>
);
const ForwardRef = forwardRef(Droplets03);
const Memo = memo(ForwardRef);
export default Memo;
