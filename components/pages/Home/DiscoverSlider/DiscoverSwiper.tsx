import Image from "next/image";
import React, { FC } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./DiscoverSlider.module.scss";
import { IAboutImages } from "../../../../app/models/about.interface";

interface Props {
  images: IAboutImages[];
}

const DiscoverSwiper: FC<Props> = ({ images }) => {
  const swiperOprions = {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    className: styles.swiper,
  };
  return (
    <>
      <Swiper {...swiperOprions}>
        {images.map((image, i) => (
          <SwiperSlide key={i} className="!h-[600px]">
            <Image
              src={image.photo.src}
              blurDataURL={image.photo?.base64}
              alt={image.photo.src}
              className={styles.swiper_slider_img}
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DiscoverSwiper;
