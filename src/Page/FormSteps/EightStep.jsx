import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const EightStep = () => {
  const { setCurrentStep, submitData, userData } = useContext(StepContext);
  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg gap-2 flex w-[800px] font-[poppins]">
          Please check the information below carefully and confirm the
          appointment by clicking on the [confirm appointment] button at the
          bottom
        </h5>
      </div>

      {/* main content start  */}
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Type of inspection:</p>
        <p className="text-lg ml-20">{userData?.selecter}</p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Price:</p>
        <p className="text-lg ml-[194px]">{userData?.price}</p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Location:</p>
        <p className="text-lg ml-[163px]">{userData?.location}</p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Date & Time:</p>
        <p className="text-lg ml-[129px]">
          {userData?.date} - at {userData?.time}
        </p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Name:</p>
        <p className="text-lg ml-[186px]">
          {userData?.frname}. {userData?.lastname}
        </p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Date of birth:</p>
        <p className="text-lg  ml-[128px]">{userData?.dateofbirth}</p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Phone number:</p>
        <p className="text-lg ml-[110px]">{userData?.phonenumber}</p>
      </div>
      <div className="mb-2 flex">
        <p className="text-lg font-bold">Email address:</p>
        <p className="text-lg ml-[122px]">{userData?.emailaddress}</p>
      </div>
      {/* main content end  */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(7)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={submitData}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          CONFIRM APPOINTMENT <ArrowRight />
        </button>
      </div>
      {/* button setup end  */}
    </div>
  );
};

export default EightStep;
