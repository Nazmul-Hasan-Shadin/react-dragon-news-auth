
import {
    createBrowserRouter,
   } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import NewsPage from "../Pages/News/NewsPage";
import PrivetRoutes from "./PrivetRoutes";

   const router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
              path: '/news/:id',
              element: <PrivetRoutes> <NewsPage></NewsPage></PrivetRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]

    }
   ])

   export default router
