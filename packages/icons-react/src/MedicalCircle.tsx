import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const MedicalCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="medical-circle"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.65 7.77c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1966C13.308 7.05 13.182 7.05 12.93 7.05h-1.86c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v1.86c0 .252 0 .378-.049.4743a.45.45 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049H7.77c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967c-.0491.0963-.0491.2223-.0491.4743v1.86c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743.049a.45.45 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v1.86c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378.049-.4743a.45.45 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h1.86c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-1.86c-.252 0-.378 0-.4743-.049a.45.45 0 0 1-.1967-.1967c-.049-.0963-.049-.2223-.049-.4743z"
    />
  </svg>
);
const ForwardRef = forwardRef(MedicalCircle);
const Memo = memo(ForwardRef);
export default Memo;
