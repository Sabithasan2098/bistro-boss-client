import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shered/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menuData] = useMenu();
  const popularData = menuData?.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10 mb-20">
        {popularData?.map((item) => (
          <MenuItem key={item._id} menu={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
