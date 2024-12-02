import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Beaker02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="beaker-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 6.6v4.0511c0 .4958 0 .7437-.0618.9735a1.8 1.8 0 0 1-.2662.5683c-.1369.1945-.3274.3532-.7083.6707l-3.3274 2.7728c-.381.3175-.5714.4762-.7083.6707a1.8 1.8 0 0 0-.2662.5683C3 17.1052 3 17.3531 3 17.8489v.2711c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 21 4.872 21 5.88 21h10.44c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-.2711c0-.4958 0-.7437-.0618-.9735a1.8 1.8 0 0 0-.2662-.5683c-.1369-.1945-.3274-.3532-.7083-.6707l-3.3274-2.7728c-.3809-.3175-.5714-.4762-.7083-.6707a1.8 1.8 0 0 1-.2662-.5683c-.0618-.2298-.0618-.4777-.0618-.9735V6.6m-6.03 0h6.66c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743V3.72c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1966C14.808 3 14.682 3 14.43 3H7.77c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967C7.05 3.342 7.05 3.468 7.05 3.72v2.16c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049m-2.52 9.9h11.7c.4182 0 .6273 0 .8012.0346a1.8 1.8 0 0 1 1.4142 1.4142c.0346.1739.0346.383.0346.8012s0 .6273-.0346.8012a1.8 1.8 0 0 1-1.4142 1.4142C17.5773 21 17.3682 21 16.95 21H5.25c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142C3 19.3773 3 19.1682 3 18.75s0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142c.174-.0346.383-.0346.8012-.0346"
    />
  </svg>
);
const ForwardRef = forwardRef(Beaker02);
const Memo = memo(ForwardRef);
export default Memo;
