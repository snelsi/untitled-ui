import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const LinkExternal01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="link-external-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9V3m0 0h-6m6 0-8 8m-3-6H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.2798 3 8.1198 3 9.8v6.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h6.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 18.7202 19 17.8802 19 16.2V14"
    />
  </svg>
);
const ForwardRef = forwardRef(LinkExternal01);
const Memo = memo(ForwardRef);
export default Memo;
