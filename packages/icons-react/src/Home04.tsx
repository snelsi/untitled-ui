import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Home04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 16c1.6569 0 3-1.3432 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10.5651c0-.5744 0-.8616.074-1.126a2 2 0 0 1 .318-.6502c.1633-.2208.39-.3971.8434-.7498l6.7823-5.2751c.3513-.2732.527-.4099.721-.4624a1 1 0 0 1 .5226 0c.194.0525.3697.1891.721.4624l6.7823 5.2751c.4534.3527.6801.529.8434.7498.1446.1955.2524.4159.318.6502.074.2644.074.5516.074 1.126V17.8c0 1.1201 0 1.6801-.218 2.108a2 2 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.4801 3 18.9201 3 17.8z"
    />
  </svg>
);
const ForwardRef = forwardRef(Home04);
const Memo = memo(ForwardRef);
export default Memo;
