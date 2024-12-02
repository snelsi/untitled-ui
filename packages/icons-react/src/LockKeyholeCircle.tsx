import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const LockKeyholeCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="lock-keyhole-circle"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5584 12.0752c-.0635-.1905-.0952-.2857-.0936-.3636.0018-.0819.0127-.1249.0504-.1976.0359-.0692.1318-.1585.3237-.337.5297-.4929.8611-1.1963.8611-1.977 0-1.4912-1.2088-2.7-2.7-2.7S9.3 7.7088 9.3 9.2c0 .7807.3314 1.4841.8611 1.977.1919.1785.2878.2678.3237.337.0377.0727.0486.1157.0504.1976.0016.0779-.0301.1731-.0936.3636l-.8257 2.4771c-.1067.32-.16.48-.128.6073a.45.45 0 0 0 .1944.2698c.1107.0706.2794.0706.6166.0706h3.4022c.3372 0 .5059 0 .6165-.0706a.45.45 0 0 0 .1945-.2698c.032-.1273-.0213-.2873-.128-.6073z"
    />
  </svg>
);
const ForwardRef = forwardRef(LockKeyholeCircle);
const Memo = memo(ForwardRef);
export default Memo;
