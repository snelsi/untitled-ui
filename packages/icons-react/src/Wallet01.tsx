import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Wallet01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="wallet-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 8.05H3m0 3.6h3.192c.4862 0 .7293 0 .9643.0419.2087.0372.4122.0988.6064.1836.2188.0955.421.2304.8256.5l.5234.349c.4045.2696.6068.4045.8256.5a2.7 2.7 0 0 0 .6064.1836c.235.0419.4781.0419.9643.0419h.984c.4862 0 .7293 0 .9643-.0419a2.7 2.7 0 0 0 .6064-.1836c.2188-.0955.4211-.2304.8256-.5l.5234-.349c.4045-.2696.6068-.4045.8256-.5a2.7 2.7 0 0 1 .6064-.1836c.235-.0419.4781-.0419.9643-.0419H21M3 6.88v8.64c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 17.0321 21 16.5281 21 15.52V6.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 4 19.1281 4 18.12 4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 5.3678 3 5.872 3 6.88"
    />
  </svg>
);
const ForwardRef = forwardRef(Wallet01);
const Memo = memo(ForwardRef);
export default Memo;
