import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CameraLens = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="camera-lens"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.4155 15.3411c-2.8231 2.0084-6.526 2.2315-9.5385.6589M2.5845 8.6589c2.8299-2.0132 6.544-2.2325 9.5603-.6474m3.2289 6.1128c2.8867-1.8193 4.5582-5.1502 4.2273-8.612M8.5818 9.9036c-2.8595 1.8254-4.5122 5.1399-4.183 8.5841m11.1281-8.3508c-.133-3.4085-2.1819-6.5202-5.3448-7.9648M8.4756 13.9256c.1555 3.384 2.1987 6.4664 5.3421 7.9022M19.071 4.9289c3.9053 3.9053 3.9053 10.2369 0 14.1421-3.9052 3.9053-10.2368 3.9053-14.142 0-3.9053-3.9052-3.9053-10.2368 0-14.142 3.9052-3.9053 10.2368-3.9053 14.142 0m-4.2426 4.2427c1.5621 1.5621 1.5621 4.0947 0 5.6568s-4.0947 1.5621-5.6568 0-1.5621-4.0947 0-5.6568 4.0947-1.5621 5.6568 0"
    />
  </svg>
);
const ForwardRef = forwardRef(CameraLens);
const Memo = memo(ForwardRef);
export default Memo;
