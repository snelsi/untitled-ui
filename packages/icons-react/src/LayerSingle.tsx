import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const LayerSingle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="layer-single"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.322 7.167c-.1181-.059-.1771-.0886-.239-.1002a.45.45 0 0 0-.166 0c-.0619.0116-.1209.0411-.239.1002L3 11.506l8.678 4.339c.1181.059.1771.0885.239.1001a.45.45 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 11.506z"
    />
  </svg>
);
const ForwardRef = forwardRef(LayerSingle);
const Memo = memo(ForwardRef);
export default Memo;
