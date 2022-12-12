import React, { FC } from "react";
import "swiper/css";
import styles from "./DiscoverSlider.module.scss";
import { IAboutImages } from "../../../../app/models/about.interface";
import DiscoverSwiper from "./DiscoverSwiper";
import DiscoverTitle from "./DiscoverTitle";

interface Props {
  images: IAboutImages[];
}

const DiscoverSlider: FC<Props> = ({ images }) => {
  return (
    <div className={styles.discover_slider}>
      <DiscoverSwiper images={images} />
      <DiscoverTitle/>
    </div>
  );
};

export default DiscoverSlider;
