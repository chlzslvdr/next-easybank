import type { NextPage } from "next";
import ActiveLink from "@/components/ActiveLink";
import { HEADER_ROUTES } from "@/common/constants/header";
import styles from "@/styles/components/Layout/Header.module.scss";
import Logo from "@/icons/logo.svg";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        {HEADER_ROUTES.map((header: any) => {
          return (
            <ActiveLink
              key={header.label}
              href={header.path}
              activeClassName={styles.activeLink}
            >
              <a className={styles.link}>{header.label}</a>
            </ActiveLink>
          );
        })}
      </div>
      <button className={styles.button}>Request Invite</button>
    </header>
  );
};

export default Header;
