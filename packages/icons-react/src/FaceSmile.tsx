import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FaceSmile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="face-smile"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 12.8s1.35 1.8 3.6 1.8 3.6-1.8 3.6-1.8m-.9-4.5h.009M9.3 8.3h.009M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9m-5.85-2.7a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m-5.4 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0"
    />
  </svg>
);
const ForwardRef = forwardRef(FaceSmile);
const Memo = memo(ForwardRef);
export default Memo;
