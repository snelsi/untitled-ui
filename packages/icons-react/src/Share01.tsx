import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Share01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="share-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12v4.2c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V12m13-5-4-4m0 0L8 7m4-4v12"
    />
  </svg>
);
const ForwardRef = forwardRef(Share01);
const Memo = memo(ForwardRef);
export default Memo;
