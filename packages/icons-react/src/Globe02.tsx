import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Globe02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="globe-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.6611 18.3391 4.5939-4.5939M18.2175 2.7827c3.71 3.71 3.71 9.7251 0 13.435s-9.725 3.71-13.435 0M17 22.0002H7m5 0v-3m5.5-9.5c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6 2.6863-6 6-6 6 2.6863 6 6"
    />
  </svg>
);
const ForwardRef = forwardRef(Globe02);
const Memo = memo(ForwardRef);
export default Memo;
