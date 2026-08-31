import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

const Body = () => {
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
    },
    {
      path: "/*",
      element: <Error/>,
    },
    {  
      path: "/logi/iauigiegoiuaebgoiaegeohgeiourhgoiehoiearhhoaeje",
      element: <Loading />,
    }
  ]);


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
