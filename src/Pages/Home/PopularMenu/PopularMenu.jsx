import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shered/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menuData, setMenuData] = useState();
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenuData(popularData);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10 mb-20">
        {menuData?.map((item) => (
          <MenuItem key={item._id} menu={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
