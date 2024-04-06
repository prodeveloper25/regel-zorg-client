import { Button, Icon, Input, Label } from "keep-react";
import { Envelope, Lock } from "phosphor-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const AdminLogin = () => {
  const { signinAdmin } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLoginAdmin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinAdmin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        navigate("/rz-adminpanel/allbooking");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="min-h-screen m-2 flex flex-col justify-center">
      <Helmet>
        <title>RegelZorg | Login</title>
      </Helmet>
      <div className="">
        <form
          onSubmit={handleLoginAdmin}
          className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md"
        >
          <fieldset className="space-y-1">
            <Label htmlFor="name">
              Email <span className="text-red-500 text-[17px]">*</span>
            </Label>

            <div className="relative">
              <Input
                id="email"
                placeholder="Enter email"
                type="email"
                required
                name="email"
                className="ps-12"
              />
              <Icon>
                <Envelope size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <fieldset className="space-y-1">
            <Label htmlFor="password">
              Password <span className="text-red-500 text-[17px]">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Enter password"
                type={showPass ? "text" : "password"}
                name="password"
                required
                className="ps-11"
              />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <div
            className="flex mx-1 justify-between items-center"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            <Link
              to="/rz-adminpanel/reset"
              className="underline font-[poppins] text-sm text-[#6f737a]"
            >
              Forget Password
            </Link>
            <label
              className="flex font-[poppins] text-sm text-[#6f737a] gap-2 cursor-pointer"
              htmlFor="showpass"
            >
              <input
                type="checkbox"
                checked={showPass === true ? true : false}
                name="showpass"
                id="showpass"
              />
              <p onClick={() => setShowPass(!showPass)} className="select-none">
                {showPass ? "Hide Password" : "Show Password"}
              </p>
            </label>
          </div>
          <Button
            style={{ marginTop: "32px" }}
            size="sm"
            color="secondary"
            className="bg-[#F7941E] w-full hover:bg-[#F7941E]  "
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
