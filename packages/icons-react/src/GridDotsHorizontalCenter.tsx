import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const GridDotsHorizontalCenter = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="grid-dots-horizontal-center"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h.01M3 12h.01M3 21h.01M3 16.5h.01M3 7.5h.01M7.5 3h.01m-.01 9h.01m-.01 9h.01M16.5 3h.01m-.01 9h.01m-.01 9h.01M21 3h.01M21 12h.01M21 21h.01M21 16.5h.01m-.01-9h.01M12 21V3"
    />
  </svg>
);
const ForwardRef = forwardRef(GridDotsHorizontalCenter);
const Memo = memo(ForwardRef);
export default Memo;
