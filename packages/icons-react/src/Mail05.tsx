import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const Mail05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m13.5696 2.5588 6.7752 4.4039c.2394.1556.3591.2334.4458.3372a.898.898 0 0 1 .1696.3125C21 7.7417 21 7.8844 21 8.17v6.5985c0 1.5122 0 2.2683-.2943 2.8458a2.6998 2.6998 0 0 1-1.1799 1.18c-.5776.2942-1.3337.2942-2.8458.2942H7.32c-1.5121 0-2.2682 0-2.8458-.2942a2.7 2.7 0 0 1-1.18-1.18C3 17.0368 3 16.2807 3 14.7685V8.17c0-.2855 0-.4283.0398-.5576A.9.9 0 0 1 3.2094 7.3c.0867-.1038.2064-.1816.4458-.3373l6.7752-4.4038m3.1392 0c-.5682-.3693-.8522-.554-1.1583-.6258a1.7999 1.7999 0 0 0-.8226 0c-.3061.0718-.5901.2565-1.1583.6258m3.1392 0 5.5729 3.6224c.6191.4024.9286.6036 1.0358.8587a.8999.8999 0 0 1 0 .6973c-.1072.2551-.4167.4563-1.0358.8587l-5.5729 3.6224c-.5681.3693-.8522.5539-1.1583.6258a1.7999 1.7999 0 0 1-.8226 0c-.3061-.0719-.5901-.2565-1.1583-.6258L4.8574 8.596c-.619-.4024-.9285-.6036-1.0357-.8587a.9.9 0 0 1 0-.6973c.1072-.2551.4167-.4563 1.0358-.8587l5.5729-3.6224M20.55 17.2885l-5.9785-5.4m-5.143 0-5.9785 5.4"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail05);
const Memo = memo(ForwardRef);
export default Memo;
