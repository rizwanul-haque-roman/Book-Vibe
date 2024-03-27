import book from "../../assets/BlackHouse.jpg";

const Featured = () => {
  return (
    <div className="container mx-auto">
      <h1 className="playfair text-black text-5xl font-bold text-center mt-8 mb-4 rounded-2xl">
        Coming Soon.
      </h1>
      <p className="work-sans font-normal text-lg text-center">
        A chilling small-town mystery with a web of secrets
      </p>
      <div className="grid grid-cols-3 justify-center items-center">
        <div>
          <h1 className="playfair text-black text-5xl font-bold text-center mt-8 mb-4 rounded-2xl">
            Blackhouse
          </h1>
          <p className="work-sans font-medium text-[#131313CC] text-center mb-6">
            By <span>Matthew Day Jackson</span>
          </p>
          <p className="playfair">
            A shocking murder shatters the peace of a small town. Detective
            Irina Petrova arrives to find a web of secrets and suspicious
            characters. Everyone has a motive, and the investigation takes a
            personal turn. Can Irina Petrova expose the truth before it&apos;s
            too late?
          </p>
        </div>
        <div>
          <img src={book} alt="" />
        </div>
        <div className="stats stats-vertical">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#50BE08"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-[#50BE08]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title playfair text-black font-bold">
              Total Likes
            </div>
            <div className="stat-value text-[#50BE08]">25.6K</div>
            <div className="stat-desc">↗︎ 47% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-[#328EFF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title playfair text-black font-bold">
              Total Copy Sold
            </div>
            <div className="stat-value text-[#328EFF]">2.6M</div>
            <div className="stat-desc">↗︎ 35% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-[#FFAC33]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title playfair text-black font-bold">
              New Orders
            </div>
            <div className="stat-value text-[#FFAC33]">1,200</div>
            <div className="stat-desc">↗︎ 27% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
