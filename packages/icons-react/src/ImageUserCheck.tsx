import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ImageUserCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="image-user-check"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.6 4.7 1.8 1.8L21 2.9m0 8.1v4.68c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799C18.9482 20 18.1921 20 16.68 20H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68V6.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 2 5.8078 2 7.32 2H12M3.131 18.1337C3.5532 16.6147 4.9463 15.5 6.5998 15.5h6.3c.8364 0 1.2546 0 1.6023.0692a3.6 3.6 0 0 1 2.8285 2.8285c.0692.3477.0692.7659.0692 1.6023M13.8 8.75c0 1.9882-1.6118 3.6-3.6 3.6s-3.6-1.6118-3.6-3.6 1.6118-3.6 3.6-3.6 3.6 1.6118 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(ImageUserCheck);
const Memo = memo(ForwardRef);
export default Memo;
