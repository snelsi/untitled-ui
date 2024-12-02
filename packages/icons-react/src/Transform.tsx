import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Transform = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="transform"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7v10M5 7v10M17 5H7m10 14H7M4.6 7h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C7 6.24 7 5.96 7 5.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C6.24 3 5.96 3 5.4 3h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 7 4.04 7 4.6 7m0 14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C7 20.2401 7 19.9601 7 19.4v-.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C6.24 17 5.96 17 5.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 17.7599 3 18.0399 3 18.6v.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21m14-14h.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 6.24 21 5.96 21 5.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3h-.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C17 3.76 17 4.04 17 4.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C17.7599 7 18.0399 7 18.6 7m0 14h.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C20.2401 17 19.9601 17 19.4 17h-.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C17 17.7599 17 18.0399 17 18.6v.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109"
    />
  </svg>
);
const ForwardRef = forwardRef(Transform);
const Memo = memo(ForwardRef);
export default Memo;
