import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Details from "../Pages/Details/Details";
import NewsDetails from "../layouts/NewsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                loader: ({params})=>{
                    return fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                },
                element: <Categories></Categories>
            }
        ]
    },
    {
        path: '/details',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        children:[
            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    }
])