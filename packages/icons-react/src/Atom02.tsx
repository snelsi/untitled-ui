import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Atom02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="atom-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.1153 15.3582c-.2707.306-.5547.6083-.8518.9053-4.2957 4.2958-9.6776 5.8787-12.0208 3.5356-1.6064-1.6065-1.3675-4.6411.3258-7.7749m2.3212-3.299c.2817-.3202.578-.6364.8885-.947 4.2958-4.2957 9.6777-5.8786 12.0209-3.5355 1.6075 1.6075 1.3671 4.6453-.3293 7.7813m-3.2063-4.2458c4.2958 4.2958 5.8787 9.6777 3.5356 12.0209s-7.7251.7602-12.0209-3.5356S1.8996 6.5859 4.2427 4.2427s7.7251-.7602 12.0208 3.5355M13.0001 12c0 .5523-.4478 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1"
    />
  </svg>
);
const ForwardRef = forwardRef(Atom02);
const Memo = memo(ForwardRef);
export default Memo;
