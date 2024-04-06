import { createBrowserRouter } from "react-router-dom";
import Page from "../Page/Page";
import AddAdmin from "../admin/AddAdmin";
import AddLocation from "../admin/AddLocation";
import AddSubLocation from "../admin/AddSubLocation/AddSubLocation";
import AddTime from "../admin/AddTime";
import AdminLogin from "../admin/AdminLogin";
import AllAdmin from "../admin/AllAdmin";
import AllBooking from "../admin/AllBooking";
import LocationDetails from "../admin/LocationDetails";
import LocationTimes from "../admin/LocationTimes";
import Locations from "../admin/Locations";
import ResetPass from "../admin/ResetPass";
import Dashboard from "../layout/Dashboard";
import AdminLoginRoutes from "./AdminLoginRoutes";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/rz-adminpanel",
    element: <Dashboard />,
    children: [
      {
        path: "/rz-adminpanel",
        element: (
          <AdminLoginRoutes>
            <AdminLogin />
          </AdminLoginRoutes>
        ),
      },
      {
        path: "/rz-adminpanel/reset",
        element: (
          <AdminLoginRoutes>
            <ResetPass />
          </AdminLoginRoutes>
        ),
      },
      {
        path: "locations",
        element: (
          <AdminRoutes>
            <Locations />
          </AdminRoutes>
        ),
      },
      {
        path: "locationDetails/:id",
        element: (
          <AdminRoutes>
            <LocationDetails />
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://regelzorg-server.vercel.app/subLocations/${params.id}`
          ),
      },
      {
        path: "times/:id",
        element: (
          <AdminRoutes>
            <LocationTimes></LocationTimes>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://regelzorg-server.vercel.app/times/${params.id}`),
      },
      {
        path: "addlocation",
        element: (
          <AdminRoutes>
            <AddLocation />
          </AdminRoutes>
        ),
      },
      {
        path: "addtimes",
        element: (
          <AdminRoutes>
            <AddTime></AddTime>
          </AdminRoutes>
        ),
      },
      {
        path: "addsublocation",
        element: (
          <AdminRoutes>
            <AddSubLocation />
          </AdminRoutes>
        ),
      },
      {
        path: "addadmin",
        element: (
          <AdminRoutes>
            <AddAdmin />
          </AdminRoutes>
        ),
      },
      {
        path: "allbooking",
        element: (
          <AdminRoutes>
            <AllBooking />
          </AdminRoutes>
        ),
      },
      {
        path: "alladmin",
        element: (
          <AdminRoutes>
            <AllAdmin />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
