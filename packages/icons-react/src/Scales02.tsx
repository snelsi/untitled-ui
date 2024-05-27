import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Scales02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.5005 13h6m7 0h6m-9.5-6v14m0-14c1.3807 0 2.5-1.1193 2.5-2.5m-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5m-5.5 16.5h16m-16-16.5h5.5m0 0c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5m0 0h5.5M8.8809 14.3364C8.4802 15.8706 7.1186 17 5.5005 17S2.5207 15.8706 2.12 14.3364c-.0327-.1254-.049-.1881-.0507-.4385-.001-.1536.0561-.5075.1053-.653.0802-.2373.167-.3712.3406-.639L5.5005 8l2.9853 4.6059c.1736.2678.2604.4017.3406.639.0491.1455.1062.4994.1052.653-.0016.2504-.018.3131-.0507.4385m13 0C21.4802 15.8706 20.1186 17 18.5005 17s-2.9798-1.1294-3.3805-2.6636c-.0327-.1254-.0491-.1881-.0507-.4385-.0009-.1536.0561-.5075.1053-.653.0802-.2373.167-.3712.3406-.639L18.5005 8l2.9853 4.6059c.1736.2678.2604.4017.3406.639.0491.1455.1062.4994.1052.653-.0016.2504-.0179.3131-.0507.4385"
    />
  </svg>
);
const ForwardRef = forwardRef(Scales02);
const Memo = memo(ForwardRef);
export default Memo;
