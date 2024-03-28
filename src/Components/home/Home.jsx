import Banner from "../banner/Banner";
import Books from "../books/Books";

const Home = () => {
  return (
    <div className="container mx-auto w-11/12 lg:w-full">
      <Banner />
      <Books />
    </div>
  );
};

export default Home;
