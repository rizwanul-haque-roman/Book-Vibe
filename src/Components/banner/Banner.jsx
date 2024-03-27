import { NavLink } from "react-router-dom";
import book from "../../assets/book.png";
import bg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero playfair rounded-2xl"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className=" flex lg:flex-row-reverse items-center justify-center bg-[#131313bb] p-20 rounded-2xl">
        <img src={book} className="w-1/3" />
        <div className="ml-20">
          <h1 className="text-5xl font-bold leading-[74px] mb-10 text-white ">
            &#34;There is more treasure in books than in all the pirate&apos;s
            loot on Treasure Island.&#34;
            <br /> - Walt Disney
          </h1>
          <NavLink to={"/listed"}>
            <button className="btn text-xl text-white bg-[#23BE0A] border-[#23BE0A] work-sans">
              View The List
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
