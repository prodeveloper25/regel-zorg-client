import { Button, Icon, Input, Label } from "keep-react";
import { Envelope } from "phosphor-react";
import { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const ResetPass = () => {
  const { forgetPassword } = useContext(AuthContext);
  const emailRef = useRef();

  const handleResetPassword = (event) => {
    event.preventDefault;
    const email = emailRef.current.value;
    if (!email) {
      Swal.fire({
        title: "Warning!",
        text: "Please enter your email",
        icon: "warning",
        confirmButtonColor: "#F7941E",
      });

      return;
    } else {
      Swal.fire({
        title: "Success!",
        text: "Please check your email",
        icon: "success",
      });
      forgetPassword(email).then((result) => {
        console.log(result);
      });
    }
  };
  return (
    <div className="min-h-screen m-2 flex flex-col justify-center">
      <Helmet>
        <title>RegelZorg | Reset Password</title>
      </Helmet>
      <div className="">
        <form className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md">
          <fieldset className="space-y-1">
            <Label htmlFor="name">
              Enter your email{" "}
              <span className="text-red-500 text-[17px]">*</span>
            </Label>

            <div className="relative">
              <Input
                id="email"
                ref={emailRef}
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
          <p style={{ marginTop: "10px" }} className="text-sm text-[#6f737a]">
            Already Reset Password?{" "}
            <Link to="/rz-adminpanel" className="underline text-[#F7941E]">
              login
            </Link>
          </p>
          <Button
            onClick={handleResetPassword}
            style={{ marginTop: "26px" }}
            size="sm"
            color="secondary"
            className="bg-[#F7941E] w-full hover:bg-[#F7941E]  "
            type="submit"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
