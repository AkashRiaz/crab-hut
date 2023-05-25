import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Resister from "../components/Resister/Resister";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import ChefDetailsLayout from "../layout/ChefDetailsLayout";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>,
                loader:()=>fetch('/question-ans.json')
            }
        ]
    },
    {
        path:'chefAllData',
        element:<ChefDetailsLayout></ChefDetailsLayout>,
        children:[
            {
            path:':id',
            element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://chef-recipe-hunter-server-side-akashriaz.vercel.app/chefAllData/${params.id}`)
        },
    ]
    },
   
  ])

  export default router;