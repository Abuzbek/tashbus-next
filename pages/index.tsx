import { useAppSelector } from "../app/hooks/reducer";
import { getAboutImages } from "../app/store/about/about.action";
import { selectAbout } from "../app/store/about/about.selector";
import { getAllMenu } from "../app/store/menu/menu.action";
import { selectMenu } from "../app/store/menu/menu.selector";
import { wrapper } from "../app/store/store";
import HomePage from "../components/pages/Home";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const dispatch = store.dispatch;
    const args = { locale: ctx.locale };
    await dispatch(getAllMenu(args));
    await dispatch(getAboutImages(args));
    return {
      props: {},
    };
  }
);

export default function Home() {
  const { menus } = useAppSelector(selectMenu);
  const { images } = useAppSelector(selectAbout);

  return <HomePage images={images} menus={menus} />;
}
