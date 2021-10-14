import GroupUsers from 'client/svg/GroupUsers';
import Logo from 'client/svg/Logo';
import LogOut from 'client/svg/LogOut';
import Settings from 'client/svg/Settings';
import User from 'client/svg/User';
import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBarLink from './SideBarLink';

const SideBar: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="d-flex row m-0 p-0">
      <div
        className="position-fixed  d-flex flex-column vh-100 align-items-center flex-shrink-0 bg-light "
        style={{ width: '6.25rem' }}
      >
        <a href="/" className="py-4 pe-2 ps-2">
          <Logo />
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto ">
          <SideBarLink link="/group" Icon={<GroupUsers active={pathname === '/group'} />} />
          <SideBarLink link="/user" Icon={<User active={pathname === '/user'} />} />
          <SideBarLink
            link="/settings"
            Icon={<Settings active={pathname === '/settings'} />}
          />
        </ul>
        <div>
          <div className="d-flex align-items-center justify-content-center p-3 link-dark ">
            <LogOut />
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '8rem' }}>{children}</div>
    </div>
  );
};
export default SideBar;
