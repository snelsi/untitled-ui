import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ClipboardDownload = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="clipboard-download"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 11.1v5.4m0 0-2.7-2.7m2.7 2.7 2.7-2.7m.9-9c.837 0 1.2555 0 1.5988.092a2.7 2.7 0 0 1 1.9092 1.9092c.092.3433.092.7618.092 1.5988v8.28c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V8.4c0-.837 0-1.2555.092-1.5988A2.7 2.7 0 0 1 6.0012 4.892C6.3445 4.8 6.763 4.8 7.6 4.8m1.44 1.8h4.32c.504 0 .7561 0 .9486-.098a.9.9 0 0 0 .3933-.3934C14.8 5.916 14.8 5.664 14.8 5.16v-.72c0-.504 0-.756-.0981-.9486a.9.9 0 0 0-.3933-.3933C14.1161 3 13.864 3 13.36 3H9.04c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C7.6 3.684 7.6 3.936 7.6 4.44v.72c0 .504 0 .756.098.9486a.9.9 0 0 0 .3934.3933C8.284 6.6 8.536 6.6 9.04 6.6"
    />
  </svg>
);
const ForwardRef = forwardRef(ClipboardDownload);
const Memo = memo(ForwardRef);
export default Memo;
