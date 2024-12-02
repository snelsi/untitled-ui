import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PieChart04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="pie-chart-04"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 12 2.2986 9.701a9 9 0 0 0 5.33 10.6437zm0 0 .0943-8.9995a9 9 0 0 0-8.7876 6.6701zm9 0c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0295-9 9-9 9 4.0294 9 9"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart04);
const Memo = memo(ForwardRef);
export default Memo;
