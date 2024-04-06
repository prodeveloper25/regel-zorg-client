import { Outlet, useLocation } from "react-router-dom";
import AdminNavBar from "../admin/AdminNavBar/AdminNavBar";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/rz-adminpanel" ? (
        ""
      ) : <AdminNavBar /> && location.pathname === "/rz-adminpanel/reset" ? (
        ""
      ) : (
        <AdminNavBar />
      )}
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
