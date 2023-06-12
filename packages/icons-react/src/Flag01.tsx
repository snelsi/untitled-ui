import * as React from 'react';
import { SVGProps } from 'react';
const Flag01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 14.7s.9-.9 3.6-.9 4.5 1.8 7.2 1.8 3.6-.9 3.6-.9V3.9s-.9.9-3.6.9S10.3 3 7.6 3 4 3.9 4 3.9V21"
    />
  </svg>
);
export default Flag01;
