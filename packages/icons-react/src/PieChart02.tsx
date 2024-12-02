import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const PieChart02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    name="pie-chart-02"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.2 14c.277 0 .4155 0 .5278.0615.0926.0507.1787.146.22.2432.05.1178.0374.2432.0122.494a8 8 0 0 1-4.8985 6.5923A8 8 0 1 1 9.2013 6.04c.2508-.0252.3762-.0378.494.0122.0972.0412.1925.1274.2432.22C10 6.3845 10 6.523 10 6.8v6.4c0 .28 0 .42.0545.527a.5.5 0 0 0 .2185.2185C10.38 14 10.52 14 10.8 14zM14 2.8c0-.277 0-.4155.0615-.5278.0507-.0926.146-.1788.2432-.22.1178-.05.2432-.0374.494-.0123a8.0004 8.0004 0 0 1 7.1614 7.1614c.0251.2508.0377.3761-.0123.494-.0412.0972-.1274.1924-.22.2432C21.6155 10 21.477 10 21.2 10h-6.4c-.28 0-.42 0-.527-.0545a.5.5 0 0 1-.2185-.2185C14 9.62 14 9.48 14 9.2z"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart02);
const Memo = memo(ForwardRef);
export default Memo;
