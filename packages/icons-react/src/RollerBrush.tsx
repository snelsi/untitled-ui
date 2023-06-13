import * as React from 'react';
import { SVGProps } from 'react';
const RollerBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.4 5.25c0 .4182 0 .6273-.0346.8012a1.8 1.8 0 0 1-1.4142 1.4142c-.1739.0346-.383.0346-.8012.0346h-9.9c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142C3 5.8772 3 5.6682 3 5.25s0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142C4.6228 3 4.8318 3 5.25 3h9.9c.4182 0 .6273 0 .8012.0346a1.8 1.8 0 0 1 1.4142 1.4142c.0346.174.0346.383.0346.8012Zm0 0c.8387 0 1.258 0 1.5888.137a1.8 1.8 0 0 1 .9742.9742c.137.3308.137.7501.137 1.5888v.27c0 1.008 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962h-3.24c-1.0081 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866c-.1962.3851-.1962.8891-.1962 1.8972v.72m-.36 6.3h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-3.42c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C12.2161 14.7 11.964 14.7 11.46 14.7h-.72c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933C9.3 15.3839 9.3 15.636 9.3 16.14v3.42c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933C9.984 21 10.236 21 10.74 21Z"
    />
  </svg>
);
export default RollerBrush;
