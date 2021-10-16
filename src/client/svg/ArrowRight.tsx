/* eslint-disable max-len */
import * as React from 'react';

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={12} r={12} fill="#DBA97C" />
    <path
      d="M16.847 11.7a.39.39 0 00-.017-.017l-4.11-3.971a.292.292 0 010-.424.32.32 0 01.44 0l4.11 3.97c.187.182.292.411.314.647a.29.29 0 010 .19 1.03 1.03 0 01-.314.648l-4.117 3.97a.32.32 0 01-.44 0 .292.292 0 010-.425l4.117-3.969a.475.475 0 00.018-.019H6.711A.306.306 0 016.4 12c0-.166.14-.3.311-.3h10.136z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.8}
    />
  </svg>
);

export default ArrowRight;
