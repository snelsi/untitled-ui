import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Award05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.6923 11.2701 3.2681 5.1425c-.3938-.7046-.5907-1.057-.5575-1.3454a.9.9 0 0 1 .3682-.6274C3.3144 3 3.718 3 4.525 3h2.0113c.3 0 .45 0 .5845.0433a.9.9 0 0 1 .3223.1842c.1056.094.1817.2231.334.4816L11.0708 9.3l3.2936-5.591c.1523-.2584.2284-.3876.334-.4815a.9001.9001 0 0 1 .3223-.1842C15.1552 3 15.3052 3 15.6052 3h2.0113c.8071 0 1.2107 0 1.4463.1697a.9.9 0 0 1 .3682.6274c.0331.2885-.1637.6408-.5575 1.3454L15.4493 11.27M9.7208 13.8l1.35-.9v4.5m-1.125 0h2.25m3.0116-6.3866c2.2845 2.2846 2.2845 5.9886 0 8.2732-2.2846 2.2845-5.9886 2.2845-8.2732 0-2.2845-2.2846-2.2845-5.9886 0-8.2732 2.2846-2.2845 5.9886-2.2845 8.2732 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Award05);
const Memo = memo(ForwardRef);
export default Memo;
