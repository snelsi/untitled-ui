import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Flag03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 13h15.587c.4625 0 .6938 0 .8258-.097a.5.5 0 0 0 .2019-.3566c.0153-.1631-.1037-.3614-.3417-.758l-2.026-3.3768c-.0898-.1496-.1347-.2245-.1523-.3044a.5.5 0 0 1 0-.2144c.0176-.08.0625-.1547.1523-.3044l2.026-3.3768c.238-.3966.357-.5949.3417-.758a.5.5 0 0 0-.2019-.3566C20.2808 3 20.0495 3 19.587 3H4v18"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag03);
const Memo = memo(ForwardRef);
export default Memo;
