import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AdminLoginRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center text-xl">
        Loading...
      </div>
    );
  }
  if (user) {
    return <Navigate to="/rz-adminpanel/allbooking"></Navigate>;
  }
  return children;
};

export default AdminLoginRoutes;
