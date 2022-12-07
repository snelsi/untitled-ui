import * as React from 'react';
import { SVGProps } from 'react';
const ClockSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.05 15.5h4.5l-4.5 4.5h4.5m.4056-8.1A9.105 9.105 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9a9.0768 9.0768 0 0 0 .9-.0444M12 5.6V11l3.3645 1.6823"
    />
  </svg>
);
export default ClockSnooze;
