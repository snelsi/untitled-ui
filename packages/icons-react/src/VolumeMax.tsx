import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const VolumeMax = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="volume-max"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.9731 4.9706C20.2487 6.744 21 8.9196 21 11.2706c0 2.3512-.7513 4.5268-2.0269 6.3m-3.6023-9.9c.7118 1.0205 1.1292 2.2615 1.1292 3.6s-.4174 2.5796-1.1292 3.6m-5.5-9.5708-2.849 2.849c-.1557.1557-.2335.2336-.3243.2892a.9.9 0 0 1-.2602.1078c-.1036.0248-.2136.0248-.4338.0248H4.44c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 9.2547 3 9.5066 3 10.0107v2.52c0 .5041 0 .7561.098.9486a.9.9 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h1.5635c.2202 0 .3302 0 .4338.0249a.9.9 0 0 1 .2602.1078c.0908.0556.1686.1334.3243.2891l2.849 2.8491c.3856.3856.5784.5783.7439.5914a.45.45 0 0 0 .3775-.1564c.1078-.1262.1078-.3989.1078-.9441V5.8089c0-.5453 0-.8179-.1078-.9441a.45.45 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5914"
    />
  </svg>
);
const ForwardRef = forwardRef(VolumeMax);
const Memo = memo(ForwardRef);
export default Memo;
