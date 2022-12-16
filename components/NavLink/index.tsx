import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  redirectHref?: string;
  exact?: boolean;
  children?: ReactNode;
  className?: string;
  props?: any;
  query?: string;
}

const NavLink = ({
  href,
  redirectHref,
  exact = false,
  children,
  className = '',
  query = '',
}: NavLinkProps) => {
  const { pathname } = useRouter();

  const hrefPath = redirectHref || href;

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      className={`nav-link ${isActive ? 'active' : ''}`}
      href={`${hrefPath}${query}`}
    >
      <div
        className={`${className} nav-link-content ${isActive ? 'active' : ''}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
