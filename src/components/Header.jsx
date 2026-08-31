import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_URL } from "../utils/constants";
import { auth } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearch } from "../utils/redux/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/error");
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
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
        {user && (
          <div className="flex items-center gap-3 sm:gap-4">
            {showGptSearch && (
              <select
                defaultValue="en"
                className=" cursor-pointer appearance-none rounded-md border border-white/20 bg-black/70 px-4 py-2 pr-9 text-sm font-medium tracking-wide text-white outline-none backdrop-blur- transition-all duration-3 hover:border-white/40 hover:bg-white/ focus:border-white/50 focus:ring-2 focus:ring-white/ active:scale-[0.98]"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option
                    key={lang.identifier}
                    value={lang.identifier}
                    className="bg-[#181818] text-white"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <img
              src={user.photoURL || USER_URL}
              alt="User"
              className="h-9 w-9 rounded-md object-cover sm:h-10 sm:w-10"
            />

            <button
              onClick={handleGptSearchClick}
              className="rounded-md bg-[#232b2e] px-3 py-2 text-sm font-medium text-amber-200 transition duration-200 hover:bg-[#191717] active:scale-95 sm:px-4"
            >
              GPT Search
            </button>

            <button
              onClick={handleSignOut}
              className="rounded-md bg-[#e50914] px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-[#f40612] active:scale-95 sm:px-4"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
