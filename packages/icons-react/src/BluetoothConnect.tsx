import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const BluetoothConnect = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="bluetooth-connect"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 7.5 10.8 9L8.4 21V3l5.4 4.5-10.8 9M16.5 12h.009M13.8 12h.009m5.391 0h.009"
    />
  </svg>
);
const ForwardRef = forwardRef(BluetoothConnect);
const Memo = memo(ForwardRef);
export default Memo;
