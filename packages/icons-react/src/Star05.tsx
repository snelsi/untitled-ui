import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Star05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="star-05"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 2 1.1713 4.6854c.2286.9143.3429 1.3714.5809 1.7434.2106.329.49.6084.819.819.372.238.8291.3523 1.7434.5808L21 11l-4.6854 1.1713c-.9143.2286-1.3714.3429-1.7434.5809a2.7 2.7 0 0 0-.819.819c-.238.372-.3523.8291-.5809 1.7434L12 20l-1.1713-4.6854c-.2286-.9143-.3429-1.3714-.5809-1.7434a2.7 2.7 0 0 0-.819-.819c-.372-.238-.8291-.3523-1.7434-.5809L3 11l4.6854-1.1714c.9143-.2285 1.3714-.3428 1.7434-.5808a2.7 2.7 0 0 0 .819-.819c.238-.372.3523-.8291.5809-1.7434z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 2 1.1713 4.6854c.2286.9143.3429 1.3714.5809 1.7434.2106.329.49.6084.819.819.372.238.8291.3523 1.7434.5808L21 11l-4.6854 1.1713c-.9143.2286-1.3714.3429-1.7434.5809a2.7 2.7 0 0 0-.819.819c-.238.372-.3523.8291-.5809 1.7434L12 20l-1.1713-4.6854c-.2286-.9143-.3429-1.3714-.5809-1.7434a2.7 2.7 0 0 0-.819-.819c-.372-.238-.8291-.3523-1.7434-.5809L3 11l4.6854-1.1714c.9143-.2285 1.3714-.3428 1.7434-.5808a2.7 2.7 0 0 0 .819-.819c.238-.372.3523-.8291.5809-1.7434z"
    />
  </svg>
);
const ForwardRef = forwardRef(Star05);
const Memo = memo(ForwardRef);
export default Memo;
