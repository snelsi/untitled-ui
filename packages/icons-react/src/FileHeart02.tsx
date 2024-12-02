import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const FileHeart02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="file-heart-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.4 10.2V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.7 2.7 0 0 0-1.1799-1.18C16.3482 3 15.5921 3 14.08 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21h2.88m.45-9.9H7.6m.9 3.6h-.9m7.2-7.2H7.6m8.0975 7.0475c-.7197-.8181-1.92-1.0381-2.8218-.289s-1.0288 2.0016-.3206 2.8876S15.6975 20.1 15.6975 20.1s2.4343-2.0679 3.1425-2.9539.5967-2.1463-.3206-2.8876-2.1021-.5291-2.8219.289"
    />
  </svg>
);
const ForwardRef = forwardRef(FileHeart02);
const Memo = memo(ForwardRef);
export default Memo;
