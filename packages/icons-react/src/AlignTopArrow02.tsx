import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const AlignTopArrow02 = (
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
      d="M10 18V6c0-.9319 0-1.3978-.1522-1.7654a2 2 0 0 0-1.0824-1.0824C8.3978 3 7.9319 3 7 3c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C4 4.6022 4 5.0681 4 6v12c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C5.6022 21 6.0681 21 7 21c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C10 19.3978 10 18.9319 10 18Zm10-4V6c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C18.3978 3 17.9319 3 17 3c-.9319 0-1.3978 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C14 4.6022 14 5.0681 14 6v8c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C15.6022 17 16.0681 17 17 17c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C20 15.3978 20 14.9319 20 14Z"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignTopArrow02);
const Memo = memo(ForwardRef);
export default Memo;
