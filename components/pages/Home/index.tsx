import { useRouter } from "next/router";
import React, { FC } from "react";
import $api from "../../../app/api/axios";
import Layout from "../../layout/Layout";
import { IHome } from "../../../app/models/pages/home.interface";

const HomePage: FC<IHome> = ({ menus }) => {
  return <Layout title="Asosiy" menus={menus}></Layout>;
};

export default HomePage;
