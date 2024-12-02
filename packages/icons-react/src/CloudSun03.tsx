import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CloudSun03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="cloud-sun-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.035 10.1A6.8 6.8 0 0 1 3.9 8.75C3.9 5.022 6.922 2 10.65 2c3.4228 0 6.2505 2.5476 6.6905 5.85M6.6 20C4.6118 20 3 18.3882 3 16.4s1.6118-3.6 3.6-3.6q.153 0 .3029.0126C7.6406 10.7087 9.644 9.2 12 9.2c2.0023 0 3.7501 1.0898 4.6826 2.7087A4 4 0 0 1 16.95 11.9c2.2368 0 4.05 1.8132 4.05 4.05S19.1868 20 16.95 20z"
    />
  </svg>
);
const ForwardRef = forwardRef(CloudSun03);
const Memo = memo(ForwardRef);
export default Memo;
