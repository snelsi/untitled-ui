import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Mail04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="mail-04"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.5696 2.5586 6.7752 4.404c.2394.1555.3591.2333.4458.3371a.9.9 0 0 1 .1696.3126C21 7.7416 21 7.8843 21 8.17v6.5985c0 1.5122 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C3 17.0366 3 16.2806 3 14.7684V8.1699c0-.2855 0-.4283.0398-.5576a.9.9 0 0 1 .1696-.3126c.0867-.1037.2064-.1816.4458-.3372l6.7752-4.4039m3.1392 0c-.5682-.3692-.8522-.5539-1.1583-.6257a1.8 1.8 0 0 0-.8226 0c-.3061.0718-.5901.2565-1.1583.6257m3.1392 0 6.5017 4.2261c.3095.2012.4643.3018.5179.4294a.45.45 0 0 1 0 .3486c-.0536.1276-.2084.2282-.5179.4294l-6.5017 4.2261c-.5681.3693-.8522.5539-1.1583.6258a1.8 1.8 0 0 1-.8226 0c-.3061-.0719-.5901-.2565-1.1583-.6258L3.9287 7.9921c-.3095-.2012-.4643-.3018-.5179-.4294a.45.45 0 0 1 0-.3486c.0536-.1276.2084-.2282.518-.4294l6.5016-4.226"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail04);
const Memo = memo(ForwardRef);
export default Memo;
