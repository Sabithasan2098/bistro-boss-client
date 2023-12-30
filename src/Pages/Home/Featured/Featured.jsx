import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured  mb-20 bg-fixed">
      <div className=" bg-black bg-opacity-40 pt-10">
        <SectionTitle
          heading={"from our menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="flex justify-start gap-10 px-36 pt-12 pb-32 items-center ">
          <img className="h-[300px] w-[500px]" src={featuredImage} alt="" />
          <div className="text-white space-y-3">
            <h3 className="text-2xl">March 20, 2023</h3>
            <h3 className="uppercase text-2xl">where can i get some</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              totam ut libero repellat asperiores blanditiis! Ducimus, hic
              dolore obcaecati ex quis quod, autem ipsam optio, perspiciatis
              itaque quae incidunt aut. Rem labore id quia consequuntur
              reprehenderit ipsa eos dignissimos impedit praesentium,
              repudiandae accusamus sint, maiores facere exercitationem
              molestias magni possimus!
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
