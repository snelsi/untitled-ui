import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Lightbulb03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="lightbulb-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.05 21h4.5m.45-6.0063c2.1285-1.0111 3.6-3.1805 3.6-5.6937 0-3.4794-2.8206-6.3-6.3-6.3S5 5.8206 5 9.3c0 2.5132 1.4715 4.6826 3.6 5.6937V15.6c0 .8387 0 1.258.137 1.5888a1.8 1.8 0 0 0 .9742.9742c.3308.137.7501.137 1.5888.137s1.258 0 1.5888-.137a1.8 1.8 0 0 0 .9742-.9742C14 16.858 14 16.4387 14 15.6z"
    />
  </svg>
);
const ForwardRef = forwardRef(Lightbulb03);
const Memo = memo(ForwardRef);
export default Memo;
