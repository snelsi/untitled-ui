import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ActivityHeart = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="activity-heart"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.15 10.65h-.9l-1.35 2.7-1.8-5.4-1.35 2.7h-.9m3.1438-5.7278c-1.7994-2.1036-4.8-2.6695-7.0546-.7432s-2.572 5.147-.8014 7.4254c1.3373 1.7208 5.1364 5.1755 6.9154 6.763.327.2918.4906.4377.682.4952a.91.91 0 0 0 .5172 0c.1915-.0575.355-.2034.6821-.4952 1.779-1.5875 5.5781-5.0422 6.9154-6.763 1.7705-2.2783 1.4918-5.5193-.8015-7.4254s-5.2551-1.3604-7.0546.7432"
    />
  </svg>
);
const ForwardRef = forwardRef(ActivityHeart);
const Memo = memo(ForwardRef);
export default Memo;
