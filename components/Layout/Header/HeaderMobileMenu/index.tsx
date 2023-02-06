import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import NavLink from '@/components/NavLink';
import { HEADER_ROUTES } from '@/common/constants/header';
import EasyBankLogo from '@/assets/images/logo.png';

const HeaderMobileMenu: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleMenuClick = () => {
    setIsChecked(false);
  };

  return (
    <div className="header-mobile-menu">
      <div className="hamburger-menu-container">
        <input
          type="checkbox"
          className="toggler"
          checked={isChecked}
          onClick={handleCheckboxClick}
        />
        <div className="hamburger-icon">
          <div></div>
        </div>
        <div onClick={handleMenuClick} className="menu">
          <div className="menu-flex-container">
            <div className="menu-logo-container">
              <div className="menu-logo">
                <NavLink exact={true} href="/">
                  <Image
                    src={EasyBankLogo}
                    alt="EasyBank"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </NavLink>
              </div>
            </div>

            <ul className="menu-list">
              {HEADER_ROUTES.map(header => {
                return (
                  <li key={header.label} className="menu-item">
                    <NavLink
                      exact={true}
                      href={header.path}
                      className="menu-label"
                    >
                      {header.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
