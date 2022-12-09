import { useAppSelector } from "../app/hooks/reducer";
import { getAllMenu } from "../app/store/menu/menu.action";
import { selectMenu } from "../app/store/menu/menu.selector";
import { wrapper } from "../app/store/store";
import HomePage from "../components/pages/Home";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const dispatch = store.dispatch;

    await dispatch(getAllMenu({ locale: ctx.locale }));
    
    return {
      props: {},
    };
  }
);

export default function Home() {
  const { menus } = useAppSelector(selectMenu);
  
  return <HomePage menus={menus} />;
}
