import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Building04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 7h5m-5 4h5m-5 4h5m3.5 6V6.2c0-1.1201 0-1.6802-.218-2.108a2 2 0 0 0-.874-.874C16.4802 3 15.9201 3 14.8 3H9.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C6 4.5198 6 5.08 6 6.2V21m14 0H4"
    />
  </svg>
);
const ForwardRef = forwardRef(Building04);
const Memo = memo(ForwardRef);
export default Memo;
