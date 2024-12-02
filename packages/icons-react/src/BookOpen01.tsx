import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const BookOpen01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="book-open-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 19.2-.09-.1351c-.6252-.9377-.9378-1.4066-1.3508-1.7461a3.6 3.6 0 0 0-1.2398-.6635C8.808 16.5 8.2444 16.5 7.1174 16.5H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 15.1321 3 14.6281 3 13.62V5.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 3 4.872 3 5.88 3h.36c2.0162 0 3.0243 0 3.7944.3924a3.6 3.6 0 0 1 1.5732 1.5732C12 5.7357 12 6.7438 12 8.76m0 10.44V8.76m0 10.44.09-.1351c.6252-.9377.9378-1.4066 1.3508-1.7461a3.6 3.6 0 0 1 1.2398-.6635c.5115-.1553 1.075-.1553 2.2021-.1553H18.12c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 15.1321 21 14.6281 21 13.62V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 3 19.1281 3 18.12 3h-.36c-2.0162 0-3.0243 0-3.7944.3924a3.6 3.6 0 0 0-1.5732 1.5732C12 5.7357 12 6.7438 12 8.76"
    />
  </svg>
);
const ForwardRef = forwardRef(BookOpen01);
const Memo = memo(ForwardRef);
export default Memo;
