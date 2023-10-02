import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Home03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 21v-7.4c0-.5601 0-.8401.109-1.054a.9999.9999 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.5601 0 .8401 0 1.054.109a.9998.9998 0 0 1 .437.437c.109.2139.109.4939.109 1.054V21M2 9.5l9.04-6.78c.3443-.2582.5164-.3873.7054-.437a.9986.9986 0 0 1 .5092 0c.189.0497.3611.1788.7054.437L22 9.5M4 8v9.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C5.52 21 6.08 21 7.2 21h9.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C20 19.4802 20 18.9201 20 17.8V8l-6.08-4.56c-.6885-.5164-1.0328-.7746-1.4109-.8741a1.9998 1.9998 0 0 0-1.0182 0c-.3781.0995-.7224.3577-1.4109.8741L4 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Home03);
const Memo = memo(ForwardRef);
export default Memo;
