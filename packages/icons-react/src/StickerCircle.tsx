import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const StickerCircle = (
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
      d="M22.0006 12.1171C22.0006 6.5296 17.471 2 11.8835 2c-4.535 0-8.3731 2.9839-9.6582 7.0954-.0823.2634-.1235.395-.1196.5597.0032.134.0439.2994.1032.4194.073.1477.1856.2604.411.4857l10.821 10.8205c.2253.2253.3379.338.4856.4109.1201.0593.2855.1.4194.1032.1647.0039.2964-.0373.5598-.1196 4.1113-1.2852 7.0949-5.1232 7.0949-9.6581Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.4468 9.7341c.2405-.0171.4833-.0258.7282-.0258 5.5875 0 10.1171 4.5296 10.1171 10.1171 0 .2449-.0087.4877-.0258.7282-.0299.4202-.0448.6303-.1673.7601-.0995.1054-.2692.1687-.4134.1543-.1776-.0178-.339-.1793-.662-.5022l-9.989-9.989c-.3229-.3229-.4844-.4844-.5021-.662-.0145-.1442.0489-.3139.1542-.4134.1298-.1225.34-.1374.7601-.1673Z"
    />
  </svg>
);
const ForwardRef = forwardRef(StickerCircle);
const Memo = memo(ForwardRef);
export default Memo;
