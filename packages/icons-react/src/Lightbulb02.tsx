import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Lightbulb02 = (
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
      d="M10.2 16.0927V18.2c0 .9941.8059 1.8 1.8 1.8s1.8-.8059 1.8-1.8v-2.1073M12 2v.9M3.9 11H3m3.15-5.85-.54-.54m12.24.54.5402-.54M21 11h-.9m-2.7 0c0 2.9823-2.4177 5.4-5.4 5.4S6.6 13.9823 6.6 11 9.0177 5.6 12 5.6s5.4 2.4177 5.4 5.4"
    />
  </svg>
);
const ForwardRef = forwardRef(Lightbulb02);
const Memo = memo(ForwardRef);
export default Memo;
