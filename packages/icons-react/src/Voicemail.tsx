import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Voicemail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="voicemail"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.6 15.2h10.8m-10.8 0c1.9882 0 3.6-1.6118 3.6-3.6S8.5882 8 6.6 8 3 9.6118 3 11.6s1.6118 3.6 3.6 3.6m10.8 0c1.9882 0 3.6-1.6118 3.6-3.6S19.3882 8 17.4 8s-3.6 1.6118-3.6 3.6 1.6118 3.6 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Voicemail);
const Memo = memo(ForwardRef);
export default Memo;
