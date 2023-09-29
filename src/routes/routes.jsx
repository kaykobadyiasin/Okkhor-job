import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SingleProductDetails from "../Pages/SingleProductDetails/SingleProductDetails";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/singleProductDetails/:_id',
            element: <SingleProductDetails/>
        },
      ]
    },
  ]);

  export default routes