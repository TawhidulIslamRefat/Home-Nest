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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { index:true, element: <Home></Home> },
      {path:"/all-properties", Component:AllProperties},
      {path:"/add-property", Component:AddProperty},
      {path:"/my-property", Component:MyProperties},
      {path:"/properties/:id", Component:PropertyDetails},
      {path:"/my-ratings", Component:MyRatings},
      {path:"/properties/:id/edit", Component:UpdateProperty},
      {path:"/forget-pass", Component:ForgetPassword},
      {path:"/login", Component:Login},
      {path:"/register", Component:Register},
    ],
  },
]);

export default router;
