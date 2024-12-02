import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Lightning01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="lightning-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.0567 3-8.0158 9.6191c-.314.3767-.471.565-.4733.7241a.45.45 0 0 0 .167.3568c.1238.1.369.1.8594.1h6.5627l-.9 7.2 8.0159-9.6191c.314-.3767.4709-.565.4733-.7241a.45.45 0 0 0-.1671-.3568c-.1237-.1-.3689-.1-.8593-.1h-6.5628z"
    />
  </svg>
);
const ForwardRef = forwardRef(Lightning01);
const Memo = memo(ForwardRef);
export default Memo;
