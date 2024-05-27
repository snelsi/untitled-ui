import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const HeartOctagon = (
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
      d="M7.8522 3.4218c.1557-.1557.2335-.2335.3243-.2892a.9.9 0 0 1 .2602-.1077C8.5403 3 8.6503 3 8.8705 3h6.259c.2202 0 .3302 0 .4338.0249a.9.9 0 0 1 .2602.1077c.0908.0557.1686.1335.3243.2892l4.4304 4.4304c.1557.1557.2335.2335.2892.3243a.9.9 0 0 1 .1077.2602C21 8.5403 21 8.6503 21 8.8705v6.259c0 .2202 0 .3302-.0249.4338a.9.9 0 0 1-.1077.2602c-.0557.0908-.1335.1686-.2892.3243l-4.4304 4.4304c-.1557.1557-.2335.2335-.3243.2892a.9.9 0 0 1-.2602.1077C15.4597 21 15.3497 21 15.1295 21h-6.259c-.2202 0-.3302 0-.4338-.0249a.9.9 0 0 1-.2602-.1077c-.0908-.0557-.1686-.1335-.3243-.2892l-4.4304-4.4304c-.1557-.1557-.2335-.2335-.2892-.3243a.9.9 0 0 1-.1077-.2602C3 15.4597 3 15.3497 3 15.1295v-6.259c0-.2202 0-.3302.0249-.4338a.9.9 0 0 1 .1077-.2602c.0557-.0908.1335-.1686.2892-.3243z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.9969 9.3611c-.8997-1.0518-2.4-1.3348-3.5273-.3716s-1.286 2.5735-.4007 3.7127c.567.7296 2.0191 2.0826 2.9899 2.9611.3226.292.4839.4379.6771.4965a.92.92 0 0 0 .522 0c.1932-.0586.3545-.2045.6771-.4965.9708-.8785 2.4229-2.2315 2.9899-2.9611.8853-1.1392.746-2.7597-.4007-3.7127s-2.6276-.6802-3.5273.3716"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(HeartOctagon);
const Memo = memo(ForwardRef);
export default Memo;
