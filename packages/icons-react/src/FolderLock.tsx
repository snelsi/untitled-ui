import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FolderLock = (
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
      d="m12.9 6.6-1.004-2.008c-.2889-.5779-.4334-.8668-.649-1.078a1.8 1.8 0 0 0-.6725-.4156C10.2892 3 9.9662 3 9.3201 3H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 4.3678 3 4.872 3 5.88v.72m0 0h13.68c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 8.6517 21 9.4078 21 10.92v3.96c0 1.5121 0 2.2682-.2943 2.8458a2.7 2.7 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.7 2.7 0 0 1-1.18-1.1799C3 17.1482 3 16.3921 3 14.88zm7.29 9.45h3.42c.504 0 .7561 0 .9486-.0981a.9.9 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9.9 0 0 0-.3933-.3933c-.1925-.0981-.4446-.0981-.9486-.0981h-3.42c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.098.9486a.9.9 0 0 0 .3934.3933c.1925.0981.4445.0981.9486.0981m3.285-3.6v-1.575c0-.8698-.7052-1.575-1.575-1.575s-1.575.7052-1.575 1.575v1.575z"
    />
  </svg>
);
const ForwardRef = forwardRef(FolderLock);
const Memo = memo(ForwardRef);
export default Memo;
