import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ClockSnooze = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="clock-snooze"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.05 15.5h4.5l-4.5 4.5h4.5m.4056-8.1A9.1 9.1 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9a9 9 0 0 0 .9-.0444M12 5.6V11l3.3645 1.6823"
    />
  </svg>
);
const ForwardRef = forwardRef(ClockSnooze);
const Memo = memo(ForwardRef);
export default Memo;
