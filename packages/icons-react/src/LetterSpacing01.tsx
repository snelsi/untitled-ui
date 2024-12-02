import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const LetterSpacing01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="letter-spacing-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 13h6m-8 4 4.2717-9.3977c.2314-.509.3471-.7636.5074-.8425a.5.5 0 0 1 .4418 0c.1603.079.276.3334.5074.8424L17 17m4-14v18M3 3v18"
    />
  </svg>
);
const ForwardRef = forwardRef(LetterSpacing01);
const Memo = memo(ForwardRef);
export default Memo;
