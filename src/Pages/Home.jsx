import { Link } from "react-router-dom";
import MainImage from "../assets/main.jpg";

const Home = () => {
  return (
    <div
      className=" bg-center w-screen md:bg-cover bg-no-repeat  h-screen"
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundImage: `url(${MainImage})`,
      }}
    >
      <div className="flex h-full pt-[100px] md:pt-[200px] justify-center">
        <div className="text-white px-5 md:p-0 lg:text-center mx-auto md:text-left">
          <h2 className="mb-4 text-5xl md:text-7xl ">Developer Connector</h2>
          <h4 className="mb-6 text-xl md:text-3xl">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h4>
          <Link to="/register" className="bg-[#17A2B8] text-xl p-2 px-3">
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="text-xl bg-white p-2 px-4 ml-2 text-black"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
