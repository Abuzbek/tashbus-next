import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Logo from "../../../../assets/images/nav-logo.svg";
interface Props {
  styles: any;
  locale: string | undefined;
  asPath: string;
}

const NavbarLogo: FC<Props> = ({ styles, locale, asPath }) => {
  return (
    <div className={styles.navbar_logo}>
      <Link href={`/${locale}`} as={asPath}>
        <Image src={Logo} className="max-w-full h-auto" alt="navbar-logo" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
