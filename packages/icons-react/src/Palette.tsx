import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Palette = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="palette"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11c0 4.9706 4.0294 9 9 9 1.4912 0 2.7-1.2088 2.7-2.7v-.45c0-.418 0-.627.0231-.8024a2.7 2.7 0 0 1 2.3245-2.3245c.1754-.0231.3844-.0231.8024-.0231h.45c1.4912 0 2.7-1.2088 2.7-2.7 0-4.9706-4.0294-9-9-9s-9 4.0294-9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 11.9a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9m8.1-3.6a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9m-5.4-.9a.9.9 0 0 0 .9-.9.9.9 0 1 0-.9.9"
    />
  </svg>
);
const ForwardRef = forwardRef(Palette);
const Memo = memo(ForwardRef);
export default Memo;
