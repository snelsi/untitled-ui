import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FaceHappy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="face-happy"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.7 8.3h.009M9.3 8.3h.009M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9m-5.85-2.7a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0m-5.4 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0M12 15.95c2.2504 0 4.05-1.6497 4.05-3.15h-8.1c0 1.5003 1.7995 3.15 4.05 3.15"
    />
  </svg>
);
const ForwardRef = forwardRef(FaceHappy);
const Memo = memo(ForwardRef);
export default Memo;
