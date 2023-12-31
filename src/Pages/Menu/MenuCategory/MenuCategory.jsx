import React from "react";
import MenuItem from "../../Shered/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ menuItem }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-10 my-10">
        {menuItem?.map((item) => (
          <MenuItem key={item._id} menu={item}></MenuItem>
        ))}
      </div>

      <div>
        <Link to={"/order"}>
          {" "}
          <button className="btn btn-outline border-0 border-b-4 border-black text-black uppercase">
            order your favorite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
