import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const NotificationText = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="notification-text"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 4H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.2798 3 7.1198 3 8.8v7.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h7.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.7202 20 17.8802 20 16.2V13m-7 4H7m8-4H7m13.1213-9.1213c1.1716 1.1716 1.1716 3.071 0 4.2426s-3.071 1.1716-4.2426 0-1.1716-3.071 0-4.2426 3.071-1.1716 4.2426 0"
    />
  </svg>
);
const ForwardRef = forwardRef(NotificationText);
const Memo = memo(ForwardRef);
export default Memo;
