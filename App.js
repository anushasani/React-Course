import React from "react";
import ReactDom from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Restaurantmenu from "./src/components/Restaurantmenu";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const About = lazy(() => import("./src/components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/Contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
