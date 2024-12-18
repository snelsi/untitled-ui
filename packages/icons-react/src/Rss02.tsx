import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Rss02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="rss-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.0002 13.0225c5.185-.7796 8.7557 2.7921 7.9772 7.9771M3.0002 8.0378c7.9378-.7796 13.7415 5.0241 12.9619 12.9619M3.0002 3.0521c10.6917-.7785 18.7262 7.2561 17.9478 17.9477M5 21c-1.1043 0-2-.8957-2-2s.8957-2 2-2 2 .8957 2 2-.8957 2-2 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Rss02);
const Memo = memo(ForwardRef);
export default Memo;
