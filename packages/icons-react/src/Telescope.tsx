import * as React from 'react';
import { SVGProps } from 'react';
const Telescope = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.1218 14.8446 4.8786 7.1553m-7.1214-7.1553-4.8786 7.1553m8-8.7999c0 1.1045-.8954 2-2 2s-2-.8955-2-2c0-1.1046.8954-2 2-2s2 .8954 2 2Zm3.1485-8.6677L5.3646 7.6898c-.2705.0725-.4057.1087-.495.189a.5.5 0 0 0-.1544.2677c-.025.1174.0113.2527.0837.5231l.88 3.2842c.0725.2705.1087.4057.189.4949a.4994.4994 0 0 0 .2677.1545c.1174.025.2526-.0113.5231-.0837L18.443 9.3619l-1.2941-4.8296Zm4.6439 4.9673c-1.0819.2899-1.6229.4348-2.0926.335a1.9999 1.9999 0 0 1-1.0704-.618c-.3213-.3568-.4663-.8978-.7562-1.9798l-.1553-.5795c-.2899-1.082-.4348-1.623-.335-2.0926a2.0003 2.0003 0 0 1 .618-1.0705c.3569-.3212.8978-.4662 1.9798-.7561.2704-.0725.4057-.1087.5231-.0838.1033.022.197.076.2676.1545.0803.0893.1166.2245.1891.495l1.3976 5.216c.0725.2705.1087.4057.0837.5231a.4995.4995 0 0 1-.1545.2676c-.0892.0804-.2244.1166-.4949.189ZM3.5021 12.33l1.3523-.3623c.2705-.0725.4057-.1088.495-.1891a.4997.4997 0 0 0 .1545-.2676c.025-.1174-.0113-.2527-.0838-.5231l-.3623-1.3523c-.0725-.2705-.1088-.4058-.189-.495a.5.5 0 0 0-.2677-.1545c-.1174-.025-.2527.0113-.5231.0838l-1.3523.3623c-.2705.0725-.4058.1087-.495.189a.5.5 0 0 0-.1545.2677c-.025.1174.0113.2526.0838.5231l.3623 1.3523c.0725.2705.1087.4057.189.4949a.5002.5002 0 0 0 .2677.1546c.1174.0249.2526-.0113.5231-.0838Z"
    />
  </svg>
);
export default Telescope;
