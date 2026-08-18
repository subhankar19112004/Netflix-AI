import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { LOGO_URL, USER_URL } from "../utils/constants";
import { auth } from "../firebase/firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/error");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-linear-to-b from-black/90 to-transparent">
      <div className="flex h-full items-center justify-between px-4 sm:px-8 md:px-12">
        {/* Netflix Logo */}
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="h-12 w-auto object-contain sm:h-14 md:h-16"
        />

        {/* User Section */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={USER_URL}
              alt="User"
              className="h-9 w-9 rounded-md object-cover sm:h-10 sm:w-10"
            />

            <button
              onClick={handleSignOut}
              className="rounded-md bg-[#e50914] px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-[#f40612] active:scale-95 sm:px-4"
            >
              Sign Out
            </button>
          </div>
      </div>
    </header>
  );
};

export default Header;
