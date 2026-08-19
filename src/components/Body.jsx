import { useDispatch } from "react-redux";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Error from "./Error";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error/>,
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
