/* eslint-disable max-len */
import * as React from 'react';

const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={38} height={38} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={19} cy={19} r={19} transform="rotate(-180 19 19)" fill="#DBA97C" />
    <path
      d="M11.326 19.475c.008.01.017.018.027.027l6.508 6.287a.463.463 0 010 .672.506.506 0 01-.697 0l-6.509-6.288a1.631 1.631 0 01-.496-1.022.458.458 0 010-.3c.034-.375.2-.741.497-1.028l6.518-6.284a.506.506 0 01.697 0 .463.463 0 010 .672l-6.518 6.284a.76.76 0 00-.03.03h16.051c.272 0 .493.213.493.475s-.22.475-.493.475H11.326z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.267}
    />
  </svg>
);

export default Arrow;
