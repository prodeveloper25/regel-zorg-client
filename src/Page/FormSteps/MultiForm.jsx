import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";
import DefendedComponent from "./DefendedComponent";
import EightStep from "./EightStep";
import FifthStep from "./FifthStep";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import SevenStep from "./SevenStep";
import SixStep from "./SixStep";
import ThirdStep from "./ThirdStep";

const MultiForm = () => {
  const { currentStep, defendedComponent } = useContext(StepContext);

  const showStep = (step) => {
    switch (step) {
      case 1:
        if (defendedComponent === 1) {
          return <FirstStep />;
        } else {
          return <DefendedComponent />;
        }
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <SixStep />;
      case 7:
        return <SevenStep />;
      case 8:
        return <EightStep />;
    }
  };
  return (
    <div className="lg:w-[1150px] mx-auto">
      <div className="mx-2">
        {/* title and steps start  */}
        <div className="lg:flex items-center mt-5 justify-between">
          <h1 className="lg:text-3xl lg:mb-0 md:mb-2 md:text-2xl flex justify-center font-bold font-[poppins]">
            RESERVE AN APPOINTMENT ONLINE
          </h1>
          <h1 className="lg:text-3xl md:text-2xl flex justify-center font-bold font-[poppins] gap-2">
            STEP:<span className="text-[#00AEEF]"> {currentStep} / 8</span>
          </h1>
        </div>
        {/* title and steps end */}

        {/* main content start  */}
        <div>{showStep(currentStep)}</div>
        {/* main content end  */}
      </div>
    </div>
  );
};

export default MultiForm;
