import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CheckVerified01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="check-verified-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.3 12 1.8 1.8 4.05-4.05M7.8004 4.6368a3.45 3.45 0 0 0 1.9626-.813c1.2891-1.0984 3.1849-1.0984 4.474 0a3.45 3.45 0 0 0 1.9626.813c1.6882.1348 3.0289 1.4753 3.1636 3.1636a3.45 3.45 0 0 0 .8129 1.9626c1.0985 1.2891 1.0985 3.1849 0 4.474a3.45 3.45 0 0 0-.8129 1.9626c-.1347 1.6882-1.4754 3.0289-3.1636 3.1636a3.45 3.45 0 0 0-1.9626.8129c-1.2891 1.0985-3.1849 1.0985-4.474 0a3.45 3.45 0 0 0-1.9626-.8129c-1.6882-.1347-3.0288-1.4754-3.1636-3.1636a3.45 3.45 0 0 0-.813-1.9626c-1.0984-1.2891-1.0984-3.1849 0-4.474a3.45 3.45 0 0 0 .813-1.9626c.1348-1.6882 1.4753-3.0288 3.1636-3.1636"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckVerified01);
const Memo = memo(ForwardRef);
export default Memo;
