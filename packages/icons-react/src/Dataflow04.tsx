import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Dataflow04 = (
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
      d="M4.8 16.4v-.18c0-1.5121 0-2.2682.2943-2.8458a2.6998 2.6998 0 0 1 1.18-1.1799C6.8517 11.9 7.6078 11.9 9.12 11.9h5.76c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.1799.2943.5776.2943 1.3337.2943 2.8458v.18m-14.4 0c-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8Zm14.4 0c-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8Zm-7.2 0c-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8Zm0 0v-9m-5.4 0h10.8c.8387 0 1.258 0 1.5888-.137a1.8 1.8 0 0 0 .9742-.9742c.137-.3308.137-.7501.137-1.5888s0-1.258-.137-1.5888a1.8 1.8 0 0 0-.9742-.9742C18.658 2 18.2387 2 17.4 2H6.6c-.8387 0-1.258 0-1.5888.137a1.8 1.8 0 0 0-.9742.9742C3.9 3.442 3.9 3.8613 3.9 4.7s0 1.258.137 1.5888a1.8 1.8 0 0 0 .9742.9742C5.342 7.4 5.7613 7.4 6.6 7.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Dataflow04);
const Memo = memo(ForwardRef);
export default Memo;
