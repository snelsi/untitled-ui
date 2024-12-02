import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Brush03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="brush-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.4 10.2V4.44c0-.504 0-.756-.0981-.9486a.9.9 0 0 0-.3933-.3933C17.7161 3 17.464 3 16.96 3H5.44c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C4 3.684 4 3.936 4 4.44v5.76m14.4 0H4m14.4 0v.18c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C4 12.6482 4 11.8921 4 10.38v-.18m9.45 4.5v4.05c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25V14.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Brush03);
const Memo = memo(ForwardRef);
export default Memo;
