import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";
import { StepContext } from "../../context/StepProvider";

const SixStep = () => {
  const { setCurrentStep, setInputError, inputError, userData, setUserData } =
    useContext(StepContext);
  const handleSixStepNext = () => {
    if (userData?.frname === undefined) {
      setCurrentStep(6);
      setInputError({
        ...inputError,
        frnameMessgage: "Please choose your salutation.",
      });
      return;
    } else if (userData?.lastname === "" || userData?.lastname === undefined) {
      setCurrentStep(6);
      setInputError({
        ...inputError,
        lastnameMessgage: "Please enter your last name.",
      });
      return;
    } else if (
      userData?.phonenumber === "" ||
      userData?.phonenumber === undefined
    ) {
      setCurrentStep(6);
      setInputError({
        ...inputError,
        phonenumberMessgage: "Please enter a valid telephone number. in.",
      });
      return;
    } else if (
      userData?.emailaddress === "" ||
      userData?.emailaddress === undefined
    ) {
      setCurrentStep(6);
      setInputError({
        ...inputError,
        emailaddressMessgage: "Please enter a valid email address.",
      });
      return;
    } else {
      setCurrentStep(7);
    }
  };
  return (
    <div className="mt-5">
      <div className="mb-5">
        <h5 className="text-lg gap-2 flex w-[800px] font-[poppins]">
          Enter your personal details below.
        </h5>
      </div>

      {/* input element start  */}
      <div className="flex mb-4">
        <label className="text-lg font-bold">
          Salutation: <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center gap-5 ml-[110px]">
          <div className="flex gap-2 text-lg">
            <input
              type="radio"
              value={userData["frname"]}
              checked={userData.frname === "Mr"}
              onChange={() => setUserData({ ...userData, frname: "Mr" })}
              name="frname"
              id="frname"
            />
            <label htmlFor="frname">Mr.</label>
          </div>

          <div className="flex gap-2 text-lg">
            <input
              type="radio"
              value={userData["frname"]}
              checked={userData.frname === "Mrs"}
              onChange={() => setUserData({ ...userData, frname: "Mrs" })}
              name="frname"
              id="frname2"
            />
            <label htmlFor="frname2">Mrs.</label>
          </div>
        </div>
      </div>
      {inputError.frnameMessgage && userData?.frname === undefined ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.frnameMessgage}
          </p>
        </div>
      ) : null}
      <div className="flex mb-2">
        <label className="text-lg font-bold">
          Last name: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="border w-[360px] px-1 ml-[109px] py-1 border-black mb-2"
          name="lastname"
          placeholder="Last name"
          id="lastname"
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
      </div>
      {(inputError.lastnameMessgage && userData?.lastname === undefined) ||
      userData?.lastname === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.lastnameMessgage}
          </p>
        </div>
      ) : null}
      <div className="flex mb-2">
        <label className="text-lg font-bold">
          Phone number: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="border px-1 py-1 ml-[69px] border-black mb-2"
          name="phonenumber"
          placeholder="Phone number"
          id="phonenumber"
          value={userData["phonenumber"]}
          onChange={(e) =>
            setUserData({ ...userData, phonenumber: e.target.value })
          }
        />
        <p className="font-[poppins] text-slate-700 ml-2">(e.g. 06-12345678)</p>
      </div>
      {(inputError.phonenumberMessgage &&
        userData?.phonenumber === undefined) ||
      userData?.phonenumber === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.phonenumberMessgage}
          </p>
        </div>
      ) : null}
      <div className="flex mb-2">
        <label className="text-lg font-bold">
          E-mail address: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="border px-1 w-[360px] py-1 ml-[70px] border-black mb-2"
          name="emailaddress"
          placeholder="Email address"
          id="emailaddress"
          value={userData["emailaddress"]}
          onChange={(e) =>
            setUserData({ ...userData, emailaddress: e.target.value })
          }
        />
      </div>
      {(inputError.emailaddressMessgage &&
        userData?.emailaddress === undefined) ||
      userData?.emailaddress === "" ? (
        <div>
          <p className="text-red-600 mb-3 -mt-2">
            <strong>Error:</strong> {inputError.emailaddressMessgage}
          </p>
        </div>
      ) : null}

      {/* input element end  */}

      {/* button setup start  */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => setCurrentStep(5)}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          <ArrowLeft /> PREVIOUS
        </button>
        <button
          onClick={handleSixStepNext}
          className="bg-[#00AEEF] text-white px-4 py-1 text-lg font-[poppins] flex items-center gap-2"
        >
          NEXT ONE <ArrowRight />
        </button>
      </div>
      {/* button setup end  */}
    </div>
  );
};

export default SixStep;
