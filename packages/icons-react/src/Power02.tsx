import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Power02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="power-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.5V11M8.4 8.2996A4.48 4.48 0 0 0 7.5 11c0 2.4853 2.0147 4.5 4.5 4.5s4.5-2.0147 4.5-4.5a4.48 4.48 0 0 0-.9-2.7004M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9"
    />
  </svg>
);
const ForwardRef = forwardRef(Power02);
const Memo = memo(ForwardRef);
export default Memo;
