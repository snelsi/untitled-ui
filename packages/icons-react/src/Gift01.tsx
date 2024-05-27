import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Gift01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 5.6V20m0-14.4H8.8179c-.469 0-.9186-.1896-1.2501-.5272S7.05 4.2774 7.05 3.8s.1863-.9352.5178-1.2728S8.349 2 8.8178 2C11.293 2 12 5.6 12 5.6m0 0h3.1821c.4689 0 .9186-.1896 1.2501-.5272S16.95 4.2774 16.95 3.8s-.1863-.9352-.5178-1.2728S15.651 2 15.1821 2C12.7071 2 12 5.6 12 5.6m7.2 4.5v7.02c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C17.8321 20 17.3281 20 16.32 20H7.68c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C4.8 18.6321 4.8 18.1281 4.8 17.12V10.1M3 7.04v1.62c0 .504 0 .756.098.9486a.9.9 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h15.12c.504 0 .7561 0 .9486-.0981a.9.9 0 0 0 .3933-.3933C21 9.416 21 9.164 21 8.66V7.04c0-.504 0-.756-.0981-.9486a.9.9 0 0 0-.3933-.3933C20.3161 5.6 20.064 5.6 19.56 5.6H4.44c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C3 6.284 3 6.536 3 7.04"
    />
  </svg>
);
const ForwardRef = forwardRef(Gift01);
const Memo = memo(ForwardRef);
export default Memo;
