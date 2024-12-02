import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CalendarHeart01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="calendar-heart-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.2 8.4H3M14.7 3v2.7M7.5 3v2.7M7.32 21h7.56c1.5121 0 2.2682 0 2.8458-.2943a2.7 2.7 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 21 5.8078 21 7.32 21m3.7775-8.7025c-.7197-.8181-1.92-1.0381-2.8218-.289s-1.0288 2.0016-.3206 2.8876c.5142.6433 1.9382 1.9096 2.6799 2.5551.1608.14.2412.2099.3354.2377a.46.46 0 0 0 .2543 0c.0942-.0278.1746-.0977.3354-.2377.7416-.6455 2.1657-1.9118 2.6799-2.5551.7082-.886.5967-2.1463-.3206-2.8876s-2.1021-.5291-2.8219.289"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarHeart01);
const Memo = memo(ForwardRef);
export default Memo;
