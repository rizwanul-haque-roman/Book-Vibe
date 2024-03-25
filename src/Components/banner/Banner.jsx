import { NavLink } from "react-router-dom";
import book from "../../assets/book.png";

const Banner = () => {
  return (
    <div className="hero bg-[#22be0a4e] playfair rounded-2xl p-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={book} />
        <div>
          <h1 className="text-5xl font-bold leading-[74px] mb-10">
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
