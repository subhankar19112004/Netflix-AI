import { useRef, useState } from "react";
import { BACKGROUND_IMAGE_URL } from "../utils/constants";
import Header from "./Header.jsx";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!email.current.value || !password.current.value) {
      setErrorMessage("Email and password fields cannot be empty.");
      return;
    }
    const validationMessage = checkValidData(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;
    // Sign-Up Logic

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " (Error Code: " + errorCode + ")");
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " (Error Code: " + errorCode + ")");
        });
    }
  };
  return (
    <div className="relative min-h-auto">
      <Header />

      <div className="fixed inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt="background_image"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <form
        className={`relative flex flex-col items-start justify-center bg-black/80 w-[90%] max-w-md min-h-100 m-auto mt-50 p-10 rounded-md text-white
        
        ${errorMessage ? "border-2 border-black  shadow-2xl shadow-red-600 " : "border-2 border-black  shadow-2xl shadow-green-200"}`}
      >
        <p className="text-2xl font-light font-serif mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-[#333] text-white p-4 mb-4 rounded-md outline-none placeholder-gray-400 font-extralight font-serif"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter your email"
          className="w-full bg-[#333] text-white p-4 mb-4 rounded-md outline-none placeholder-gray-400 font-extralight font-serif"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter the password"
          className="w-full bg-[#333] text-white p-4 rounded-md outline-none placeholder-gray-400 font-extralight font-serif"
        />
        <p className="text-red-500 font-thin font-mono text-sm mt-2">
          {errorMessage}
        </p>

        <button
          onClick={handleButtonClick}
          className="w-full bg-[#e50914] text-white p-3 rounded-md mt-4 font-mono font-light hover:bg-[#f40612] cursor-pointer "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={handleToggle} className="mt-4 text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-white hover:underline cursor-pointer">
            {isSignIn ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
