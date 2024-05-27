import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Settings02 = (
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
      d="m8.76 18.634.526 1.183A1.991 1.991 0 0 0 11.1062 21a1.991 1.991 0 0 0 1.82-1.183l.526-1.183a2.183 2.183 0 0 1 .9-1 2.19 2.19 0 0 1 1.323-.281l1.287.137a1.992 1.992 0 0 0 1.934-.985 1.99 1.99 0 0 0 .2643-1.1004 1.99 1.99 0 0 0-.3783-1.0666l-.762-1.047a2.186 2.186 0 0 1-.414-1.291 2.185 2.185 0 0 1 .418-1.286l.762-1.047a1.99 1.99 0 0 0 .114-2.167 1.991 1.991 0 0 0-1.934-.985l-1.287.137a2.19 2.19 0 0 1-1.323-.281 2.183 2.183 0 0 1-.9-1.005l-.53-1.183a1.9915 1.9915 0 0 0-3.64 0L8.76 5.366a2.183 2.183 0 0 1-.9 1.005 2.19 2.19 0 0 1-1.323.281l-1.291-.137a1.991 1.991 0 0 0-1.934.985 1.99 1.99 0 0 0 .114 2.167l.762 1.047a2.187 2.187 0 0 1 0 2.572l-.762 1.047a1.99 1.99 0 0 0-.114 2.167 1.993 1.993 0 0 0 1.934.985l1.287-.137a2.19 2.19 0 0 1 1.323.281c.4.2309.7166.5828.904 1.005"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.1045 14.7c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Settings02);
const Memo = memo(ForwardRef);
export default Memo;
