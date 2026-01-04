import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddProperty from "../Pages/AddProperty/AddProperty";
import MyProperties from "../Pages/MyProperties/MyProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Login from "../Pages/Login/Login";
import MyRatings from "../Pages/MyRatings/MyRatings";
import Register from "../Pages/Register/Register";
import UpdateProperty from "../Pages/UpdateProperty/UpdateProperty";
import ErrorPage from "../Components/Error/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PriveteRoute/PriveteRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";
import Terms from "../Pages/Privacy/Terms/Privacy/Terms";
import Blog from "../Pages/Blog/Blog";
import DashboardLayout from "../Layout/DashboardLayout";
import Overview from "../Pages/Dashboard/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/all-properties", Component: AllProperties },
      { path: "/contact-us", Component: ContactUs },
      { path: "/about", Component: About },
      { path: "/blog", Component: Blog },
      { path: "/terms", Component: Terms },
      { path: "/profile", element: <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute> },
      {
        path: "/properties/:id",
        element: (
            <PropertyDetails></PropertyDetails>
        ),
      },
      { path: "/properties/:id/edit", Component: UpdateProperty },
      { path: "/forget-pass", Component: ForgetPassword },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
   path:'/dashboard',
   element:<PrivateRoute>
    <DashboardLayout></DashboardLayout>
   </PrivateRoute>,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      index:true,
      element:<Overview></Overview>
    },
    {
     path:"/dashboard/my-property",
     element:<MyProperties></MyProperties>
    },
    {
     path:"/dashboard//my-ratings",
     element:<MyRatings></MyRatings>
    },
    {
     path:"/dashboard/add-property",
     element:<AddProperty></AddProperty>
    },
    {
      index:true,
      element:<Overview></Overview>
    }
   ]
  },
   {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
