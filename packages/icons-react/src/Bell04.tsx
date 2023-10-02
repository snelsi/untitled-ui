import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Bell04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.391 18.015c.4288 1.6004-.5209 3.2454-2.1213 3.6743-1.6004.4288-3.2454-.521-3.6743-2.1214m2.2961-13.8268a2.492 2.492 0 0 0 .2296-1.8614c-.3574-1.3337-1.7282-2.1251-3.0619-1.7678-1.3337.3574-2.1251 1.7282-1.7678 3.0619A2.4917 2.4917 0 0 0 7.421 6.671m8.815 2.7745c-.3569-1.3321-1.3099-2.446-2.6491-3.0968-1.3393-.6507-2.9552-.785-4.4923-.373-1.537.4118-2.8694 1.336-3.7039 2.5692-.8345 1.2332-1.1028 2.6743-.7458 4.0065.5906 2.204.4759 3.9624.103 5.2985-.4251 1.5229-.6377 2.2843-.5802 2.4372.0656.1749.1132.223.2874.2905.1523.059.792-.1125 2.0716-.4553l11.8651-3.1792c1.2795-.3429 1.9193-.5143 2.0217-.6416.1171-.1456.1342-.2109.1037-.3952-.0267-.1612-.5915-.7143-1.7211-1.8206-.991-.9707-1.9695-2.4361-2.5601-4.6402Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bell04);
const Memo = memo(ForwardRef);
export default Memo;
