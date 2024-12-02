import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Dataflow03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="dataflow-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.1 4.25h6.57c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972V8.3c0 .8387 0 1.258-.137 1.5888a1.8 1.8 0 0 1-.9742.9742C19.108 11 18.6887 11 17.85 11m-4.95 6.75H6.33c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3.45 16.3821 3.45 15.8781 3.45 14.87V13.7c0-.8387 0-1.258.137-1.5888a1.8 1.8 0 0 1 .9742-.9742C4.892 11 5.3113 11 6.15 11m4.32 2.25h3.06c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743V9.47c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1966C13.908 8.75 13.782 8.75 13.53 8.75h-3.06c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967C9.75 9.092 9.75 9.218 9.75 9.47v3.06c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049M17.22 20h3.06c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967C21 19.658 21 19.532 21 19.28v-3.06c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-3.06c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v3.06c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049M3.72 6.5h3.06c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967C7.5 6.158 7.5 6.032 7.5 5.78V2.72c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1966C7.158 2 7.032 2 6.78 2H3.72c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967C3 2.342 3 2.468 3 2.72v3.06c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049"
    />
  </svg>
);
const ForwardRef = forwardRef(Dataflow03);
const Memo = memo(ForwardRef);
export default Memo;
