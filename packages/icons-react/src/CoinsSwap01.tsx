import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CoinsSwap01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="coins-swap-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.6 5.6 1.8-1.8m0 0L6.6 2m1.8 1.8H6.6C4.6118 3.8 3 5.4118 3 7.4m14.4 9-1.8 1.8m0 0 1.8 1.8m-1.8-1.8h1.8c1.9882 0 3.6-1.6118 3.6-3.6m-7.7245-2.3245A5.38 5.38 0 0 0 15.6 12.8c2.9823 0 5.4-2.4177 5.4-5.4S18.5823 2 15.6 2s-5.4 2.4177-5.4 5.4a5.38 5.38 0 0 0 .5245 2.3246M13.8 14.6c0 2.9823-2.4177 5.4-5.4 5.4S3 17.5823 3 14.6s2.4177-5.4 5.4-5.4 5.4 2.4177 5.4 5.4"
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsSwap01);
const Memo = memo(ForwardRef);
export default Memo;
