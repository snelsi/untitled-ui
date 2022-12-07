import * as React from 'react';
import { SVGProps } from 'react';
const Printer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M6.6 15.68c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C7.9678 12.8 8.472 12.8 9.48 12.8h5.04c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.3851.1962.8891.1962 1.8972v1.44c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C16.0321 20 15.5281 20 14.52 20H9.48c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C6.6 18.6321 6.6 18.1281 6.6 17.12v-1.44Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.4 6.5V4.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.0321 2 15.5281 2 14.52 2H9.48c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C6.6 3.3678 6.6 3.872 6.6 4.88V6.5m0 9.9c-.837 0-1.2555 0-1.5988-.092a2.7 2.7 0 0 1-1.9092-1.9092C3 14.0555 3 13.637 3 12.8v-1.98c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 6.5 5.8078 6.5 7.32 6.5h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 8.5517 21 9.3078 21 10.82v1.98c0 .837 0 1.2555-.092 1.5988a2.7 2.7 0 0 1-1.9092 1.9092c-.3433.092-.7618.092-1.5988.092m-2.7-6.75h2.7M9.48 20h5.04c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-1.44c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.0321 12.8 15.5281 12.8 14.52 12.8H9.48c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C6.6 14.1679 6.6 14.6719 6.6 15.68v1.44c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C7.9678 20 8.472 20 9.48 20Z"
    />
  </svg>
);
export default Printer;
