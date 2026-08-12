import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <>
      <div className="">
        <img
          className=" fixed h-20 w-36 top-0 z-10"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Header;
