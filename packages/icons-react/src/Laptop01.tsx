import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Laptop01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.9 14.8V6.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C5.2678 4 5.772 4 6.78 4h10.44c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972v7.92h-4.8035c-.2202 0-.3302 0-.4338.0249a.9.9 0 0 0-.2602.1077c-.0908.0557-.1686.1335-.3243.2892l-.0564.0564c-.1557.1557-.2335.2335-.3243.2892a.9.9 0 0 1-.2602.1077c-.1036.0249-.2136.0249-.4338.0249h-2.407c-.2202 0-.3302 0-.4338-.0249a.9.9 0 0 1-.2602-.1077c-.0908-.0557-.1686-.1335-.3243-.2892l-.0564-.0564c-.1557-.1557-.2335-.2335-.3243-.2892a.9.9 0 0 0-.2602-.1077C9.0337 14.8 8.9237 14.8 8.7035 14.8zm0 0a.9.9 0 0 0-.9.9v.3c0 .558 0 .837.0613 1.0659a1.8 1.8 0 0 0 1.2728 1.2728c.229.0613.508.0613 1.0659.0613h13.2c.558 0 .837 0 1.0659-.0613a1.8 1.8 0 0 0 1.2728-1.2728C21 16.837 21 16.558 21 16c0-.279 0-.4185-.0307-.5329a.9.9 0 0 0-.6364-.6364C20.2185 14.8 20.079 14.8 19.8 14.8h-.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Laptop01);
const Memo = memo(ForwardRef);
export default Memo;
