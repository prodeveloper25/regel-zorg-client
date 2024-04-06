import { Button, Navbar, Tooltip } from "keep-react";
import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import "./AdminNavBar.css";

const AdminNavBar = () => {
  const { user, logoutAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogoutAdmin = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Logout your admin account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F7941E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutAdmin()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Logout your admin account",
              icon: "success",
            });
            navigate("/rz-adminpanel");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="bg-[#F9FAFB]">
      <Navbar fluid={true} className="max-w-screen-xl bg-[#F9FAFB] mx-auto">
        <Navbar.Container className="flex items-center justify-between lg:py-4">
          <Navbar.Container className="flex items-center ">
            <NavLink
              to="allbooking"
              className="lg:text-3xl text-2xl font-semibold"
            >
              <span className="text-[#F7941E]">Regel</span>
              <span className="text-[#231F20]">Zorg</span>
            </NavLink>
            <div className="NavDNone">
              <NavLink
                to="allbooking"
                className="ml-28 all-link font-[poppins] hover:text-[#F7941E]"
              >
                All Booking
              </NavLink>
              <NavLink
                to="locations"
                className="ml-8 all-link font-[poppins] hover:text-[#F7941E]"
              >
                Locations
              </NavLink>
              <NavLink
                to="alladmin"
                className="ml-8 all-link font-[poppins] hover:text-[#F7941E]"
              >
                Admins
              </NavLink>
            </div>
          </Navbar.Container>

          <Navbar.Container className="flex items-center gap-6 ">
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-4 NavDNone"
            >
              <NavLink to="addadmin">
                <Button size="sm" className="bg-[#F7941E] hover:bg-[#F7941E]">
                  Create Admins
                </Button>
              </NavLink>
              {user && (
                <Tooltip
                  content="Logout"
                  trigger="hover"
                  placement="bottom"
                  animation="duration-300"
                  style="dark"
                >
                  <Button
                    onClick={handleLogoutAdmin}
                    size="sm"
                    className="text-[#00AEEF] bg-[#F9FAFB] hover:bg-[#F9FAFB]"
                  >
                    <SignOut className="text-2xl"></SignOut>
                  </Button>
                </Tooltip>
              )}
            </Navbar.Container>
            <Navbar.Container className="flex gap-1">
              <Navbar.Toggle className="block" />
            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
          >
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <NavLink to="allbooking" className="all-link font-[poppins]">
                All Booking
              </NavLink>
              <NavLink to="locations" className="all-link font-[poppins]">
                Locations
              </NavLink>

              <NavLink to="alladmin" className="all-link font-[poppins]">
                Admins
              </NavLink>
              <NavLink to="addadmin">
                <Button className="bg-[#F7941E] py-2 px-1 text-sm hover:bg-[#F7941E]">
                  Create Admins
                </Button>
              </NavLink>
              {user && (
                <Tooltip
                  content="Logout"
                  trigger="hover"
                  placement="bottom"
                  animation="duration-300"
                  style="dark"
                >
                  <Button
                    onClick={handleLogoutAdmin}
                    size="sm"
                    className="text-[#00AEEF] bg-white hover:bg-white"
                  >
                    <SignOut className="text-2xl"></SignOut>
                  </Button>
                </Tooltip>
              )}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default AdminNavBar;
