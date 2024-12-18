import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CloudRaining04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="cloud-raining-04"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 16.85v2.25m-7.2-2.25v2.25m3.6-1.35V20m-4.5-6.3C5.0147 13.7 3 11.6853 3 9.2s2.0147-4.5 4.5-4.5q.0447 0 .0893.0009C8.4085 3.0976 10.076 2 12 2c2.2673 0 4.1786 1.5244 4.7648 3.6042A4 4 0 0 1 16.95 5.6C19.1868 5.6 21 7.4133 21 9.65c0 2.2368-1.8132 4.05-4.05 4.05z"
    />
  </svg>
);
const ForwardRef = forwardRef(CloudRaining04);
const Memo = memo(ForwardRef);
export default Memo;
