import Link from "next/link";
import React, { FC } from "react";
import useTranslation from "next-translate/useTranslation";

import styles from "./DiscoverSlider.module.scss";

interface Props {}

const DiscoverTitle: FC<Props> = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.discover_title}>
      <div className={styles.discover_title_inner}>
        <h1>{t("home-title")}</h1>
        <Link href="#" className="button-more">
          {t("more")}
        </Link>
      </div>
    </div>
  );
};

export default DiscoverTitle;
