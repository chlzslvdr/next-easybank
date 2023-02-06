import type { NextPage } from 'next';
import NavLink from '@/components/NavLink';
import { HEADER_ROUTES } from '@/common/constants/header';

const HeaderDesktopMenu: NextPage = () => {
  return (
    <div className="header-desktop-menu">
      {HEADER_ROUTES.map(header => {
        return (
          <NavLink
            key={header.label}
            href={header.path}
            exact={true}
            className="header-menu-option"
          >
            {header.label}
          </NavLink>
        );
      })}

      <NavLink href="/" className="header-menu-option">
        <button className="header-menu-option-button">Request Invite</button>
      </NavLink>
    </div>
  );
};

export default HeaderDesktopMenu;
