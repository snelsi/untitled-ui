import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Fingerprint02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="fingerprint-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v4M7.4471 3.421C8.7394 2.525 10.3084 2 12 2c4.4183 0 8 3.5817 8 8v1.2367M4.4163 7.4461A7.99 7.99 0 0 0 4 10v4c0 3.6349 2.4242 6.7035 5.744 7.6775m9.9148-5.3588c-.7294 2.4127-2.5677 4.3439-4.9221 5.2009M14.325 6.1464A4.48 4.48 0 0 0 12 5.5c-2.4853 0-4.5 2.0147-4.5 4.5v2.95m9-1.91V14c0 2.4853-2.0147 4.5-4.5 4.5a4.48 4.48 0 0 1-2.3199-.6433"
    />
  </svg>
);
const ForwardRef = forwardRef(Fingerprint02);
const Memo = memo(ForwardRef);
export default Memo;
