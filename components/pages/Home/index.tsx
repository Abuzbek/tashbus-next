import React, { FC } from "react";
import Layout from "../../layout/Layout";
import { IHome } from "../../../app/models/pages/home.interface";
import DiscoverSlider from "./DiscoverSlider";

const HomePage: FC<IHome> = ({ menus, images }) => {
  return (
    <Layout title="Asosiy" menus={menus}>
      <div className="container">
        <DiscoverSlider images={images} />
      </div>
    </Layout>
  );
};

export default HomePage;
