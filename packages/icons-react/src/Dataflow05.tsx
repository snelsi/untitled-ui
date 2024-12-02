import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Dataflow05 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="dataflow-05"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 19.2h.18c1.512 0 2.268 0 2.846-.294a2.7 2.7 0 0 0 1.18-1.18c.294-.578.294-1.334.294-2.846V9.12c0-1.512 0-2.268-.294-2.846a2.7 2.7 0 0 0-1.18-1.18C10.848 4.8 10.092 4.8 8.58 4.8H8.4m0 14.4a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0m0-14.4a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0m9 7.2h-9m9 0a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0m-9 0a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0"
    />
  </svg>
);
const ForwardRef = forwardRef(Dataflow05);
const Memo = memo(ForwardRef);
export default Memo;
