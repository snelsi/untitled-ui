import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Film03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="film-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 2v3.6m0 9v3.6m9-14.4v3.6m0 9V20M3 5.6h9m-9 9h9m0-7.2h9m-9 9h9m-9 1.8V3.44c0-.504 0-.756-.0981-.9486a.9.9 0 0 0-.3933-.3933C11.3161 2 11.064 2 10.56 2H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 4.0517 3 4.8078 3 6.32v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943zm0-14.4h4.68c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 5.8517 21 6.6078 21 8.12v7.56c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799C18.9482 20 18.1921 20 16.68 20h-3.24c-.504 0-.7561 0-.9486-.0981a.9.9 0 0 1-.3933-.3933C12 19.3161 12 19.064 12 18.56z"
    />
  </svg>
);
const ForwardRef = forwardRef(Film03);
const Memo = memo(ForwardRef);
export default Memo;
