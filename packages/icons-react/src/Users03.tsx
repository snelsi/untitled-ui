import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Users03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="users-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.4438 15.6275c1.3188.6625 2.4494 1.7256 3.2747 3.055.1634.2633.2451.3949.2734.5772.0574.3704-.1959.8258-.5409.9724-.1698.0721-.3608.0721-.7427.0721m-4.0761-8.5758c1.3422-.667 2.2645-2.052 2.2645-3.6523 0-1.6005-.9223-2.9854-2.2645-3.6524M13.8207 8.076c0 2.2511-1.8249 4.076-4.076 4.076-2.2512 0-4.0761-1.8249-4.0761-4.076S7.4935 4 9.7446 4c2.2512 0 4.0761 1.825 4.0761 4.076M3.4577 18.4368c1.4441-2.1683 3.723-3.5673 6.287-3.5673 2.5639 0 4.8427 1.399 6.2868 3.5673.3164.475.4745.7125.4563 1.0159-.0142.2362-.169.5254-.3578.6682-.2424.1833-.5758.1833-1.2426.1833H4.6019c-.6669 0-1.0003 0-1.2427-.1833-.1887-.1428-.3436-.432-.3578-.6682-.0182-.3034.14-.5409.4564-1.0159"
    />
  </svg>
);
const ForwardRef = forwardRef(Users03);
const Memo = memo(ForwardRef);
export default Memo;
