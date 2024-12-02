import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FileQuestion02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="file-question-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.4 9.75V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.18C16.3482 3 15.5921 3 14.08 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21H13m0-9.9H7.6m1.8 3.6H7.6m7.2-7.2H7.6m7.65 7.202a2.0234 2.0234 0 0 1 3.9323.6745c0 1.349-2.0235 2.0235-2.0235 2.0235m.0261 2.7h.009"
    />
  </svg>
);
const ForwardRef = forwardRef(FileQuestion02);
const Memo = memo(ForwardRef);
export default Memo;
