import { Button, Icon, Input, Label } from "keep-react";
import { Envelope, Lock, User } from "phosphor-react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AddAdmin = () => {
  const { createAdmin, updateAdminProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddAdmin = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;

    createAdmin(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateAdminProfile(displayName)
          .then(() => {
            const saveUser = { name: displayName, email: email };
            fetch("https://regelzorg-server.vercel.app/admins", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                navigate("/rz-adminpanel/allbooking");
              });
            console.log("admin has been Updated");
          })
          .catch((error) => console.log(error));
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen m-2 flex flex-col justify-center">
      <Helmet>
        <title>RegelZorg | Create a admin</title>
      </Helmet>
      <div>
        <form
          onSubmit={handleAddAdmin}
          className="mx-auto max-w-md space-y-2 rounded-lg border p-8 shadow-md"
        >
          <fieldset className="space-y-1">
            <Label htmlFor="password">
              Name <span className="text-red-500 text-[17px]">*</span>
            </Label>
            <div className="relative">
              <Input
                id="displayName"
                placeholder="Enter name"
                type="text"
                name="displayName"
                required
                className="ps-11"
              />
              <Icon>
                <User size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
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
                className="ps-11"
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
                type="password"
                name="password"
                required
                className="ps-11"
              />
              <Icon>
                <Lock size={19} color="#AFBACA" />
              </Icon>
            </div>
          </fieldset>
          <Button
            size="sm"
            color="secondary"
            className="bg-[#F7941E] hover:bg-[#F7941E]  "
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
