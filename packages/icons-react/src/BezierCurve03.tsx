import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const BezierCurve03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="m10.9714 6.6-5.1428 9M6.6 17.4h10.7998m.7716-1.8-5.1428-9M4.44 19.2h.72c.504 0 .756 0 .9486-.0981a.9.9 0 0 0 .3933-.3933C6.6 18.5161 6.6 18.264 6.6 17.76v-.72c0-.504 0-.7561-.098-.9486a.9.9 0 0 0-.3934-.3933C5.916 15.6 5.664 15.6 5.16 15.6h-.72c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 16.2839 3 16.536 3 17.04v.72c0 .504 0 .7561.098.9486a.9.9 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981m14.4 0h.72c.504 0 .7561 0 .9486-.0981a.9.9 0 0 0 .3933-.3933C21 18.5161 21 18.264 21 17.76v-.72c0-.504 0-.7561-.0981-.9486a.9.9 0 0 0-.3933-.3933C20.3161 15.6 20.064 15.6 19.56 15.6h-.72c-.504 0-.7561 0-.9486.0981a.9.9 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9.9 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981m-7.2-12.6h.72c.504 0 .7561 0 .9486-.098a.9.9 0 0 0 .3933-.3934C13.8 5.916 13.8 5.664 13.8 5.16v-.72c0-.504 0-.756-.0981-.9486a.9.9 0 0 0-.3933-.3933C13.1161 3 12.864 3 12.36 3h-.72c-.504 0-.7561 0-.9486.098a.9.9 0 0 0-.3933.3934C10.2 3.684 10.2 3.936 10.2 4.44v.72c0 .504 0 .756.0981.9486a.9.9 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981"
    />
  </svg>
);
const ForwardRef = forwardRef(BezierCurve03);
const Memo = memo(ForwardRef);
export default Memo;
