import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, Sparkles, Home, LogOut, ChevronDown } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";

import { LOGO_URL, SUPPORTED_LANGUAGES, USER_URL } from "../utils/constants";

import { auth } from "../firebase/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { toggleGptSearch } from "../utils/redux/gptSlice";
import { changeLanguage } from "../utils/redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
      navigate("/error");
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
    setMenuOpen(false);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-50
        h-20
        bg-linear-to-b from-black/95 via-black/60 to-transparent
      "
    >
      <div
        className="
          mx-auto flex h-full w-full items-center justify-between
          px-4 sm:px-6 md:px-10 lg:px-14
        "
      >
        {/* Netflix Logo */}
        <img
          src={LOGO_URL}
          alt="Netflix Logo"
          className="
            h-9 w-auto object-contain
            sm:h-11
            md:h-12
          "
        />

        {user && (
          <>
            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Language */}
              {showGptSearch && (
                <div className="relative">
                  <select
                    value={langKey}
                    onChange={handleLanguageChange}
                    className="
                      h-11 w-48 cursor-pointer appearance-none
                      rounded-lg border border-white/15
                      bg-black/70 px-4 pr-10
                      text-sm font-medium text-white
                      outline-none backdrop-blur-xl
                      transition-all duration-200
                      hover:border-white/30
                      focus:border-white/40
                      focus:ring-2 focus:ring-white/10
                    "
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

                  <ChevronDown
                    size={16}
                    className="
                      pointer-events-none absolute right-3 top-1/2
                      -translate-y-1/2 text-white/60
                    "
                  />
                </div>
              )}

              {/* Profile */}
              <div
                className="
                  ml-1 flex h-11 w-11 items-center justify-center
                  overflow-hidden rounded-lg border border-white/10
                  bg-white/5
                "
              >
                <img
                  src={user.photoURL || USER_URL}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* GPT / Home */}
              <button
                onClick={handleGptSearchClick}
                className="
                  group flex h-11 items-center gap-2
                  rounded-lg bg-[#232b2e] px-4
                  text-sm font-semibold text-amber-200
                  transition-all duration-200
                  hover:bg-[#30393d]
                  hover:shadow-lg hover:shadow-black/20
                  active:scale-95
                "
              >
                {showGptSearch ? (
                  <Home size={16} />
                ) : (
                  <Sparkles
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                )}

                {showGptSearch ? "Home" : "GPT Search"}
              </button>

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="
                  flex h-11 items-center gap-2
                  rounded-lg bg-[#e50914] px-4
                  text-sm font-semibold text-white
                  shadow-lg shadow-red-950/20
                  transition-all duration-200
                  hover:bg-[#f40612]
                  hover:shadow-red-900/30
                  active:scale-95
                "
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>

            {/* ================= MOBILE CONTROLS ================= */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Mobile Profile */}
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  overflow-hidden rounded-full
                  border border-white/20
                  bg-white/10
                  shadow-lg shadow-black/30
                "
              >
                <img
                  src={user.photoURL || USER_URL}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Modern Menu Toggle */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="
                  relative flex h-10 w-10 items-center justify-center
                  overflow-hidden rounded-xl
                  border border-white/15
                  bg-white/10
                  text-white
                  shadow-lg shadow-black/30
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-white/30
                  hover:bg-white/15
                  active:scale-90
                "
              >
                <Menu
                  size={21}
                  className={`
                    absolute transition-all duration-300
                    ${
                      menuOpen
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }
                  `}
                />

                <X
                  size={21}
                  className={`
                    absolute transition-all duration-300
                    ${
                      menuOpen
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                    }
                  `}
                />
              </button>
            </div>
          </>
        )}
      </div>

      {/* ================= MOBILE MENU ================= */}
      {user && (
        <div
          className={`
            absolute left-3 right-3 top-19
            overflow-hidden rounded-2xl
            border border-white/10
            bg-[#111111]/95
            shadow-2xl shadow-black/50
            backdrop-blur-2xl
            transition-all duration-300
            md:hidden
            ${
              menuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-3 scale-95 opacity-0"
            }
          `}
        >
          <div className="p-3">
            {/* User Info */}
            <div
              className="
                mb-3 flex items-center gap-3
                rounded-xl border border-white/5
                bg-white/4 p-3
              "
            >
              <img
                src={user.photoURL || USER_URL}
                alt="User"
                className="h-10 w-10 rounded-lg object-cover"
              />

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {user.displayName || "Netflix User"}
                </p>

                <p className="truncate text-xs text-white/40">{user.email}</p>
              </div>
            </div>

            {/* Language */}
            {showGptSearch && (
              <div className="relative mb-2">
                <select
                  value={langKey}
                  onChange={handleLanguageChange}
                  className="
                    h-11 w-full cursor-pointer appearance-none
                    rounded-xl border border-white/10
                    bg-white/5 px-4 pr-10
                    text-sm font-medium text-white
                    outline-none
                    transition-all duration-200
                    focus:border-white/30
                    focus:bg-white/10
                  "
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

                <ChevronDown
                  size={16}
                  className="
                    pointer-events-none absolute right-4 top-1/2
                    -translate-y-1/2 text-white/50
                  "
                />
              </div>
            )}

            {/* Home / GPT Search */}
            <button
              onClick={handleGptSearchClick}
              className="
                flex h-12 w-full items-center gap-3
                rounded-xl px-4
                text-sm font-semibold text-amber-200
                transition-all duration-200
                hover:bg-white/10
                active:scale-[0.98]
              "
            >
              {showGptSearch ? <Home size={18} /> : <Sparkles size={18} />}

              <span>{showGptSearch ? "Home" : "GPT Search"}</span>
            </button>

            {/* Divider */}
            <div className="my-2 h-px bg-white/10" />

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="
                flex h-12 w-full items-center gap-3
                rounded-xl px-4
                text-sm font-semibold text-red-400
                transition-all duration-200
                hover:bg-red-500/10
                active:scale-[0.98]
              "
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
