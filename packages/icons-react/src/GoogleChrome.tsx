import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const GoogleChrome = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="google-chrome"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8.4c-1.9882 0-3.6 1.6118-3.6 3.6s1.6118 3.6 3.6 3.6 3.6-1.6118 3.6-3.6-1.6118-3.6-3.6-3.6m0 0h8.253M4.755 6.654 8.886 13.8m2.106 7.146 4.122-7.146M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9"
    />
  </svg>
);
const ForwardRef = forwardRef(GoogleChrome);
const Memo = memo(ForwardRef);
export default Memo;
