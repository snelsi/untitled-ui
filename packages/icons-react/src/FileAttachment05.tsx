import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FileAttachment05 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="file-attachment-05"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 13.8V8.85c0-.7456.6044-1.35 1.35-1.35s1.35.6044 1.35 1.35v4.95c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7v-3.6M8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.7 2.7 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.18C16.3482 3 15.5921 3 14.08 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21"
    />
  </svg>
);
const ForwardRef = forwardRef(FileAttachment05);
const Memo = memo(ForwardRef);
export default Memo;
