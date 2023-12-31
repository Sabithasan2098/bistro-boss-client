import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shered/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCart from "../../Shered/FoodCart/FoodCart";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menuData] = useMenu();
  const dessert = menuData?.filter((item) => item.category === "dessert");
  const salad = menuData?.filter((item) => item.category === "salad");
  const soup = menuData?.filter((item) => item.category === "soup");
  const pizza = menuData?.filter((item) => item.category === "pizza");
  const drinks = menuData?.filter((item) => item.category === "drinks");
  return (
    <div className="my-20">
      <Helmet>
        <title>Bistro Boss || order food</title>
      </Helmet>
      <Cover img={orderImg} title={"Order here"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>SOUP</Tab>
          <Tab>DRINK</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5">
            {salad?.map((item) => (
              <FoodCart key={item._id} cartData={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5">
            {pizza?.map((item) => (
              <FoodCart key={item._id} cartData={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5">
            {dessert?.map((item) => (
              <FoodCart key={item._id} cartData={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5">
            {soup?.map((item) => (
              <FoodCart key={item._id} cartData={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5">
            {drinks?.map((item) => (
              <FoodCart key={item._id} cartData={item}></FoodCart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
