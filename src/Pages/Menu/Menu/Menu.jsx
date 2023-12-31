import { Helmet } from "react-helmet-async";
import Cover from "../../Shered/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
    </div>
  );
};

export default Menu;
