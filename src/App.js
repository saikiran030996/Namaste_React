import React, { lazy,Suspense } from 'react';
import ReactDOM from "react-dom/client"
import Header  from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';

// Chuncking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    return (<div className="app">
        <Header></Header>
        <Outlet></Outlet>

    </div>)
 }


const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout></AppLayout>,
        children: [{
            path:"/",
            element:<Body></Body>
        },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/grocery",
                element:<Suspense fallback><Grocery></Grocery></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement:<Error></Error>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);

