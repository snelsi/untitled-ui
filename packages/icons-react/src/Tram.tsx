import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Tram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m17.05 3.9-.8879-.444c-.3401-.17-.5102-.255-.6885-.315a2.6993 2.6993 0 0 0-.4866-.115C14.8007 3 14.6105 3 14.2302 3H8.1698c-.3803 0-.5705 0-.7568.026a2.6998 2.6998 0 0 0-.4866.115c-.1783.06-.3484.145-.6886.315L5.35 3.9m4.95 2.7L8.5 3m3.6 3.6L13.9 3M4 12.9h14.4m-2.7 6.3.9 1.8m-9.9-1.8L5.8001 21M8.05 16.05h.009m6.291 0h.009M8.32 19.2h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-3.96c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C16.3482 6.6 15.5921 6.6 14.08 6.6H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 8.6517 4 9.4078 4 10.92v3.96c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Zm.18-3.15a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm6.3 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tram);
const Memo = memo(ForwardRef);
export default Memo;
