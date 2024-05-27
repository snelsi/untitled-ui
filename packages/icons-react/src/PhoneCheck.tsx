import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PhoneCheck = (
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
      d="M12.375 17.5h.0095m2.2821 4.5H8.7333c-1.0734 0-1.6102 0-2.0202-.218-.3606-.1917-.6538-.4977-.8376-.874-.2089-.4278-.2089-.9879-.2089-2.108V5.2c0-1.1201 0-1.6802.209-2.108.1837-.3763.4769-.6823.8375-.874C7.1231 2 7.66 2 8.7333 2h7.2833c1.0735 0 1.6102 0 2.0202.218.3606.1917.6538.4977.8376.874.2089.4278.2089.9879.2089 2.108V14m-6.2292 3.5c0 .2761-.2145.5-.4791.5s-.4792-.2239-.4792-.5.2145-.5.4792-.5c.2646 0 .4791.2239.4791.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 18 1.9167 2 3.8333-4"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneCheck);
const Memo = memo(ForwardRef);
export default Memo;
