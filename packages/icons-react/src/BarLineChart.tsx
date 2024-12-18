import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const BarLineChart = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="bar-line-chart"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 20v-7m-8 7V10M4 20v-4m9.4067-10.9725 5.1684 1.9382m-7.7763-1.5648L5.2002 9.6m15.8605-3.1606c.5857.5858.5857 1.5356 0 2.1214s-1.5356.5857-2.1214 0-.5857-1.5356 0-2.1214 1.5356-.5857 2.1214 0m-16 3c.5858.5858.5858 1.5356 0 2.1214s-1.5356.5857-2.1214 0-.5857-1.5356 0-2.1214 1.5356-.5857 2.1214 0m8-6c.5857.5858.5857 1.5356 0 2.1214s-1.5356.5858-2.1214 0-.5857-1.5356 0-2.1214 1.5356-.5857 2.1214 0"
    />
  </svg>
);
const ForwardRef = forwardRef(BarLineChart);
const Memo = memo(ForwardRef);
export default Memo;
