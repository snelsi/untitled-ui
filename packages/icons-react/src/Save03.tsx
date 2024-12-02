import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Save03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="save-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 3h7.6745c.4892 0 .7338 0 .964.0553.204.049.3991.1298.5781.2394.2018.1237.3748.2966.7207.6426l3.1254 3.1254c.3459.346.5189.5189.6426.7207.1096.179.1904.374.2394.5781.0553.2302.0553.4748.0553.964V17m-8.5-7H8.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C7 9.24 7 8.96 7 8.4V6.5M13.5 21v-4.4c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C12.7401 15 12.4601 15 11.9 15H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7 15.7599 7 16.0399 7 16.6V21m10.5-10.8373V17.8c0 1.1201 0 1.6802-.218 2.108a2 2 0 0 1-.874.874C15.9802 21 15.4201 21 14.3 21H6.2c-1.1201 0-1.6802 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.4802 3 18.9201 3 17.8V9.7c0-1.1201 0-1.6802.218-2.108a2 2 0 0 1 .874-.874C4.5198 6.5 5.08 6.5 6.2 6.5h7.6373c.2445 0 .3668 0 .4819.0276a1 1 0 0 1 .2891.1198c.1009.0618.1874.1483.3603.3212l2.0628 2.0628c.1729.173.2594.2594.3212.3603a1 1 0 0 1 .1198.289c.0276.1152.0276.2375.0276.482"
    />
  </svg>
);
const ForwardRef = forwardRef(Save03);
const Memo = memo(ForwardRef);
export default Memo;
