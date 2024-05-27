import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Bell03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.8534 18.3c0 1.4912-1.2089 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7m4.3168-11.4853c.392-.405.6332-.9566.6332-1.5647 0-1.2426-1.0074-2.25-2.25-2.25s-2.25 1.0074-2.25 2.25c0 .608.2412 1.1598.6331 1.5647m7.0169 4.4653c0-1.2412-.569-2.4316-1.5817-3.3093S12.5855 6.6 11.1534 6.6c-1.4322 0-2.8057.493-3.8184 1.3707S5.7534 10.0388 5.7534 11.28c0 2.0536-.5093 3.5555-1.1448 4.6302-.7242 1.2249-1.0864 1.8373-1.072 1.9836.0163.1673.0464.2202.1822.3194.1186.0868.7147.0868 1.907.0868H16.681c1.1922 0 1.7883 0 1.907-.0868.1357-.0992.1658-.1521.1822-.3194.0143-.1463-.3478-.7587-1.0721-1.9836-.6355-1.0747-1.1447-2.5766-1.1447-4.6302"
    />
  </svg>
);
const ForwardRef = forwardRef(Bell03);
const Memo = memo(ForwardRef);
export default Memo;
