import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const UsersEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="users-edit"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 15H8c-1.8638 0-2.7957 0-3.5307.3045a4 4 0 0 0-2.1648 2.1648C2 18.2044 2 19.1362 2 21M15.5 3.2908C16.9659 3.8842 18 5.3213 18 7m-6.0001 14.5 2.0251-.405c.1765-.0353.2648-.053.3471-.0853a1 1 0 0 0 .2069-.1107c.0726-.0506.1362-.1142.2636-.2416L21.5 14c.5524-.5523.5523-1.4477 0-2s-1.4477-.5523-2 0l-6.6575 6.6575c-.1273.1273-.1909.1909-.2415.2635a1 1 0 0 0-.1108.2068c-.0322.0824-.0499.1706-.0852.3472zM13.5 7c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(UsersEdit);
const Memo = memo(ForwardRef);
export default Memo;
