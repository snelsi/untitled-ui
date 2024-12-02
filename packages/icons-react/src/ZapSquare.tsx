import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const ZapSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="zap-square"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 6-4.5664 6.2269c-.301.4105-.4516.6158-.4467.7873a.5.5 0 0 0 .1928.3805c.1354.1053.39.1053.899.1053H12V18l4.5664-6.2269c.301-.4105.4516-.6158.4467-.7873a.5.5 0 0 0-.1928-.3805c-.1354-.1053-.39-.1053-.899-.1053H12z"
    />
  </svg>
);
const ForwardRef = forwardRef(ZapSquare);
const Memo = memo(ForwardRef);
export default Memo;
