import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Pin01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="pin-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.3085 14.7V21m-3.6-13.2227V9.695c0 .1872 0 .2808-.0184.3703a.9.9 0 0 1-.0801.2286c-.0416.0813-.1001.1544-.217.3006L5.98 12.3604c-.5991.749-.8987 1.1235-.899 1.4386a.9.9 0 0 0 .3385.7044c.2463.1966.7259.1966 1.685.1966h8.4078c.9591 0 1.4387 0 1.685-.1966a.9.9 0 0 0 .3385-.7044c-.0003-.3151-.2999-.6896-.8991-1.4386l-1.4128-1.766c-.1169-.1462-.1754-.2193-.217-.3006a.9.9 0 0 1-.0801-.2286c-.0184-.0895-.0184-.1831-.0184-.3703V7.7773c0-.1036 0-.1554.0059-.2065a.9.9 0 0 1 .0258-.1344c.0136-.0496.0328-.0977.0713-.1939l.9071-2.2677c.2646-.6616.3969-.9924.3417-1.258a.9.9 0 0 0-.3839-.567C15.6504 3 15.2941 3 14.5816 3H8.0354c-.7125 0-1.0688 0-1.2948.1498a.9.9 0 0 0-.384.567c-.0551.2656.0772.5964.3418 1.258l.9071 2.2677c.0385.0962.0577.1443.0713.194a.9.9 0 0 1 .0258.1343c.0059.0511.0059.103.0059.2065"
    />
  </svg>
);
const ForwardRef = forwardRef(Pin01);
const Memo = memo(ForwardRef);
export default Memo;
