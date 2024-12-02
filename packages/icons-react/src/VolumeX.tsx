import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const VolumeX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="volume-x"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 8.4706-5.4 5.4m0-5.4 5.4 5.4M9.8709 4.2998l-2.8491 2.849c-.1557.1557-.2335.2336-.3243.2892a.9.9 0 0 1-.2602.1078c-.1036.0248-.2136.0248-.4338.0248H4.44c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 8.2547 3 8.5066 3 9.0107v4.32c0 .5041 0 .7561.098.9486a.9.9 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h1.5635c.2202 0 .3302 0 .4338.0249a.9.9 0 0 1 .2602.1078c.0908.0556.1686.1334.3243.2891l2.849 2.8491c.3856.3856.5784.5783.7439.5914a.45.45 0 0 0 .3775-.1564c.1078-.1262.1078-.3989.1078-.9441V4.8089c0-.5453 0-.8179-.1078-.9441a.45.45 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5914"
    />
  </svg>
);
const ForwardRef = forwardRef(VolumeX);
const Memo = memo(ForwardRef);
export default Memo;
