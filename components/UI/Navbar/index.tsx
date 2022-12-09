import React, { FC, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import styles from "./Navbar.module.scss";
import LocaleSwitcher from "../LocaleSwitcher";

import SearchDialog from "./SearchDialog";
import NavbarLogo from "./NavbarLogo";
import SearchButton from "./SearchButton";
import NavList from "./NavList";
import { IMenu } from "../../../app/models/menu.interface";

interface Props {
  menus: IMenu[];
}

const Navbar: FC<Props> = ({ menus }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { locale, asPath } = router;
  const { t } = useTranslation("common");

  const toggleDialog = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <header className={styles.navbar}>
        <NavbarLogo styles={styles} asPath={asPath} locale={locale} />
        <NavList menus={menus} />
        <div className={styles.navbar_utils}>
          <SearchButton styles={styles} toggleDialog={toggleDialog} />
          <LocaleSwitcher />
        </div>
      </header>
      <SearchDialog show={show} toggleDialog={toggleDialog} />
    </div>
  );
};

export default Navbar;
