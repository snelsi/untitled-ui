import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Strikethrough01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="strikethrough-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 16c0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4m4-4c0-2.2091-1.7909-4-4-4h-4C7.7909 4 6 5.7909 6 8m-3 4h18"
    />
  </svg>
);
const ForwardRef = forwardRef(Strikethrough01);
const Memo = memo(ForwardRef);
export default Memo;
