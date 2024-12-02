import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Grid03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="grid-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3H6.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C3 4.5198 3 5.08 3 6.2V8m5 13H6.2c-1.1201 0-1.6802 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.4802 3 18.9201 3 17.8V16m18-8V6.2c0-1.1201 0-1.6802-.218-2.108a2 2 0 0 0-.874-.874C19.4802 3 18.9201 3 17.8 3H16m5 13v1.8c0 1.1201 0 1.6802-.218 2.108a2 2 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H16m0-9c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(Grid03);
const Memo = memo(ForwardRef);
export default Memo;
