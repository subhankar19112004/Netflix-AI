import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header.jsx";

const Login = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="background_image"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <form className="relative flex flex-col items-center justify-center bg-black/80 w-[90%] max-w-md min-h-100 m-auto mt-56 p-10 rounded-md">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full bg-[#333] text-white p-4 mb-4 rounded-md outline-none placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Enter the password"
          className="w-full bg-[#333] text-white p-4 rounded-md outline-none placeholder-gray-400"
        />

        <button className="w-full bg-[#e50914] text-white p-3 rounded-md mt-6 font-semibold hover:bg-[#f40612]">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
