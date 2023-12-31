import { Helmet } from "react-helmet-async";
import Cover from "../../Shered/Cover/Cover";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import saladCover from "../../../assets/menu/salad-bg.jpg";
import soupCover from "../../../assets/menu/soup-bg.jpg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menuData] = useMenu();
  const dessert = menuData?.filter((item) => item.category === "dessert");
  const salad = menuData?.filter((item) => item.category === "salad");
  const soup = menuData?.filter((item) => item.category === "soup");
  const pizza = menuData?.filter((item) => item.category === "pizza");
  const offered = menuData?.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      {/* offered */}
      <div className="my-20">
        <SectionTitle
          heading={"Today's offer"}
          subHeading={"don't miss "}
        ></SectionTitle>
        <MenuCategory menuItem={offered}></MenuCategory>
      </div>
      {/* dessert */}
      <div className="mb-20">
        <Cover img={dessertCover} title={"desserts"}></Cover>
        <MenuCategory menuItem={dessert}></MenuCategory>
      </div>
      {/* salad */}
      <div className="mb-20">
        <Cover img={saladCover} title={"salad"}></Cover>
        <MenuCategory menuItem={salad}></MenuCategory>
      </div>
      {/* soup */}
      <div className="mb-20">
        <Cover img={soupCover} title={"soup"}></Cover>
        <MenuCategory menuItem={soup}></MenuCategory>
      </div>
      {/* pizza */}
      <div className="mb-20">
        <Cover img={pizzaCover} title={"pizza"}></Cover>
        <MenuCategory menuItem={pizza}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
