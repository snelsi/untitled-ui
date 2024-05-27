import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Dataflow02 = (
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
      d="M11.1 4.8v10.08c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.1799 1.1799.5776.2943 1.3337.2943 2.8458.2943h.18m0 0c0 .9941.8059 1.8 1.8 1.8s1.8-.8059 1.8-1.8-.8059-1.8-1.8-1.8-1.8.8059-1.8 1.8m-9-14.4h9m-9 0c0 .9941-.8059 1.8-1.8 1.8S3 5.7941 3 4.8 3.8059 3 4.8 3s1.8.8059 1.8 1.8m9 0c0 .9941.8059 1.8 1.8 1.8s1.8-.8059 1.8-1.8S18.3941 3 17.4 3s-1.8.8059-1.8 1.8M11.1 12h4.5m0 0c0 .9941.8059 1.8 1.8 1.8s1.8-.8059 1.8-1.8-.8059-1.8-1.8-1.8-1.8.8059-1.8 1.8"
    />
  </svg>
);
const ForwardRef = forwardRef(Dataflow02);
const Memo = memo(ForwardRef);
export default Memo;
