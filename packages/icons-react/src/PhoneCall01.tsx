import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PhoneCall01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="phone-call-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.0497 6a5 5 0 0 1 3.95 3.95M14.0497 2a9 9 0 0 1 7.95 7.94m-11.7731 3.9231c-1.2015-1.2016-2.1503-2.5603-2.8463-4.0099-.0599-.1247-.0898-.187-.1128-.2659-.0817-.2804-.023-.6246.147-.862.0478-.0669.105-.124.2193-.2383.3496-.3496.5244-.5244.6387-.7002a2 2 0 0 0 0-2.1804c-.1143-.1757-.2891-.3506-.6387-.7002l-.1949-.1948c-.5314-.5315-.7972-.7972-1.0825-.9415a2 2 0 0 0-1.8054 0c-.2854.1443-.5511.41-1.0826.9415l-.1576.1576c-.5296.5296-.7944.7944-.9967 1.1545-.2244.3995-.3858 1.02-.3844 1.4782.0012.413.0813.6952.2415 1.2596.861 3.0334 2.4855 5.8958 4.8735 8.2837 2.388 2.388 5.2503 4.0125 8.2837 4.8735.5644.1602.8467.2403 1.2596.2415.4582.0014 1.0787-.16 1.4782-.3844.3601-.2023.6249-.4671 1.1545-.9967l.1576-.1576c.5315-.5315.7972-.7972.9415-1.0826a2 2 0 0 0 0-1.8054c-.1443-.2853-.41-.5511-.9415-1.0825l-.1948-.1949c-.3496-.3496-.5244-.5244-.7002-.6387a2 2 0 0 0-2.1804 0c-.1758.1143-.3506.2891-.7002.6387-.1143.1143-.1714.1715-.2383.2193-.2374.1701-.5816.2288-.862.147-.0789-.023-.1412-.0529-.2659-.1128-1.4496-.696-2.8083-1.6448-4.0099-2.8463"
    />
  </svg>
);
const ForwardRef = forwardRef(PhoneCall01);
const Memo = memo(ForwardRef);
export default Memo;
