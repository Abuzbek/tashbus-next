import React, { FC } from "react";
import { IMenu } from "../../../../app/models/menu.interface";

import styles from "./NavList.module.scss";
import { Menu } from "@headlessui/react";
import ChevronDownIcon from "../../../Icons/ChevronDown";
import classNames from "classnames";
import Link from "next/link";
import { href } from ".";

interface Props {
  menus: IMenu[];
}

const BuildRecursiveMenuItems: FC<Props> = ({ menus }) => {
  return (
    <>
      {menus?.map((menuItem: IMenu) =>
        menuItem.children.length ? (
          <Menu key={menuItem.slug}>
            <Menu.Item as="li" className={styles.menu_item}>
              <Menu.Button>
                <span>{menuItem.name}</span>
                <ChevronDownIcon
                  className={classNames(
                    styles.menu_icon,
                    "group-hover:rotate-180"
                  )}
                />
              </Menu.Button>
            </Menu.Item>
            <Menu.Items>
              <BuildRecursiveMenuItems menus={menuItem.children} />
            </Menu.Items>
          </Menu>
        ) : (
          <Menu.Item key={menuItem.slug} as="li" className={styles.menu_item}>
            <Link href={href(menuItem)}>
              <span>{menuItem.name}</span>
            </Link>
          </Menu.Item>
        )
      )}
    </>
  );
};

export default BuildRecursiveMenuItems;
