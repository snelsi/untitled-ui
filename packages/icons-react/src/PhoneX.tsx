import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PhoneX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="phone-x"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.0416 17.5h.0096m1.2821 4.5H8.3999c-1.0734 0-1.6101 0-2.0201-.218-.3607-.1917-.6539-.4977-.8376-.874-.209-.4278-.209-.9879-.209-2.108V5.2c0-1.1201 0-1.6802.209-2.108.1837-.3763.477-.6823.8376-.874C6.7898 2 7.3265 2 8.3999 2h7.2834c1.0734 0 1.6101 0 2.0201.218.3606.1917.6539.4977.8376.874.2089.4278.2089.9879.2089 2.108V13m-6.2291 4.5c0 .2761-.2146.5-.4792.5s-.4792-.2239-.4792-.5.2145-.5.4792-.5c.2646 0 .4792.2239.4792.5m3.625-1.5 4.7916 5m0-5-4.7916 5"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneX);
const Memo = memo(ForwardRef);
export default Memo;
