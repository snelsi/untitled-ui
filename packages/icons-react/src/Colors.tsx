import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Colors = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="colors"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18.625c.9554.8551 2.217 1.375 3.6 1.375 2.9823 0 5.4-2.4177 5.4-5.4 0-2.4902-1.6856-4.5868-3.9782-5.2108m-10.0436 0C4.6856 10.0132 3 12.1098 3 14.6 3 17.5823 5.4177 20 8.4 20s5.4-2.4177 5.4-5.4a5.38 5.38 0 0 0-.3782-1.9891M17.4 7.4c0 2.9823-2.4177 5.4-5.4 5.4s-5.4-2.4177-5.4-5.4S9.0177 2 12 2s5.4 2.4177 5.4 5.4"
    />
  </svg>
);
const ForwardRef = forwardRef(Colors);
const Memo = memo(ForwardRef);
export default Memo;
