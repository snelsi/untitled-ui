import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const StopCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="stop-circle"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 8.84c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C9.084 7.4 9.336 7.4 9.84 7.4h4.32c.504 0 .7561 0 .9486.098a.9.9 0 0 1 .3933.3934c.0981.1925.0981.4446.0981.9486v4.32c0 .504 0 .7561-.0981.9486a.9.9 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981H9.84c-.504 0-.756 0-.9486-.0981a.9.9 0 0 1-.3933-.3933C8.4 13.9161 8.4 13.664 8.4 13.16z"
    />
  </svg>
);
const ForwardRef = forwardRef(StopCircle);
const Memo = memo(ForwardRef);
export default Memo;
