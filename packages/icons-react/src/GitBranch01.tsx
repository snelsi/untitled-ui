import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const GitBranch01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="git-branch-01"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3v10.2c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 18 6.1198 18 7.8 18H15m0 0c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3-3 1.3431-3 3M3 8h12m0 0c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3-3 1.3431-3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(GitBranch01);
const Memo = memo(ForwardRef);
export default Memo;
