import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cheaf from "../../../assets/home/chef-special.jpg";

const Category = () => {
  return (
    <>
      <div className="my-10">
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="text-center uppercase text-2xl font-semibold -mt-16 text-white shadow-inner">
              <span className="text-3xl">S</span>alads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />{" "}
            <h3 className="text-center uppercase text-2xl font-semibold -mt-16 text-white shadow-inner">
              <span className="text-3xl">S</span>oups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="text-center uppercase text-2xl font-semibold -mt-16 text-white shadow-inner">
              <span className="text-3xl">P</span>izzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="text-center uppercase text-2xl font-semibold -mt-16 text-white shadow-inner">
              <span className="text-3xl">D</span>esserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="text-center uppercase text-2xl font-semibold -mt-16 text-white shadow-inner">
              <span className="text-3xl">D</span>rinks
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-20 relative">
        <img className="" src={cheaf} alt="" />
        <div className="bg-white px-14 py-10 max-w-4xl text-center mx-auto  absolute left-44 bottom-28">
          <h1 className="text-3xl mb-5">Bistro Boss</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            rerum accusantium unde fugiat suscipit, quia amet doloremque
            incidunt recusandae aut quibusdam impedit facere fugit minima
            consequatur qui aliquid tempore praesentium.
          </p>
        </div>
      </div>
    </>
  );
};

export default Category;
