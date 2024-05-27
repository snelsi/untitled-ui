import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const MessageChatSquare = (
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
      d="m10.2 13.7-2.7677 2.8023c-.386.3909-.5791.5864-.745.6001a.45.45 0 0 1-.379-.1555C6.2 16.8205 6.2 16.5458 6.2 15.9964v-1.4039c0-.4929-.4036-.8496-.8913-.921v0a2.7 2.7 0 0 1-2.2802-2.2802C3 11.1967 3 10.9645 3 10.5V6.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 2 5.8078 2 7.32 2h6.66c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v3.78m0 9.9-1.9588-1.3618c-.2753-.1914-.413-.2872-.5628-.355a1.8 1.8 0 0 0-.4164-.1305c-.1617-.0298-.3294-.0298-.6648-.0298H13.08c-1.0081 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7867c-.1962-.385-.1962-.889-.1962-1.8971V12.98c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866c.3851-.1962.8891-.1962 1.8972-.1962h5.04c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 11.4679 21 11.9719 21 12.98v2.4429c0 .8387 0 1.258-.137 1.5888a1.8 1.8 0 0 1-.9742.9741c-.3308.1371-.7501.1371-1.5888.1371z"
    />
  </svg>
);
const ForwardRef = forwardRef(MessageChatSquare);
const Memo = memo(ForwardRef);
export default Memo;
