import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const CheckVerified03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="check-verified-03"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.3 11 1.8 1.8 4.05-4.05m-5.6683 9.9908c.295-.039.593.041.8279.222l1.083.831a.9946.9946 0 0 0 1.2128 0l1.124-.863a.994.994 0 0 1 .7369-.197l1.4059.185a.997.997 0 0 0 1.0509-.607l.5409-1.308a.992.992 0 0 1 .54-.5399l1.3079-.541a.996.996 0 0 0 .6069-1.051l-.1779-1.355a1.117 1.117 0 0 1 .2219-.8279l.831-1.083a.995.995 0 0 0 0-1.213l-.863-1.124a.995.995 0 0 1-.1969-.737l.1849-1.4059a.997.997 0 0 0-.6069-1.051l-1.3079-.541a.993.993 0 0 1-.54-.54l-.5409-1.3079a.996.996 0 0 0-1.0509-.607l-1.4059.185a.99.99 0 0 1-.7359-.195l-1.124-.863a.9946.9946 0 0 0-1.2128 0l-1.124.863c-.2099.16-.475.231-.7369.197l-1.4059-.185a.997.997 0 0 0-1.0509.607l-.54 1.308c-.102.244-.296.438-.5399.54l-1.3079.54a.997.997 0 0 0-.607 1.051l.185 1.4059a1 1 0 0 1-.197.736l-.8629 1.1239a.995.995 0 0 0 0 1.213l.863 1.124a.994.994 0 0 1 .197.7369l-.185 1.406a.997.997 0 0 0 .607 1.051l1.3078.5409c.245.101.439.295.54.54l.541 1.308a.996.996 0 0 0 1.0508.607z"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckVerified03);
const Memo = memo(ForwardRef);
export default Memo;
