import type { NextPage } from 'next';
import Image from 'next/image';
import EasyBankLogo from '@/assets/images/logo.png';
import NavLink from '@/components/NavLink';
import HeaderDesktopMenu from './HeaderDesktopMenu';
import HeaderMobileMenu from './HeaderMobileMenu';

const Header: NextPage = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="header-logo">
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

        <HeaderDesktopMenu />
        <HeaderMobileMenu />
      </div>
    </header>
  );
};

export default Header;
