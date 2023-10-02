import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Sale04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 8.3h.009m5.391 5.4h.009m.891-6.3-7.2 7.2m1.0817 4.1408c.295-.039.593.041.8279.222l1.083.831a.9946.9946 0 0 0 1.2128 0l1.124-.863a.9943.9943 0 0 1 .7369-.197l1.4059.185a.997.997 0 0 0 1.0509-.607l.5409-1.308a.9923.9923 0 0 1 .54-.5399l1.3079-.541a.9962.9962 0 0 0 .6069-1.051l-.1779-1.355a1.117 1.117 0 0 1 .2219-.8279l.831-1.083a.9952.9952 0 0 0 0-1.213l-.863-1.124a.995.995 0 0 1-.1969-.737l.1849-1.4059a.9969.9969 0 0 0-.6069-1.051l-1.3079-.541a.9928.9928 0 0 1-.54-.54l-.5409-1.3079a.9962.9962 0 0 0-1.0509-.607l-1.4059.185a.9895.9895 0 0 1-.7359-.195l-1.124-.863a.9946.9946 0 0 0-1.2128 0l-1.124.863c-.2099.16-.475.231-.7369.197l-1.4059-.185a.9969.9969 0 0 0-1.0509.607l-.54 1.308c-.102.244-.296.438-.5399.54l-1.3079.54a.997.997 0 0 0-.607 1.051l.185 1.4059a.9999.9999 0 0 1-.197.736l-.8629 1.1239a.995.995 0 0 0 0 1.213l.863 1.124a.9944.9944 0 0 1 .197.7369l-.185 1.406a.997.997 0 0 0 .607 1.051l1.3078.5409c.245.101.439.295.54.54l.541 1.308a.996.996 0 0 0 1.0508.607l1.354-.179ZM9.75 8.3a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm5.4 5.4a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Sale04);
const Memo = memo(ForwardRef);
export default Memo;
