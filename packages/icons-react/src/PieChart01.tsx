import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PieChart01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M21.2104 15.8899a10 10 0 0 1-7.2676 5.9148A9.9996 9.9996 0 0 1 2.169 10.1646 10 10 0 0 1 8.0004 2.83m13.2388 5.343a10 10 0 0 1 .7292 3.0277c.0206.2568.0309.3852-.0201.5009a.525.525 0 0 1-.2199.2382c-.1112.06-.2501.06-.528.06h-8.4c-.28 0-.42 0-.527-.0544a.5.5 0 0 1-.2185-.2186c-.0545-.1069-.0545-.2469-.0545-.527v-8.4c0-.2778 0-.4167.0601-.528a.525.525 0 0 1 .2382-.2199c.1157-.051.2441-.0407.5009-.02a10 10 0 0 1 8.4396 6.1411"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart01);
const Memo = memo(ForwardRef);
export default Memo;
