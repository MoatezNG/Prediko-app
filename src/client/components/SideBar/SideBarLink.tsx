import React from 'react';
import { Link } from 'react-router-dom';

interface SideBarLinkProps {
  Icon: JSX.Element;
  link: string;
}
const SideBarLink: React.FC<SideBarLinkProps> = ({ Icon, link }) => (
  <li className="nav-item">
    <Link
      to={link}
      className="nav-link py-3 "
      aria-current="page"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
    >
      {Icon}
    </Link>
  </li>
);

export default SideBarLink;
