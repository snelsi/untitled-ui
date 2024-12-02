import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PaintPour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="paint-pour"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5825 11.1h-12.6m7.2-6.3-1.8-1.8m5.4 18h-10.8m18-5.4c0 .9941-.8058 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8s1.8-2.7 1.8-2.7 1.8 1.7059 1.8 2.7m-11.7-11.7 6.1818 6.1818c.3564.3564.5346.5346.6014.7401a.9.9 0 0 1 0 .5562c-.0668.2055-.245.3837-.6014.7401l-4.1453 4.1453c-.7128.7129-1.0692 1.0693-1.4802 1.2028a1.8 1.8 0 0 1-1.1125 0c-.411-.1335-.7674-.4899-1.4802-1.2028l-3.127-3.127c-.713-.7129-1.0693-1.0693-1.2029-1.4803a1.8 1.8 0 0 1 0-1.1124c.1336-.411.49-.7674 1.2028-1.4803z"
    />
  </svg>
);
const ForwardRef = forwardRef(PaintPour);
const Memo = memo(ForwardRef);
export default Memo;
