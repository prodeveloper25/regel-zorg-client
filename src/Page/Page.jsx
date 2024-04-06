import { Helmet } from "react-helmet-async";
import MultiForm from "./FormSteps/MultiForm";
import Hero from "./Hero";
import UserNavBar from "./UserNavBar";

const Page = () => {
  return (
    <div className="mb-11">
      <Helmet>
        <title>
          Book an appointment online - RegelZorg Driving license inspections
        </title>
      </Helmet>
      <UserNavBar></UserNavBar>
      <div className="max-w-screen-xl mx-auto">
        <Hero></Hero>

        <MultiForm />
      </div>
    </div>
  );
};

export default Page;
