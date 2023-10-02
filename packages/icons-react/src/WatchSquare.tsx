import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const WatchSquare = (
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
      d="m15.85 17.85-.3032 1.0612c-.2139.7487-.3209 1.1231-.5393 1.401a1.7998 1.7998 0 0 1-.7347.5542C13.9457 21 13.5563 21 12.7776 21H9.9224c-.7787 0-1.168 0-1.4953-.1336a1.8002 1.8002 0 0 1-.7346-.5542c-.2184-.2779-.3254-.6523-.5393-1.401L6.85 17.85m9-11.7-.3032-1.0612c-.2139-.7487-.3209-1.1231-.5393-1.401a1.7995 1.7995 0 0 0-.7347-.5542C13.9457 3 13.5563 3 12.7776 3H9.9224c-.7787 0-1.168 0-1.4953.1336a1.8 1.8 0 0 0-.7346.5542c-.2184.2779-.3254.6523-.5393 1.401L6.85 6.15m4.5 3.15V12l1.35 1.35m-4.32 4.5h5.94c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972V9.03c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C15.8321 6.15 15.3281 6.15 14.32 6.15H8.38c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C5.5 7.5178 5.5 8.022 5.5 9.03v5.94c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962Z"
    />
  </svg>
);
const ForwardRef = forwardRef(WatchSquare);
const Memo = memo(ForwardRef);
export default Memo;
