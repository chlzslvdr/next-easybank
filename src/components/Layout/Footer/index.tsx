import type { NextPage } from "next";
import styles from "@/styles/components/Layout/Footer.module.scss";
import WhiteLogo from "@/icons/logo-white.svg";
import FACEBOOK_LOGO from "@/icons/icon-facebook.svg";
import YOUTUBE_LOGO from "@/icons/icon-youtube.svg";
import TWITTER_LOGO from "@/icons/icon-twitter.svg";
import PINTEREST_LOGO from "@/icons/icon-pinterest.svg";
import INSTAGRAM_LOGO from "@/icons/icon-instagram.svg";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <WhiteLogo />
        <div className={styles.socialMediaBlock}>
          <FACEBOOK_LOGO />
          <YOUTUBE_LOGO />
          <TWITTER_LOGO />
          <PINTEREST_LOGO />
          <INSTAGRAM_LOGO />
        </div>
      </div>

      <div className={styles.menu}>
        <span className={styles.label}>About Us</span>
        <span className={styles.label}>Contact</span>
        <span className={styles.label}>Blog</span>
        <span className={styles.label}>Careers</span>
        <span className={styles.label}>Support</span>
        <span className={styles.label}>Privacy Policy</span>
      </div>

      <div className={styles.copyright}>
        <button className={styles.button}>Request Invite</button>
        <div className={styles.label}>
          &copy; 2022 Easybank. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
