import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const MoonStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="moon-star"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.4 2 .556 1.112c.239.478.3584.7169.518.9239.1417.1837.3064.3485.4901.49.2071.1597.446.2791.9239.518L21 5.6l-1.112.556c-.4779.239-.7168.3584-.9239.518a2.7 2.7 0 0 0-.4901.4901c-.1596.207-.279.446-.518.9239L17.4 9.2l-.556-1.112c-.239-.478-.3584-.7168-.518-.9239a2.7 2.7 0 0 0-.4901-.49c-.2071-.1597-.446-.2792-.9239-.518L13.8 5.6l1.112-.556c.4779-.239.7168-.3584.9239-.518a2.7 2.7 0 0 0 .4901-.4901c.1596-.207.279-.446.518-.9239zm2.7 10.2504c-1.1799 2.0697-3.4069 3.4651-5.9598 3.4651-3.7862 0-6.8555-3.0692-6.8555-6.8554 0-2.5531 1.3956-4.7802 3.4656-5.9601C6.4018 3.3123 3 6.9742 3 11.4307 3 16.1634 6.8366 20 11.5693 20c4.4563 0 8.1181-3.4014 8.5307-7.7496"
    />
  </svg>
);
const ForwardRef = forwardRef(MoonStar);
const Memo = memo(ForwardRef);
export default Memo;
