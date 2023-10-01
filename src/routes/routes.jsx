import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SingleProductDetails from "../Pages/SingleProductDetails/SingleProductDetails";
import SingleNewsDetails from "../Pages/Home/SingleNewsDetails/SingleNewsDetails";

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
        {
            path: '/singleNewsDetails/:_id',
            element: <SingleNewsDetails/>
        },
      ]
    },
  ]);

  export default routes