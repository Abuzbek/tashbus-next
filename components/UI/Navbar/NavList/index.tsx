import React, { FC } from "react";
import { IMenu } from "../../../../app/models/menu.interface";

import styles from "./NavList.module.scss";
import { Menu } from "@headlessui/react";
import ChevronDownIcon from "../../../Icons/ChevronDown";
import classNames from "classnames";
import BuildRecursiveMenuItems from "./BuildRecursiveMenuItem";
import Link from "next/link";
interface Props {
  menus: IMenu[];
}

export const href = ({ path, slug }: IMenu) => {
  if (path) {
    return { pathname: path };
  } else {
    return { pathname: slug };
  }
};

const NavList: FC<Props> = ({ menus }) => {
  return (
    <ul className={styles.nav_list}>
      {menus?.map((menu: IMenu) => (
        <li key={menu.slug}>
          <Menu className={styles.menu} as="div">
            {menu.children.length ? (
              <Menu.Button className={classNames(styles.menu_button, "group")}>
                <span>{menu.name}</span>
                <ChevronDownIcon
                  className={classNames(
                    styles.menu_icon,
                    "group-hover:rotate-180"
                  )}
                />
              </Menu.Button>
            ) : (
              <Link href={href(menu)}>
                <span>{menu.name}</span>
              </Link>
            )}
            <Menu.Items as="ul" className={styles.menu_items}>
              <BuildRecursiveMenuItems menus={menu.children} />
            </Menu.Items>
          </Menu>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
