/* eslint-disable max-len */
import { checkIfActive } from 'client/helpers/checkIfSideBarActive';
import * as React from 'react';

interface UserProps extends React.SVGProps<SVGSVGElement> {
  active: boolean;
}
const User = ({ active, ...props }: UserProps) => {
  const activeColor = checkIfActive(active);

  return (
    <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={48} height={48} rx={12} fill={activeColor.recfill} />
      <path
        d="M16.06 32.857a.583.583 0 11-1.145-.228l.454-2.273a4.083 4.083 0 013.658-3.27c1.327-.113 2.984-.17 4.973-.17 1.989 0 3.646.057 4.973.17a4.083 4.083 0 013.659 3.27l.453 2.273a.583.583 0 01-1.144.228l-.454-2.273a2.917 2.917 0 00-2.613-2.336c-1.29-.11-2.916-.165-4.874-.165-1.958 0-3.584.055-4.874.165a2.917 2.917 0 00-2.613 2.336l-.454 2.273zM20.5 20.5c0 1.93 1.569 3.5 3.5 3.5 1.93 0 3.5-1.569 3.5-3.5 0-1.93-1.569-3.5-3.5-3.5-1.93 0-3.5 1.569-3.5 3.5zm-1.167 0A4.67 4.67 0 0124 15.833a4.67 4.67 0 014.667 4.667A4.67 4.67 0 0124 25.167a4.67 4.67 0 01-4.667-4.667zm-7 3.5c0 6.444 5.223 11.667 11.667 11.667S35.667 30.444 35.667 24 30.444 12.333 24 12.333 12.333 17.556 12.333 24zm-1.166 0c0-7.088 5.744-12.833 12.833-12.833 7.088 0 12.833 5.744 12.833 12.833 0 7.088-5.744 12.833-12.833 12.833-7.088 0-12.833-5.744-12.833-12.833z"
        fill={activeColor.pathfill}
      />
    </svg>
  );
};

export default User;
