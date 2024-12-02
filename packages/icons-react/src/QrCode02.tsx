import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const QrCode02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="qr-code-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 6.5h.01m10.99 0h.01M6.5 17.5h.01M13 13h.01m4.49 4.5h.01M17 21h4v-4m-7-.5V21m7-7h-4.5m-.9-4h3.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3h-3.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109m-11 0h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 10 4.04 10 4.6 10m0 11h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.2401 10 19.9601 10 19.4v-3.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.7599 3 15.0399 3 15.6v3.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21"
    />
  </svg>
);
const ForwardRef = forwardRef(QrCode02);
const Memo = memo(ForwardRef);
export default Memo;
