import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const UsersMinus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="users-minus"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 16.5H21M15.15 3.2617c1.3193.534 2.25 1.8275 2.25 3.3383s-.9307 2.8043-2.25 3.3383M12 13.8H8.4c-1.6774 0-2.516 0-3.1777.274a3.6 3.6 0 0 0-1.9483 1.9483C3 16.6839 3 17.5226 3 19.2M13.35 6.6c0 1.9882-1.6118 3.6-3.6 3.6s-3.6-1.6118-3.6-3.6S7.7618 3 9.75 3s3.6 1.6118 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(UsersMinus);
const Memo = memo(ForwardRef);
export default Memo;
