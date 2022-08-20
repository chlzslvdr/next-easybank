import type { NextPage } from "next";
import Link from "next/link";
import { HEADER_ROUTES } from "@/common/constants/header";
import styles from "@/styles/Components/Header.module.scss";
import Logo from "@/icons/logo.svg";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        {HEADER_ROUTES.map((header: any) => {
          return (
            <Link key={header.label} href={header.path}>
              <a className={styles.link}>{header.label}</a>
            </Link>
          );
        })}
      </div>
      <button className={styles.button}>Request Invite</button>
    </header>
  );
};

export default Header;
